import { Router } from "express";
import { login, profile  } from "./auth.controller";
import { authenticateJWT } from "../../middlewares/auth.middlware";
// import { authorizeRole } from "../../middlewares/auth.middleware";

const authRouter = Router();

authRouter.post("/login", login);
authRouter.get("/profile", authenticateJWT, profile);


export default authRouter;