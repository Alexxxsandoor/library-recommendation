import express from 'express'
import mongoose from 'mongoose'

import bookRouter from './books/BookRouter.js';
import userRouter from './users/UserRouter.js';
import revRouter from './rev/RevRouter.js';


const PORT = 3456;
const DB_PASSWORD = 'DZCgxAkDOAlw5Bb8'
const DB_USERNAME = 'vverstukov14'
const DB_URL = `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@cluster0.nym1fvt.mongodb.net/?retryWrites=true&w=majority`

const app = express()
app.use(express.json())

app.use('/api', bookRouter)
app.use('/api', userRouter)
app.use('/api', revRouter)



async function startApp(){
    try {
        await mongoose.connect(DB_URL)
        app.listen(PORT, ()=>console.log(`server started on port http://localhost:${PORT}`))
    } catch (error) {
        console.error(error)
    }
}

startApp()