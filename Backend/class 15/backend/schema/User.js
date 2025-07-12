import mongoose from "mongoose";

const schema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    email: String,
    password: String,
    phoneNumber: String,
    gender: String,
    dob: String,
    type: {
        type: String,
        enum: ["customer", "admin", "vendor"]
    },
    isVerified: {
        type: Boolean,
        default: false
    },

    createdAt: {
        type: Date,
        default: Date.now()
    }



})

//collection
const UserModel = mongoose.model("user", schema)

export default UserModel