import express from "express"
import { uploadImageController } from "../controller/imageController.js"
import { authMiddleware } from "../middleware/auth.js"
import upload from "../middleware/multer.js"

const uploadImage = express.Router()


uploadImage.post("/upload", [authMiddleware, upload.any("image")], uploadImageController)



export default uploadImage

