import Book from './Book.js'

class BookService{
    async create(book){
        const createdBook = await Book.create(book)
        return createdBook
    }
    async createBigList(books){
        const createdBooks = await Book.create(books)
        return createdBooks
    }
    async getAll(){
        const books = await Book.find()
        return books
    }
    async getOne(id){
        if(!id) throw new Error('Problem with id')
        const book = await Book.findById(id)
        return book
    }
    async update(book){
        if(!book._id) throw new Error('Problem with id')
        const updatedBook = await Book.findByIdAndUpdate(book._id, book, {new: true})
        return updatedBook
    }
    async delete(id){
        if(!id) throw new Error('Problem with id')
        const deletedBook = await Book.findByIdAndDelete(id)
        return deletedBook
    }
    async deleteAll(){
        const deletedBooks= await Book.deleteMany()
        return deletedBooks
    }
}

export default new BookService()