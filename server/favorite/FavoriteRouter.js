import Router from 'express'
import FavoriteController from './FavoriteController'

const FavoriteRouter = new Router()

FavoriteRouter.post("/favorite", FavoriteController.create)
FavoriteRouter.get("/favorite/:id", FavoriteController.getUsersFavorite)




export default FavoriteRouter