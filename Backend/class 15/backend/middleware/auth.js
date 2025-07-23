import jwt from "jsonwebtoken"
import UserModel from "../schema/User.js"

export const authMiddleware = async (req, res, next) => {
    // console.log(req.headers.authorization.split(" ")[1], "req.headers")
    try {
        const token = req.headers.authorization.split(" ")[1]
        console.log("token", token)
        const isVerify = await jwt.verify(token, process.env.jwtPrivateKey)
        console.log("isVerify", isVerify)

        if (isVerify?.id) {
            req.user = isVerify
            next()
        } else {
            res.status(401).json({
                message: "unAuthorization user"
            })
        }
    } catch (error) {
        res.json({
            message: "unAuthorization user"
        })
    }

}



export const adminAuthMiddleware = async (req, res, next) => {
    // console.log(req.headers.authorization.split(" ")[1], "req.headers")
    try {
        const token = req.headers.authorization.split(" ")[1]
        console.log("token", token)
        const isVerify = await jwt.verify(token, process.env.jwtPrivateKey)
        console.log("isVerify", isVerify)

        if (isVerify?.id) {
            const user = await UserModel.findById(isVerify.id)
            console.log("user", user)

            if (user.type !== "admin") {
                return res.status(403).json({
                    message: "Only Admin can access this API!",
                    status: false
                })
            }
            req.user = isVerify 
            next()

        } else {
            res.status(401).json({
                message: "unAuthorization user"
            })
        }
    } catch (error) {
        res.status(401).json({
            message: "unAuthorization user"
        })
    }

}