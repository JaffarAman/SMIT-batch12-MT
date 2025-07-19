import mongoose from "mongoose";

const schema = new mongoose.Schema({
    restaurantName: String,
    details: String,
    contactNumber: String,
    address: String,
    email: String,
    category: String,
    isOpen: {
        type: Boolean,
        default: false
    },
    isApproved: {
        type: Boolean,
        default: false
    },

    createBy: String, // create user relation using ref

    createAt: {
        type: Date,
        default: Date.now()
    },
    isDeleted: {
        type: Boolean,
        default: false
    },
    imageUrl : String
})

const RestaurantModel = mongoose.model("restaurant", schema)

export default RestaurantModel