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
}

export default new RevController()