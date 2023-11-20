import RecommendationsService from "./RecommendationsService.js"


class RecommendationsController {
    async getRecommendations(req,res){
        try {
            const favorite = await RecommendationsService.getRecommendations(req.params.id)
            res.json(favorite)
        } catch (error) {
            res.status(500).json(error.message)
        }
    }

}
export default new RecommendationsController()