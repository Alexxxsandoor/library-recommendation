import Rev from './Rev.js'

class RevService{
    async create(review){
        const createdReviews = await Rev.create(review)
        return createdReviews 
    }
    async getReviewsByBook(id){
        if(!id) throw new Error('Problem with book id')
        const reviewsBook = await Rev.find({bookID: id})
        return reviewsBook 
    }
    async getUserReviews(id){
        if(!id) throw new Error('Problem with user id')
        const UserReviews = await Rev.find({userID: id})
        return UserReviews 
    }
    async deleteReview(id){
        if(!id) throw new Error('Problem with user id')
        const UserReviews = await Rev.findByIdAndDelete(id)
        return UserReviews 
    }
}

export default new RevService()