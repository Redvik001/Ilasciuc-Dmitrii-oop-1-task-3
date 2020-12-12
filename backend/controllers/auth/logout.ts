import { Request, Response } from "express";
import { mdbCollections } from "../../app";

export async function logout(req: Request, resp: Response) {
    await mdbCollections.clientUsers.updateOne({ _id: req.user._id, }, { $set: { token: null } });
    resp.json();
}