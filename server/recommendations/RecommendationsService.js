import Recommendations from './Recommendations.js'
import Book from '../books/Book.js'

class RecommendationsService{
    async getRecommendations(id){
        const recommendations = await Recommendations.find({userID: id})
        if(recommendations){
          const genres = []
          recommendations.map(el=> el.genre).map(el=> genres.push({genre: el}))

          const autors = []
          recommendations.map(el=> el.author).map(el=> autors.push({author: el}))

          if(genres.length && autors.length){
            const BookListAutorAndGenre = await Book.find({$or: genres, $or: autors})    // aurot + genres
          const authorList = await Book.find({$or: autors}) // aurot
          const genreList = await Book.find({$or: genres}) // genres

          const AuthorsAndGenre_Authors_Genres = [...[...BookListAutorAndGenre].map(el => el._id), ...[...authorList].map(el => el._id), ...[...genreList].map(el => el._id)]

          function countRepeatingElements(arr) {
            const counts = {};
            for (const el of arr) {
              counts[el] = counts[el] ? counts[el] + 1 : 1;
            }
            return Object.entries(counts).map(([el, count]) => ({
              _id: el,
              count: count
            }));
          }

          const REC_LIST = countRepeatingElements(AuthorsAndGenre_Authors_Genres).map(el=> el._id)

          return REC_LIST
          }
        } 
    }
}

export default new RecommendationsService()