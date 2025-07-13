import express from "express"
import mongoose from "mongoose"
import UserModel from "./schema/User.js"
import bcrypt from "bcryptjs"
import dotenv from "dotenv"
import nodemailer from "nodemailer"
import jwt from "jsonwebtoken"
import { authMiddleware } from "./middleware/auth.js"
import cors from "cors"
import RestaurantModel from "./schema/Restaurant.js"

dotenv.config()


console.log("ENV", process.env.PORT)

const app = express()
const PORT = process.env.PORT || 5000

app.use(express.json()) //body parser
app.use(express.urlencoded({ extended: true }))
app.use(cors())

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






///Restaurant
app.post("/create-restaurant", authMiddleware, async (req, res) => {
    // console.log(req.user.id, "req user")

    try {
        const body = req.body
        const userId = req.user.id

        const restaurantObj = {
            ...body,
            createBy: userId
        }
        const response = await RestaurantModel.create(restaurantObj)
        console.log("response", response)
        res.json({
            status: true,
            data: response,
            message: "successfully created! wait for the Admin Approval"
        })

    } catch (error) {
        res.json({
            status: false,
            data: null,
            message: error.message || "something went wrong"
        })
    }




})

app.get("/vendor-restaurant", authMiddleware, async (req, res) => {
    const userId = req.user.id
    console.log("userId", userId)
    const data = await RestaurantModel.find({ createBy: userId , isDeleted : false })

    res.json({ message: "OKAY KI REPORT", data: data, status: true })
})


// SOFT DELETE
app.delete("/vendor-restaurant/:id", authMiddleware, async (req, res) => {
    const params = req.params
    console.log("params", params.id)
    const updateObj = {
        isDeleted: true
    }
    await RestaurantModel.findByIdAndUpdate(params.id, updateObj)
    res.json({ message: "Deleted Succssfully!", status: true })

})


app.listen(PORT, () => console.log(`server running on http://localhost:${PORT}`))