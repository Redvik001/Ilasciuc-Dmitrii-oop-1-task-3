import { ObjectId } from "mongodb";


export class ClientUser {
    _id: ObjectId;
    token: string = null;
    email: string;

    constructor(email: string) {
        this.email = email;
    }
}

