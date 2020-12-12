import { json, Router } from "express";
import { checkTokenInterceptor } from "../controllers/auth/checkToken";
import { changeLastFeedingDate } from "../controllers/tamagotchi/changeLastFeedingDate";
import { changeLastWalkingDate } from "../controllers/tamagotchi/changeLastWalkingDate";
import { createTamagotchi } from "../controllers/tamagotchi/createTamagotchi";
import { deleteTamagotchi } from "../controllers/tamagotchi/deleteTamagotchi";
import { getUserTamagotchies } from "../controllers/tamagotchi/getUserTamagotchies";

export const tamagotchiRouter = Router();
tamagotchiRouter.use(checkTokenInterceptor);
tamagotchiRouter.get("/getUserTamagotchies", getUserTamagotchies);
tamagotchiRouter.post("/createTamagotchi", createTamagotchi);
tamagotchiRouter.delete("/deleteTamagotchi", deleteTamagotchi);
tamagotchiRouter.put("/changeLastFeedingDate", changeLastFeedingDate);
tamagotchiRouter.put("/changeLastWalkingDate", changeLastWalkingDate);