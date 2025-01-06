import express from "express";
import authController from "../controllers/auth.controller";
import { validateRequestBody } from "../middlewares/validateRequestBody";
import registerSchema from "../schemas/auth/register.schema";
import loginSchema from "../schemas/auth/login.schema";

const authRouter = express.Router();

authRouter.post("/register", validateRequestBody(registerSchema), authController.register);
authRouter.post("/login", validateRequestBody(loginSchema), authController.login);

export default authRouter;
