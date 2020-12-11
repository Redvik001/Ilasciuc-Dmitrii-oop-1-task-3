import { Request, Response } from "express";
import fetch from "node-fetch";
import querystring from "querystring";
import { gAuthConfig, serverConfig } from "../../../config";
import * as uuid from "uuid";
import jwt from "jsonwebtoken";
import jwksClient from 'jwks-rsa';
import { mdbCollections } from "../../../app";
import { ClientUser } from "../../../models/clientUser";
import { createToken } from "../../../common/authUtils";

let discoveryDoc: any;
fetch("https://accounts.google.com/.well-known/openid-configuration").then(async (resp) => {
    if (!resp.ok) throw "DiscoveryDoc status not is ok";
    else discoveryDoc = await resp.json();
});

export function loginFromGoogleStep1(req: Request, resp: Response) {
    req.session.state = JSON.stringify({
        salt: uuid.v4(),
    });
    req.session.nonce = uuid.v4();

    resp.redirect(discoveryDoc.authorization_endpoint + "?" + querystring.stringify({
        client_id: gAuthConfig.clientId,
        nonce: req.session.nonce,
        state: req.session.state,
        response_type: "code",
        scope: "openid email",
        redirect_uri: serverConfig.uri + "/client/loginFromGoogleStep2"
    }));
}

export async function loginFromGoogleStep2(req: Request, resp: Response) {
    if (req.query.error) throw `Error: ${req.query.error}. Details: ${req.query.error_description}.`;
    if (req.query.state !== req.session.state) throw "Invalid state parameter.";

    const data = await (await fetch(discoveryDoc.token_endpoint, {
        body: JSON.stringify({
            code: req.query.code,
            client_id: gAuthConfig.clientId,
            client_secret: gAuthConfig.clientSecret,
            redirect_uri: serverConfig.uri + "/client/loginFromGoogleStep2",
            grant_type: "authorization_code"
        }),
        method: "POST"
    })).json();
    if (data.error) throw `Error: ${data.error}. Details: ${data.error_description}.`;

    const idTokenData = jwt.decode(data.id_token, { complete: true, json: true });
    if (idTokenData.payload.nonce !== req.session.nonce) throw "Invalid nonce parameter.";

    verifiIdToken(data.id_token, idTokenData);

    req.session.state = null;
    req.session.nonce = null;

    let user = await mdbCollections.clientUsers.findOne({ email: idTokenData.payload.email });
    if (!user) {
        user = new ClientUser(idTokenData.payload.email);
        user._id = (await mdbCollections.clientUsers.insertOne(user)).insertedId;
    }
    const newToken = createToken(user._id);
    mdbCollections.clientUsers.updateOne({ _id: user._id }, { $set: { token: newToken } });
    user.token = newToken;

    resp.send(`<script>
                    window.opener.postMessage("${newToken}", "*");
                    window.close();
                </script>`);
}

function verifiIdToken(idToken: string, idTokenData) {
    jwksClient({ jwksUri: discoveryDoc.jwks_uri }).getSigningKey(idTokenData.header.kid, (err, key) => {
        if (err) throw "Error: " + err;
        jwt.verify(idToken, key.getPublicKey(), { algorithms: [idTokenData.header.alg] }, (err) => {
            if (err) throw "Error: " + err;
        });
    });
}