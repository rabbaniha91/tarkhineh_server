import express from "express"
import mongoose from "mongoose"
import "dotenv/config"

import connectDB from "./configs/dbConfig.js"

const app = express()



const port = process.env.port || 3000
const dbUrl = process.env.MONGO_URL

connectDB(dbUrl)
mongoose.connection.once("open", () => {
    console.log("Connected to database ...")
    app.listen(port, () => {
        console.log(`server run on ${port}`)
    })
})