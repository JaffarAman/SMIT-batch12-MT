import express from "express";
import { adminAuthMiddleware, authMiddleware } from "../middleware/auth.js";
import { allRestaurant, RestaurantApprove } from "../controller/adminController.js";

const adminRoute = express.Router()



adminRoute.get("/all-restaurant", adminAuthMiddleware, allRestaurant)
adminRoute.patch("/restaurant-approve/:id", adminAuthMiddleware, RestaurantApprove)

export default adminRoute