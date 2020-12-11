import { ObjectId } from "mongodb";
import * as uuid from "uuid";

export class TokenData {
    constructor(public id: string, public salt: string) { }
}

export function createToken(userId: ObjectId) {
    return Buffer.from(JSON.stringify(new TokenData(userId + "", uuid.v4()))).toString("base64");
}

export function decodeToken(token: string): TokenData {
    try {
        return JSON.parse(Buffer.from(token, "base64").toString("utf8"));
    } catch (err) {
        // console.log(err);
        return null;
    }
}