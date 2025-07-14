import mongoose from "mongoose"

export const dbConnection = () => {
    try {
        const URI = process.env.mongoDB_URI

        // Connect mongoDB
        mongoose.connect(URI)
            .then(() => console.log(`🚀 mongoDB connected`))
            .catch((err) => console.log(`💥MongoDB ERROR: ${err.message}`))


        // mongoose.connection.on("connected", () => console.log("MONGOOSE IS CONNECTED"))
        // mongoose.connection.on("error", (error) => console.log("MONGOOSE ERROR " + error.message))

    } catch (error) {
        console.log("error", error.message)
    }
}