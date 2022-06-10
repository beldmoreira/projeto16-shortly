import { Router } from "express";
import {getRanking} from "../controllers/rankingController.js"

const rankingRouter = Router();

usersRouter.get("/ranking",getRanking);

export default rankingRouter;