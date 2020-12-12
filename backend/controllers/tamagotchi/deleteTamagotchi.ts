import { Request, Response } from "express";
import { ObjectId } from "mongodb";
import { mdbCollections } from "../../app";


export async function deleteTamagotchi(req: Request, resp: Response) {
    await mdbCollections.tamagotchies.deleteOne({ userId: req.user._id, _id: new ObjectId(req.query._id as string) });
    resp.json();
}