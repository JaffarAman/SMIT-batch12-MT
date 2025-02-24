import express from "express";
import { productArr } from "./productData.js";

const app = express()
const PORT = 5000

// app.get(url , callBack)

app.get("/", (request, response) => {
    response.end("HELLO SERVER!")
})

app.get("/about", (req, res) => {
    res.end("HELLO ABOUT REQ")
})

//GET ALL PRODUCT
app.get("/product", (request, response) => {
    response.send(productArr)
})


//GET SINGLE PRODUCT
// :id => Params =>  dynamic URL
app.get("/product/:id", (req, res) => {
    console.log("req", req.params.id)
    const prodID = req.params.id
    console.log("prodID", prodID)

    const product = productArr.find((item) => {
        if (item.id == prodID) {
            return item
        }
    })

    console.log("product", product)
    if (product) {
        res.send(product)
    } else {
        res.send("<h1> not found </h1>")
    }

})


// params  /11
// query params => ?key=value


// Query Params
app.get("/user", (req ,res) => {
    console.log("req" , req.query)
    if(req.query.name){
        res.send("HELLO " + req.query.name )
    }else{
        res.send("HELLO USER")
    }
})






app.listen(PORT, () => console.log("server running on http://localhost:5000"))