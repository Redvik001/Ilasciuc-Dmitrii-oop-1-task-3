import cors from "cors";
import { app, connectToMongoDb } from "./app";
import { clientRouter } from "./routes/client";
import { cookiesDefaultOptions, serverConfig } from "./config";
import cookieSession from "cookie-session";

app.use(cookieSession({
    name: "backendSession",
    secret: "2358143f-7e84-4cf5-a059-46c6aa8d1f9d",
    ...cookiesDefaultOptions
}));
app.use(cors());

app.use("/client", clientRouter);

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