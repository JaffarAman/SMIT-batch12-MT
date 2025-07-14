import express from "express"
import { createRestaurantController, deleteVendorRes, getVendorRestaurant } from "../controller/restaurantController.js"
import { authMiddleware } from "../middleware/auth.js"
const restaurantRouter = express.Router()



///Restaurant
restaurantRouter.post("/create-restaurant", authMiddleware, createRestaurantController)

restaurantRouter.get("/vendor-restaurant", authMiddleware, getVendorRestaurant)
// SOFT DELETE
restaurantRouter.delete("/vendor-restaurant/:id", authMiddleware, deleteVendorRes)


export default restaurantRouter