import { Request, Response } from "express";
import { ObjectId } from "mongodb";
import { mdbCollections } from "../../app";
import { tamagotchiMinIntervals } from "../../config";


export async function getUserTamagotchies(req: Request, resp: Response) {
    const tamagotchies = await mdbCollections.tamagotchies.find({ userId: req.user._id }).toArray();
    const deathIds: ObjectId[] = [];
    for (let tamagotchi of tamagotchies) {
        if (tamagotchi.type === "cat" && (
            tamagotchi.lastFeedingDate + tamagotchiMinIntervals.cat.feeding * 60000 < +new Date ||
            tamagotchi.lastWalkingDate + tamagotchiMinIntervals.cat.walking * 60000 < +new Date
        )) {
            deathIds.push(tamagotchi._id);
        } else if (tamagotchi.type === "dog" && (
            tamagotchi.lastFeedingDate + tamagotchiMinIntervals.dog.feeding * 60000 < +new Date ||
            tamagotchi.lastWalkingDate + tamagotchiMinIntervals.dog.walking * 60000 < +new Date
        )) {
            deathIds.push(tamagotchi._id);
        } else if (tamagotchi.type === "parrot" && (
            tamagotchi.lastFeedingDate + tamagotchiMinIntervals.dog.feeding * 60000 < +new Date
        )) {
            deathIds.push(tamagotchi._id);
        }
    }
    if (deathIds.length > 0) await mdbCollections.tamagotchies.updateMany({ _id: { $in: deathIds } }, { $set: { isDeath: true } });
    resp.json(await mdbCollections.tamagotchies.find({ userId: req.user._id }).toArray());
}