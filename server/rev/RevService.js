import Rev from './Rev.js'

class RevService{
    async create(review){
        const createdReviews = await Rev.create(review)
        return createdReviews 
    }
    async getReviewsByBook(id){
        if(!id) throw new Error('Problem with id')
        const reviewsBook = await Rev.find({bookID: id})
        return reviewsBook 
    }
}

export default new RevService()