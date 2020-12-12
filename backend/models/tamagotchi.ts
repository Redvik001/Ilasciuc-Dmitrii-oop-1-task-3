import { ObjectId } from "mongodb";


export class Tamagotchi {
    _id: ObjectId;
    name: string;
    type: TamagotchiType;
    createDate: number = +new Date;
    isDeath: boolean = false;
    lastWalkingDate?: number;
    lastFeedingDate?: number;
    userId: ObjectId;

    constructor(name: string, type: TamagotchiType, userId: ObjectId) {
        this.name = name;
        this.type = type;
        this.userId = userId;
        if (type === "cat" || type === "dog" || type === "parrot") {
            this.lastFeedingDate = +new Date;
            if (type === "cat" || type === "dog") {
                this.lastWalkingDate = +new Date;
            }
        }
    }
}

export type TamagotchiType = "dog" | "cat" | "сobblestone" | "parrot";