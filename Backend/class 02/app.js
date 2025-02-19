// console.log("HELLO WORLD 1")
// console.log("HELLO WORLD 2")
// console.log("HELLO WORLD 3")

// import add from "./utils.js"

// const {add} = require("./utils.js")
// add(100 , 200)

import fs from "fs"


const createFile = (fileName, content) => {
        fs.writeFileSync(fileName , content)
}

const readFile = (fileName)=>{
    const content =  fs.readFileSync(fileName , "utf-8")
    console.log(content)
}


const updateFile = (path , content)=>{
    // const content =  fs.readFileSync(fileName , "utf-8")
    // console.log(content)
    fs.appendFileSync(path , content)
}

const deleteFile = (path , content)=>{
    // const content =  fs.readFileSync(fileName , "utf-8")
    // console.log(content)
    fs.unlinkSync(path)
}


// createFile("hello.txt" , "HELLO WORLD")
// readFile("hello.txt")
// updateFile("./hello.txt" , "\nHELLO SERVER\n")
// deleteFile("./hello.txt")


// createFile("hello.txt" , "Node.js is a cross-platform, open-source JavaScript runtime environment that can run on Windows, Linux, Unix, macOS, and more. Node.js runs on the V8 JavaScript engine, and executes JavaScript code outside a web browser.")


