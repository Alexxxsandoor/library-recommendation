import Favorite from './Favorite.js'
import Recommendations from '../recommendations/Recommendations.js'
import Book from '../books/Book.js'

class FavoriteService{
    async create(favorite){
        //work with recommendations - START
        //favorite = {bookID, userID}
        const book = await Book.findById(favorite.bookID)
        const recommendation = await Recommendations.findOne({
            userID: favorite.userID,
            genre: book.genre,
            author: book.author
        })
        if(!recommendation){
                Recommendations.create({
                userID: favorite.userID,
                genre: book.genre,
                author: book.author
            })
        }
        
        //work with recommendations - END
        const favoriteFind = await Favorite.findOne(favorite)
        if(!favoriteFind){
            const createdFavorite = await Favorite.create(favorite)
            return createdFavorite
        }
        
    }
    async getUsersFavorite(id){
        const favoriteList = await Favorite.find({userID:id})
        return favoriteList
    }

    async delete(favorite){
        const favoriteOne = await Favorite.findOneAndDelete({bookID: favorite.bookID , userID: favorite.userID})
        return favoriteOne
    }

}

export default new FavoriteService()