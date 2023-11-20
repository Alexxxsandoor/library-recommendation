import mongoose from 'mongoose'

const Recommendations = new mongoose.Schema({
    userID:{type: String, require: true},
    genre:{type: String},
    author:{type: String},
})

export default mongoose.model("Recommendations", Recommendations)