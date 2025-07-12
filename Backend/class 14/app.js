import express from "express"
import mongoose from "mongoose"
import UserModel from "./schema/User.js"
import bcrypt from "bcryptjs"
import dotenv from "dotenv"
import nodemailer from "nodemailer"
import jwt from "jsonwebtoken"
import { authMiddleware } from "./middleware/auth.js"


dotenv.config()


console.log("ENV", process.env.PORT)

const app = express()
const PORT = process.env.PORT || 5000

app.use(express.json()) //body parser
app.use(express.urlencoded({ extended: true }))


const PRIVATE_KEY = 123456

const URI = `mongodb+srv://admin:admin@cluster0.t9deziy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`

// Connect mongoDB
mongoose.connect(URI)
    .then(() => console.log(`🚀 mongoDB connected`))
    .catch((err) => console.log(`💥MongoDB ERROR: ${err.message}`))






app.get("/", (request, response) => {
    response.send("SERVER UP")

})

app.post("/signup", async (request, response) => {
    try {
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

        //SEND EMAIL 
        // const transporter = nodemailer.createTransport({
        //     service: "Gmail",
        //     host: "smtp.gmail.com",
        //     port: 465,
        //     secure: true,
        //     auth: {
        //         user: process.env.EMAIL,
        //         pass: "your_app_password",
        //     },
        // });


        response.json({
            message: "USER SIGNUP SUCCESSFULLY!"
        })
    } catch (error) {
        response.json({
            status: false,
            message: error.message || "something went wrong!"
        })
    }
})


app.post("/login", async (req, res) => {
    try {
        const body = req.body
        console.log("body", body)
        const user = await UserModel.findOne({ email: body.email })
        console.log("user", user)
        if (!user) {
            return res.json({
                message: "INVALID EMAIL OR PASSWORD",
                status: false
            })
        }

        const comparePass = await bcrypt.compare(body.password, user.password)
        console.log("comparePass", comparePass)
        if (!comparePass) {
            return res.json({
                message: "INVALID EMAIL OR PASSWORD",
                status: false
            })
        }

        // jwt sign
        const PRIVATE_KEY = process.env.jwtPrivateKey
        const token = jwt.sign({ id: user._id }, PRIVATE_KEY, {
            // expiresIn: ""
        })
        console.log("token", token)
        res.json({
            message: "USER SUCCESSFULLY LOGIN",
            data: user,
            status: true,
            token
        })


    } catch (error) {

    }

})


const checkAuth = (req, res, next) => {
    const auth = true
    if (auth) {
        next()
    } else {
        res.json({
            message: "UN AUTH",
            status: false
        })
    }
}


// PRivate api
app.post("/create", authMiddleware, (req, res) => {


    res.json({
        message: "SUCCESSFULLY CREATED",
        status: true
    })

})


app.listen(PORT, () => console.log(`server running on http://localhost:${PORT}`))