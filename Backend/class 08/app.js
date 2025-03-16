import express from "express";
import mongoose from "mongoose";
import UserModel from "./models/userSchema.js";
const app = express();
const PORT = 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const URI = `mongodb+srv://admin:admin@cluster0.2mtjk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`

mongoose.connect(URI)
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((err) => {
        console.log("MongoDB connection error", err);
    })

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.post("/createuser", async (req, res) => {
    console.log(req.body);
    try {
        const user = await UserModel.create(req.body)
        res.json({
            message: "User created successfully",
            success: true,
            user,
        })
    } catch (error) {
        res.json({
            message: error.message,
            success: false,
        })
    }

})

app.get("/getalluser", async (req, res) => {

    try {
        // const response = await UserModel.findOne(
        //     {
        //         name: "Jaffar"
        //     }
        // )
        // const response = await UserModel.findById("67d6402f81a62d5ff2684cbd")
        const response = await UserModel.find()
        res.json({
            message: "get all users",
            success: true,
            response,
        })
    } catch (error) {
        res.json({
            message: error.message,
            success: false,
        })
    }


})


app.put("/updateuser/:id", async (req, res) => {
    try {
        console.log(req.params.id)
        const id = req.params.id
        const newdata = req.body
        const update = await UserModel.findByIdAndUpdate(id, newdata, { new: true })
        res.json({
            message: "User Updated",
            success: true,
            data: update
        })
    } catch (error) {
        res.json({
            message: error.message,
            success: false,
        })
    }


});

app.delete("/deleteUser/:id", async (req, res) => {
    const { id } = req.params;

    const response = await UserModel.findByIdAndDelete(id);

    res.json({
        message: "User deleted successfully",
    })
})


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

