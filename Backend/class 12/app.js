import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import UserModel from "./models/UserSchema.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

const app = express()
const PORT = process.env.PORT || 5000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

const URI = `mongodb+srv://admin:admin@cluster0.t9deziy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`


mongoose.connect(URI)
    .then(res => console.log("MONGODB SUCCESSFULLY CONNECTED!"))
    .catch(err => console.log("MONGODB ERROR", err))




// fullName, lastName, gender, email, password,

// USER SIGNUP API
app.post("/signup", async (request, response) => {
    try {
        const body = request.body
        const user = await UserModel.findOne({ email: body.email })

        if (user) {
            return response.json({
                message: "Email address already exists!",
                data: null,
                status: false
            })
        }


        const userPassword = body.password
        const hashPass = await bcrypt.hash(userPassword, 10)
        const obj = {
            ...body,
            password: hashPass
        }

        const userRes = await UserModel.create(obj)

        response.json({
            message: "User successfully signup",
            data: userRes,
            status: true
        })

    } catch (error) {
        response.json({
            message: error.message || "something went wrong",
            status: false
        })
    }
})


app.post("/login", async (request, response) => {

    try {

        const { email, password } = request.body

        const user = await UserModel.findOne({ email })
        console.log(
            user, "user"
        )
        if (!user) {
            return response.json({
                message: "email or password invalid",
                status: false
            })
        }

        const passCompare = await bcrypt.compare(password, user.password)
        console.log("passCompare", passCompare)

        if (!passCompare) {
            return response.json({
                message: "email or password invalid",
                status: false
            })
        }
        const JWT_SIGN = "SMITBATCH12"
        delete user.password
        const token = jwt.sign({ user }, JWT_SIGN)
        console.log("token", token)
        return response.json({
            message: "user successfully login",
            status: true,
            data: user,
            token
        })


    } catch (error) {
        response.json({
            message: error.message || "something went wrong",
            status: false
        })
    }

})




app.listen(PORT, () => console.log(`server running on http://localhost:${PORT}`))