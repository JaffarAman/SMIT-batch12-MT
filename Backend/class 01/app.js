// var num1 = 10
// var num2 = 20
// console.log(num1 + num2)


// alert()

// console.log("HELLO WORLD")
// console.log("HELLO WORLD 1")
// console.log("HELLO WORLD 2")

// var a = 1
// var b = 2
// var c = 3
// console.log(a)
// console.log(b)
// console.log(c)




// import {add} from "./utils.js"

// const { add, sub } = require("./utils.js")
// import { add, sub } from "./utils"

// add(200, 300)
// sub(200, 300)


// file systems
import fs from "fs"
// create a file using fs
// fs.writeFileSync("text.txt" , "HELLO FS")

// read File
// const data =  fs.readFileSync("./text.txt" , "utf-8")
// console.log("data file" , data)
// 

// append
// fs.appendFileSync("./text.txt" , "\nHELLO FILE SYSTEM")


// delete
// fs.unlinkSync("./text.txt")

// folder
fs.mkdirSync("hello/a", { recursive: true })
