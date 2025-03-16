import express from "express";
import mongoose from "mongoose";

const app = express()
const PORT = 5000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const uri = `mongodb+srv://admin:admin@cluster0.bs4pr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`

mongoose.connect(uri)
    .then(() => {
        console.log("MONGODB CONNECTED!")
    })
    .catch((error) => {
        console.log("MongoDB Error", error.message)
    })



app.post("/createuser", (request, response) => {
    console.log(request.body, "body")

})


app.listen(PORT, () => console.log("server running"))