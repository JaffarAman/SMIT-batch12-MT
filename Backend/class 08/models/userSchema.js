import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    gender: {
        type: String,
    },
    age: {
        type: Number,
    },
    email: {
        type: String,
    },
    password: {
        type: String,
    },
    // createdAt :{
    //     type : Date,
    //     default : Date.now,
    // },

})

const UserModel = mongoose.model("User", userSchema);

export default UserModel;
