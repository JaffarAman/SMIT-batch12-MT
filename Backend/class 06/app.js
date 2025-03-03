import express from "express"
import fs from "fs"
const app = express()
const PORT = 5000
import { v4 as uuidv4 } from 'uuid';
import cors from "cors"

app.use(cors())

//body parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get("/", (req, res) => {
    res.send("HELLO SERVER!")
})

app.post("/createUser", (req, res) => {
    const fileExist = fs.existsSync("users.txt")
    console.log("fileExist", fileExist)
    if (fileExist) {
        //append
        console.log("FILE APPEND")
        const getData = fs.readFileSync("users.txt", "utf-8")
        const parseData = JSON.parse(getData)
        parseData.push({ ...req.body, id: uuidv4() })
        console.log("parseData", parseData)
        fs.writeFileSync("users.txt", JSON.stringify(parseData))

    } else {
        // create - write file
        const tempArr = []
        tempArr.push({ ...req.body, id: uuidv4() })
        fs.writeFileSync("users.txt", JSON.stringify(tempArr))
    }
    // res.send("USER CREATED!")
    res.json({
        message : "USER CREATED!"
    })

})


app.get("/getAllUser", (req, res) => {
    const users = fs.readFileSync("users.txt", "utf-8")
    res.send(JSON.parse(users))
})


app.post("/updateUser/:id", (req, res) => {
    const params = req.params
    console.log(params.id, "params")

    const getData = fs.readFileSync("users.txt", "utf-8")
    const parseData = JSON.parse(getData)
    // console.log("parseData", parseData)

    const newArr = parseData.map(user => {
        console.log("user", user)
        if (user.id === params.id) {
            return req.body
        } else {
            return user
        }
    })
    console.log(newArr, "newArr")
    fs.writeFileSync("users.txt", JSON.stringify(newArr))
    res.send("update user")
})


app.post("/deleteUser/:userId", (request, response) => {
    // console.log("param" ,request.params.userId)
    const getData = fs.readFileSync("users.txt", "utf-8")
    // console.log("getData" , getData)
    const parseData = JSON.parse(getData)
    // console.log("parseData" , parseData)
    const indexNumber = parseData.findIndex((user) => {
        if (user.id === request.params.userId) {
            return user
        }
    })
    console.log("indexNumber" , indexNumber)

    // [1,2,3]
    parseData.splice(indexNumber , 1)
    console.log("parseData" , parseData)
    fs.writeFileSync("users.txt" , JSON.stringify(parseData))
    response.send("USER DELETED!")

})




app.listen(PORT, () => console.log(`server running on http://localhost:${PORT}`))
