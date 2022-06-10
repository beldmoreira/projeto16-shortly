import { Router } from "express";
import { deleteUrl, getUrlId, getUrlShort, publishUrlShort } from "../controllers/urlsController.js";
import  * as validation from "../middlewares/urlsValidator.js";

const urlsRouter = Router();
urlsRouter.post("/urls/shorten",validation.validateUrls,publishUrlShort)
urlsRouter.get("/urls/:id",getUrlId) 
urlsRouter.get("/urls/open/:shortUrl",getUrlShort)
urlsRouter.delete("/urls/:id",deleteUrl) 

export default urlsRouter;
