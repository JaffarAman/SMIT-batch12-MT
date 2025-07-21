import cors from "cors"
import dotenv from "dotenv"
import express from "express"
import authRouter from "./routes/auth.js"
import restaurantRouter from "./routes/restaurant.js"
import { dbConnection } from "./config/db.js"
import { cloudinaryConfig } from "./config/cloudinary.js"
import uploadImage from "./routes/uploadImage.js"
import adminRoute from "./routes/admin.js"
import cron from "node-cron"
import UserModel from "./schema/User.js"
import nodemailer from "nodemailer"
import { welcomeTemplate } from "./templates/welcomeTemplate.js"
dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

app.use(express.json()) //body parser
app.use(express.urlencoded({ extended: true }))
app.use(cors())

dbConnection()


app.use("/api/auth", authRouter)
app.use("/api/restaurant", restaurantRouter)
app.use("/api/image", uploadImage)
app.use("/api/admin", adminRoute)


app.get("/", (request, response) => {
    response.send("SERVER UP")

})


async function foo() {
    const start = new Date();
    start.setHours(0, 0, 0, 0); // today at midnight

    const end = new Date();
    end.setHours(24, 0, 0, 0); // tomorrow at midnight



    const userData = await UserModel.find({
        createdAt: {
            $gte: start,
            $lt: end
        }
    })
    console.log("userData", userData)
    
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
    userData.forEach(async (user) => {



        const mailOptions = {
            from: process.env.EMAIL,
            to: user.email,
            subject: "",
            html: welcomeTemplate(user)
        };

        await transporter.sendMail(mailOptions)
    })






}
// foo()
// cron.schedule('*/2 * * * * ', foo);

app.listen(PORT, () => console.log(`server running on http://localhost:${PORT}`))
