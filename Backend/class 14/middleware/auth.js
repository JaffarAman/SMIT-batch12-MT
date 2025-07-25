import jwt from "jsonwebtoken"

export const authMiddleware = async (req, res, next) => {
    // console.log(req.headers.authorization.split(" ")[1], "req.headers")

    try {
        const token = req.headers.authorization.split(" ")[1]
        console.log("token", token)
        const isVerify = await jwt.verify(token, process.env.jwtPrivateKey)
        console.log("isVerify", isVerify)

        if (isVerify?.id) {
            next()
        } else {
            res.json({
                message: "unAuthorization user"
            })
        }
    } catch (error) {
        res.json({
            message: "unAuthorization user"
        })
    }

}