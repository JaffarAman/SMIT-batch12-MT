import bcrypt from "bcryptjs"
import UserModel from "../schema/User.js"
import jwt from "jsonwebtoken"
import nodemailer from "nodemailer"
import { text } from "express"
import { SignupEmailTemplate } from "../templates/emailTemplate.js"
import OTPModel from "../schema/otp.js"


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
        const transporter = nodemailer.createTransport({
            service: "Gmail",
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
                user: process.env.EMAIL,
                pass: process.env.APP_PASSWORD,
            },
        });

        const otp = Math.floor(100000 + Math.random() * 900000);


        const mailOptions = {
            from: process.env.EMAIL,
            to: userObj.email,
            subject: "User Signup",
            html: SignupEmailTemplate(userObj, otp)
        };

        const userEmail = await transporter.sendMail(mailOptions)
        console.log("userEmail", userEmail)
        // Maintain OTP COllecton

        await OTPModel.create({
            otp,
            email: userObj.email
        })

        // {
        //     otp,
        //     email,
        //     isUsed
        // }

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
        if (!body.email || !body.password) {
            return res.status(400).json({
                message: "required field are missing"
            })
        }

        console.log("body", body)
        const user = await UserModel.findOne({ email: body.email })
        console.log("user", user)
        if (!user) {
            return res.status(400).json({
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
        res.status(500).json({
            message: "Internal server error"
        })
    }

}


export const OTPVerifyController = async (req, res) => {
    try {
        const { otp, email } = req.body

        const otpRes = await OTPModel.findOne({ email, otp, isUsed: false })
        console.log("otpRes", otpRes)

        if (!otpRes) {
            return res.json({
                message: "OTP InValid",
                status: false
            })
        }

        otpRes.isUsed = true
        await otpRes.save()

        await UserModel.findOneAndUpdate({ email }, { isVerified: true })

        res.json({
            message: "Account verified",
            status: true
        })



    } catch (error) {
        console.log("error", error.message)
    }
}