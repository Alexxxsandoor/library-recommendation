import Router from 'express'
import FavoriteController from './FavoriteController.js'

const favoriteRouter = new Router()

favoriteRouter.post("/favorite", FavoriteController.create)
favoriteRouter.get("/favorite/:id", FavoriteController.getUsersFavorite)
favoriteRouter.delete("/favorite", FavoriteController.delete)




export default favoriteRouter