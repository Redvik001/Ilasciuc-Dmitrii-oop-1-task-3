import cors from "cors";
import { app, connectToMongoDb } from "./app";
import { authRouter } from "./routes/auth";
import { cookiesDefaultOptions, serverConfig } from "./config";
import cookieSession from "cookie-session";
import { tamagotchiRouter } from "./routes/tamagotchi";
import { json } from "express";

app.use(cookieSession({
    name: "backendSession",
    secret: "2358143f-7e84-4cf5-a059-46c6aa8d1f9d",
    ...cookiesDefaultOptions
}));
app.use(json());
app.use(cors());

app.use("/auth", authRouter);
app.use("/user", tamagotchiRouter);

// app.get("/", async (req: Request, resp: Response) => {
//     const postsCollection = mdb.collection("posts");
//     postsCollection.insertOne({ test: "001" })
//     const data = await postsCollection.find().toArray();
//     console.log(data);
//     resp.send(JSON.stringify(data));
// });

(async () => {
    await connectToMongoDb();

    app.listen(serverConfig.port, () => {
        console.log("Server started on " + serverConfig.uri);
    });
})();