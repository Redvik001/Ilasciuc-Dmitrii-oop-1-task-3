import { Router } from "express";
import { loginFromGoogleStep1, loginFromGoogleStep2 } from "../controllers/auth/loginFromGoogle";
import { checkTokenInterceptor, checkTokenRoute } from "../controllers/auth/checkToken";
import { logout } from "../controllers/auth/logout";

export const authRouter = Router();

authRouter.get("/loginFromGoogleStep1", loginFromGoogleStep1);
authRouter.get("/loginFromGoogleStep2", loginFromGoogleStep2);
authRouter.get("/checkToken", checkTokenRoute);
authRouter.get("/logout", checkTokenInterceptor, logout);