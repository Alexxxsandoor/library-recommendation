import { Router } from "express";
import RevController from "./RevController.js";

const revRouter = new Router()

revRouter.post('/reviews', RevController.create)
revRouter.get('/reviews/:id', RevController.getReviewsByBook)

export default revRouter