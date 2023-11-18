import Favorite from './Favorite'

class FavoriteService{
    async create(favorite){
        const createdFavorite = await Favorite.create(favorite)
        return createdFavorite
    }
    async getUsersFavorite(id){
        const favoriteList = await Favorite.create({userID:id})
        return favoriteList
    }

}

export default new FavoriteService()