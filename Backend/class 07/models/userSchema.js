import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    age: {
        type: Number
    }
})

const UserModel = mongoose.model("user", userSchema)

export default UserModel