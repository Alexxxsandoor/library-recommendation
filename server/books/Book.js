import mongoose from 'mongoose'

const Book = new mongoose.Schema({
    name:{type: String, require:true},
    author:{type: String},
    genre:{type: String},
    description:{type: String},
    image:{type: String},
})

export default mongoose.model("Book", Book)

