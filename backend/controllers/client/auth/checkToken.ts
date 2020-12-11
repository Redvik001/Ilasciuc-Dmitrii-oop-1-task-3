import { Request, Response, NextFunction } from "express";
import { mdbCollections } from "../../../app";
import { headersNames } from "../../../config";
import { decodeToken } from "../../../common/authUtils";
import { ObjectId } from "mongodb";

export async function checkTokenInterceptor(req: Request, resp: Response, next: NextFunction) {
    await checkToken(req);
    next();
}

export async function checkTokenRoute(req: Request, resp: Response) {
    await checkToken(req);
    resp.send("");
}


async function checkToken(req: Request) {
    const tokenData = decodeToken(req.headers[headersNames.identityToken]);
    if (!tokenData) throw "Token check failed 1";
    req.user = await mdbCollections.clientUsers.findOne({
        _id: new ObjectId(tokenData.id),
        token: req.headers[headersNames.identityToken]
    });
    if (!req.user) throw "Token check failed 2";
}