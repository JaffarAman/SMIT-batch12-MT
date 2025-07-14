import bcrypt from "bcryptjs"
import UserModel from "../schema/User.js"
import jwt from "jsonwebtoken"



export const signupController = async (request, response) => {
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
}


export const loginController = async (req, res) => {
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

}