import express from 'express'
import userRouter from './routes/userRoutes.js'
import dotenv from 'dotenv'
import { connectDb } from './db/connection.js'

dotenv.config()
const PORT = process.env.PORT || 3000


const app = express()
connectDb()
app.use(express.json());


app.use('/api/v1/users', userRouter)


app.listen(PORT, ()=> {
    console.log(`server is running on server :- ${PORT}`)
})