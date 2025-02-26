import express from "express"

const app = express()
const PORT = 5000


//Allow body
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

var userArr = []

app.get("/", (request, response) => {
    response.send("HELLO SERVER!")
})

app.post("/createuser", (request, response) => {
    // console.log("request", request.body)
    userArr.push(request.body)
    response.send("USER CREATED SUCCESSFULLY")
})


app.get("/getuser", (request, response) => {
    // console.log(userArr)
    response.send(userArr)

})


app.post("/updateuser", (request, response) => {
    response.send("USER UPDATED SUCCESSFULLY")
})



app.post("/deleteuser", (request, response) => {
    response.send("USER DELETED SUCCESSFULLY")
})






app.listen(PORT, () => console.log(`server running on http://localhost:${PORT}`))