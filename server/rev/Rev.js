import mongoose from 'mongoose'

const Rev = new mongoose.Schema({
    bookID:{type: String, required: true},
    userID:{type: String, require: true},
    review:{type: String},
    grade:{type: Number},
})

export default mongoose.model("Reviews", Rev)