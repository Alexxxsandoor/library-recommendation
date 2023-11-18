import FavoriteService from "./FavoriteService"


class FavoriteController {
    async create(req,res){
        try {
            const favorite = await FavoriteService.create(req.body)
            res.json(favorite)
        } catch (error) {
            res.status(500).json(error.message)
        }
    }
    async getUsersFavorite(req,res){
        try {
            const favorite = await FavoriteService.getUsersFavorite(req.params.id)
            res.json(favorite)
        } catch (error) {
            res.status(500).json(error.message)
        }
    }
}
export default new FavoriteController()