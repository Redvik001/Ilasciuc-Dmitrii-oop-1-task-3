import express from "express";
import { Request, Response } from "express";
import { MongoClient, Db } from "mongodb";

const app = express();

const mdbConfig = {
    userName: "user001",
    password: "H9wUBPsdmspef63c",
    dbname: "main"
}

const mdbClient = new MongoClient(
    `mongodb+srv://${mdbConfig.userName}:${mdbConfig.password}@cluster001-sgsi2.mongodb.net/${mdbConfig.dbname}?retryWrites=true&w=majority`,
    { useUnifiedTopology: true }
)
let mdb: Db;
mdbClient.connect((err) => {
    if (err) return console.log(err);
    mdb = mdbClient.db();
    console.log("MongoDb connected");
});

app.get("/", async (req: Request, resp: Response) => {
    const postsCollection = mdb.collection("posts");
    postsCollection.insertOne({ test: "001" })
    const data = await postsCollection.find().toArray();
    console.log(data);
    resp.send(JSON.stringify(data));
});

const port = process.env.PORT || 5000;
app.listen(port, function () {
    console.log("Server started on port " + port);
});