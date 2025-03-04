import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import connectDb from './config/db'
import ocrRoute from './routes/ocrRoute'
dotenv.config()
connectDb()

const app = express()
app.use(
    cors({
      origin: process.env.FRONT_URL,
      methods: ["GET", "POST"],
      allowedHeaders: ["Content-Type"],
      credentials: true,
    })
  );
app.use(express.json())

app.use("/uploads", express.static("uploads"));

app.use("/api/ocr",ocrRoute)

const PORT = process.env.PORT

app.listen(PORT,()=>{
    console.log(`app started to listed at port ${PORT}`)
})