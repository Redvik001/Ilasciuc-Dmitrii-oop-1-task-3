import express from "express";
import 'express-async-errors';
import { MongoClient, Db, Collection } from "mongodb";
import { mdbConnectionString } from "./config";
import 'source-map-support/register';
import sourceMapSupport from 'source-map-support';
import { User } from "./models/user";
import { Tamagotchi } from "./models/tamagotchi";

sourceMapSupport.install({
    environment: 'node',
    hookRequire: true,
});

export let app = express();
export let mdbClient: MongoClient;
export let mdb: Db;
export let mdbCollections: {
    clientUsers: Collection<User>;
    tamagotchies: Collection<Tamagotchi>;
}


export async function connectToMongoDb() {
    mdbClient = new MongoClient(
        mdbConnectionString,
        { useUnifiedTopology: true }
    )
    await mdbClient.connect();
    mdb = mdbClient.db();
    mdbCollections = {
        clientUsers: mdb.collection<User>("clientUsers"),
        tamagotchies: mdb.collection<Tamagotchi>("tamagotchies")
    }
}