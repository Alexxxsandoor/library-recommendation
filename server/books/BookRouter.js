import Router  from "express";
import BookController from "./BookController.js";

const bookRouter = new Router()

bookRouter.post('/books', BookController.create)
bookRouter.post('/booksList', BookController.createBigList)
bookRouter.get('/books',BookController.getAll)
bookRouter.get('/books/:id',BookController.getOne)
bookRouter.put('/books',BookController.update)
bookRouter.delete('/books/:id',BookController.delete)
bookRouter.delete('/books',BookController.deleteAll)

export default bookRouter

