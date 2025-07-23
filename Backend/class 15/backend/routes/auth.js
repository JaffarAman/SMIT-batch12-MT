import express from "express"
import { loginController, OTPVerifyController, signupController } from "../controller/authController.js"
import rateLimit from "express-rate-limit";

const authRouter = express.Router()




// Create rate limiter middleware
const limiter = rateLimit({
    windowMs: 1 * 60 * 1000, // 1 minutes
    max: 5,                 // Limit each IP to 100 requests per window
    message: 'Too many requests from this IP, please try again later.',
});

authRouter.post("/signup", signupController)
authRouter.post("/login", limiter, loginController)
authRouter.post("/otp-verification", OTPVerifyController)



export default authRouter

