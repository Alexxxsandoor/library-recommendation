import BookService from './BookService.js'
import BOOKS_LIST from './BOOKS_LIST.js'

class BookController {
    async create(req,res){
        try {
            const book = await BookService.create(req.body)
            res.json(book)
        } catch (error) {
            res.status(500).json(error.message)
        }
    }
    async createBigList(req,res){
        try {
            const book = await BookService.createBigList(BOOKS_LIST)
            res.json(book)
        } catch (error) {
            res.status(500).json(error.message)
        }
    }
    async getAll(req,res){
        try {
            const book = await BookService.getAll()
            res.json(book)
        } catch (error) {
            res.status(500).json(error.message)
        }
    }
    async getOne(req,res){
        try {
            const book = await BookService.getOne(req.params.id)
            res.json(book)
        } catch (error) {
            res.status(500).json(error.message)
        }
    }
    async update(req,res){
        try {
            const book = await BookService.update(req.body)
            res.json(book)
        } catch (error) {
            res.status(500).json(error.message)
        }
    }
    async delete(req,res){
        try {
            const book = await BookService.delete(req.params.id)
            res.json(book)
        } catch (error) {
            res.status(500).json(error.message)
        }
    }
    async deleteAll(req,res){
        try {
            const books= await BookService.deleteAll()
            res.json(books)
        } catch (error) {
            res.status(500).json(error.message)
        }
    }
}
export default new BookController()