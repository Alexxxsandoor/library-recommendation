import { Router } from "express";
import RevController from "./RevController.js";

const revRouter = new Router()

revRouter.post('/reviews', RevController.create)
revRouter.get('/reviews/book/:id', RevController.getReviewsByBook)
revRouter.get('/reviews/user/:id', RevController.getUserReviews)
revRouter.delete('/reviews/:id', RevController.deleteReview)

export default revRouter