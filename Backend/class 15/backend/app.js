import cors from "cors"
import dotenv from "dotenv"
import express from "express"
import mongoose from "mongoose"
import { authMiddleware } from "./middleware/auth.js"
import authRouter from "./routes/auth.js"
import restaurantRouter from "./routes/restaurant.js"
import { dbConnection } from "./config/db.js"
dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

app.use(express.json()) //body parser
app.use(express.urlencoded({ extended: true }))
app.use(cors())

dbConnection()

app.use("/api/auth", authRouter)
app.use("/api/restaurant", restaurantRouter)


app.get("/", (request, response) => {
    response.send("SERVER UP")

})


app.listen(PORT, () => console.log(`server running on http://localhost:${PORT}`))
