import express from "express";
import mongoose from "mongoose";
import UserModel from "./models/userSchema.js";
const app = express()
const PORT = 5000


app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const URI = `mongodb+srv://smitbatch12:smitadmin123456789@cluster0.pvvok.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`


mongoose.connect(URI)
    .then(() => console.log("MONGODB CONNECTED!"))
    .catch((err) => console.log("MONGODB ERROR", err.message))





// DATA CREATE
app.post("/createuser", async (request, response) => {
    console.log("body", request.body)
    try {
        const userResponse = await UserModel.create(request.body)
        console.log("response", userResponse)
        response.json({
            message: "USER CREATED!",
            data: userResponse
        })
    } catch (error) {
        console.log("error", error.message)
        response.json({
            message: error.message || "something went wrong!",
            data: null
        })
    }


})


// GET USERS
app.get("/getAllUser", async (req, res) => {
    try {
        const userResponse = await UserModel.find()
        res.json({
            message: "Fetch All Users",
            data: userResponse
        })

    } catch (error) {
        res.json({
            message: error.message || "something went wrong",
            data: null
        })
    }
})


// update users
app.post("/updateuser/:id", async (req, res) => {
    const userID = req.params.id
    const body = req.body
    const updateResponse = await UserModel.findByIdAndUpdate(userID, body, { new: true })
    res.json({
        message: "user updated",
        data: updateResponse
    })

})



// delete users
app.post("/deleteuser/:id", async (req, res) => {
    const userID = req.params.id
    const deleteResponse = await UserModel.findByIdAndDelete(userID)
    res.json({
        message: "user updated",
        data: null
    })

})

app.listen(PORT, () => console.log(`server running on localhost:${PORT}`))