import express from "express"
import mongoose from "mongoose"
import UserModel from "./schema/User.js"
import bcrypt from "bcryptjs"

const app = express()
const PORT = process.env.PORT || 5000

app.use(express.json()) //body parser
app.use(express.urlencoded({ extended: true }))


const URI = `mongodb+srv://admin:admin@cluster0.t9deziy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`

// Connect mongoDB
mongoose.connect(URI)
    .then(() => console.log(`🚀 mongoDB connected`))
    .catch((err) => console.log(`💥MongoDB ERROR: ${err.message}`))



app.get("/", (request, response) => {
    response.send("SERVER UP")

})

app.post("/signup", async (request, response) => {
    const body = request.body

    const isExist = await UserModel.findOne({ email: body.email })
    console.log("isExist", isExist)
    if (isExist) {
        return response.json({
            status: false,
            message: "Email Address Already Exist!",
            data: null
        })
    }

    const hashPassword = await bcrypt.hash(body.password, 10)
    const userObj = {
        ...body,
        password: hashPassword
    }

    await UserModel.create(userObj)
    console.log("USER CREATED")

    response.json({
        message: "USER SIGNUP SUCCESSFULLY!"
    })
})


app.listen(PORT, () => console.log(`server running on http://localhost:${PORT}`))