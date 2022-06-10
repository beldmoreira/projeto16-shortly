import { Router } from "express";
import {signUp} from "../controllers/signUpController.js";
import  * as validation from "../middlewares/signUpValidator.js";

const signUpRouter = Router();

signUpRouter.post("/signup",validation.validateSignUp,signUp);

export default signUpRouter;
