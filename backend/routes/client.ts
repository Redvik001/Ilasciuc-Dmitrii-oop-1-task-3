import { Router } from "express";
import { loginFromGoogleStep1, loginFromGoogleStep2 } from "../controllers/client/auth/loginFromGoogle";
import { checkTokenInterceptor, checkTokenRoute } from "../controllers/client/auth/checkToken";
import { logout } from "../controllers/client/auth/logout";

export const clientRouter = Router();

clientRouter.get("/loginFromGoogleStep1", loginFromGoogleStep1);
clientRouter.get("/loginFromGoogleStep2", loginFromGoogleStep2);
clientRouter.get("/checkToken", checkTokenRoute);
clientRouter.get("/logout", checkTokenInterceptor, logout);