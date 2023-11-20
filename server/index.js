import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
const corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

import bookRouter from './books/BookRouter.js';
import userRouter from './users/UserRouter.js';
import revRouter from './rev/RevRouter.js';
import favoriteRouter from './favorite/FavoriteRouter.js';
import recommendationsRouter from './recommendations/RecommendationsRouter.js';

const PORT = 3001;

//!!-----------------
const DB_USERNAME = 'vverstukov14'
const DB_PASSWORD = 'DZCgxAkDOAlw5Bb8'
const DB_URL = `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@cluster0.nym1fvt.mongodb.net/?retryWrites=true&w=majority`
//!!-----------------


const app = express()
app.use(express.json())
app.use(cors(corsOptions))

app.use('/api', bookRouter)
app.use('/api', userRouter)
app.use('/api', revRouter)
app.use('/api', favoriteRouter)
app.use('/api', recommendationsRouter)

async function startApp(){
    try {
        await mongoose.connect(DB_URL)
        app.listen(PORT, ()=>console.log(`server started on port http://localhost:${PORT}`))
    } catch (error) {
        console.error(error)
    }
}

startApp()