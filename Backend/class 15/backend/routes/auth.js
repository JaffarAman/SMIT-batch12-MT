import express from "express"
import { loginController, signupController } from "../controller/authController.js"

const authRouter = express.Router()


authRouter.post("/signup", signupController)
authRouter.post("/login", loginController)



export default authRouter

