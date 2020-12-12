import { Request, Response } from "express";
import { mdbCollections } from "../../app";


export async function changeLastFeedingDate(req: Request, resp: Response) {
    const timestampNow = +new Date;
    await mdbCollections.tamagotchies.updateOne({ _id: req.body._id, userId: req.user._id }, { $set: { lastFeedingDate: timestampNow } });
    resp.json(timestampNow);
}