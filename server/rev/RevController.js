import RevService from "./RevService.js";

class RevController{
    async create(req,res){
        try {
            const user = await RevService.create(req.body)
            res.json(user)
        } catch (e) {
            res.status(500).json(e.message)
        }
    }
    async getReviewsByBook(req,res){
        try {
            const user = await RevService.getReviewsByBook(req.params.id)
            res.json(user)
        } catch (e) {
            res.status(500).json(e.message)
        }
    }
    async getUserReviews(req,res){
        try {
            const user = await RevService.getUserReviews(req.params.id)
            res.json(user)
        } catch (e) {
            res.status(500).json(e.message)
        }
    }
    async deleteReview(req,res){
        try {
            const user = await RevService.deleteReview(req.params.id)
            res.json(user)
        } catch (e) {
            res.status(500).json(e.message)
        }
    }
}

export default new RevController()