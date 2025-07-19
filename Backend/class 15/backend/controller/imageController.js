import { cloudinaryUploader } from "../config/cloudinary.js"
import fs from "fs"

export const uploadImageController = async (req, res) => {
    try {
        console.log("req", req.files[0].path)
        const filePath = req.files[0].path
        const imageRes = await cloudinaryUploader.upload(filePath)
        console.log("imageRes", imageRes)
        //    remove file
        fs.unlink(filePath, (err, res) => {
            // 
        })
        res.json({
            message: "IMAGE UPLOAD",
            url: imageRes.secure_url,
            status: true
        })

    } catch (error) {
        res.json({
            status: false,
            message: error.message
        })
    }
}