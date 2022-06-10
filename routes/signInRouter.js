import { Router } from "express";
import { signIn } from "../controllers/signInController.js";
import  * as validation from "../middlewares/signInValidator.js";

const signInRouter = Router();

signInRouter.post("/signin",validation.validateSignIn,signIn);

export default signInRouter;