import { Request, Response } from "express";
import { mdbCollections } from "../../app";
import { Tamagotchi, TamagotchiType } from "../../models/tamagotchi";


export async function createTamagotchi(req: Request, resp: Response) {
    const data = req.body as { name: string, type: TamagotchiType };
    const newTamagotchiId = (await mdbCollections.tamagotchies.insertOne(new Tamagotchi(data.name, data.type, req.user._id))).insertedId;
    const newTamagotchi = await mdbCollections.tamagotchies.findOne({ _id: newTamagotchiId });
    resp.json(newTamagotchi);
}