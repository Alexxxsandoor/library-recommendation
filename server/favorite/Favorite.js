import mongoose from 'mongoose'

const Favorite = new mongoose.Schema({
    bookID:{type:String, require:true},
    userID:{type:String, require: true}
})

export default mongoose.model("Favorite", Favorite)