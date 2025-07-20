import express from "express"
import { createRestaurantController, deleteVendorRes, dropdownRestaurant, getVendorRestaurant, updateVendorRestaurant, vendorRestaurantStatus } from "../controller/restaurantController.js"
import { authMiddleware } from "../middleware/auth.js"
const restaurantRouter = express.Router()



///Restaurant
restaurantRouter.post("/create-restaurant", authMiddleware, createRestaurantController)

restaurantRouter.get("/vendor-restaurant", authMiddleware, getVendorRestaurant)
// SOFT DELETE
restaurantRouter.delete("/vendor-restaurant/:id", authMiddleware, deleteVendorRes)

// edit DELETE
restaurantRouter.put("/vendor-restaurant/:id", authMiddleware, updateVendorRestaurant)

restaurantRouter.patch("/vendor-restaurant-status/:id" , authMiddleware , vendorRestaurantStatus)

restaurantRouter.get("/dropdown-restaurant" ,  authMiddleware , dropdownRestaurant  )



export default restaurantRouter