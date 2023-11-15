import mongoose from 'mongoose'

const User = new mongoose.Schema({
    login:{type: String, required: true},
    password:{type: String, require: true},
    admin:{type: Boolean},
})

export default mongoose.model("User", User)