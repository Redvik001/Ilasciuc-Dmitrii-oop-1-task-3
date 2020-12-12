import { Request, Response } from "express";
import { mdbCollections } from "../../app";


export async function changeLastWalkingDate(req: Request, resp: Response) {
    const timestampNow = +new Date;
    await mdbCollections.tamagotchies.updateOne({ _id: req.body._id, userId: req.user._id }, { $set: { lastWalkingDate: timestampNow } });
    resp.json(timestampNow);
}