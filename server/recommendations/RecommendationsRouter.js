import Router  from "express";
import RecommendationsController from "./RecommendationsController.js";


const recommendationsRouter = new Router()

recommendationsRouter.get('/recommendations/:id', RecommendationsController.getRecommendations)

export default recommendationsRouter

