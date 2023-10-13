import { Router } from "express";
import { checkAuth } from "../middlewares/auth.js";
import { getArticles } from "../controllers/articles.js";

const articleRouter = Router();

articleRouter.get("/", checkAuth, getArticles);

export default articleRouter;
