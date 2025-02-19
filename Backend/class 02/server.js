// import http from "http"


// // create a server
// const server = http.createServer((request, response) => {

// })

// // server listen
// // PORT -> 0 to 65536
// const PORT = 3000
// server.listen(PORT , ()=>console.log("server running on 3000"))





import http from "http"

const PORT = 8080
const server = http.createServer((request, response) => {
    console.log("request url", request.url)
    if (request.url === "/") {
        response.end("<h1>HELLO ROOT</h1>")
    } else if (request.url === "/about") {
        response.end("<h1>HELLO ABOUT</h1>")
    } else if (request.url === "/profile") {
        response.end("<h1>HELLO PROFILE</h1>")
    }
})

server.listen(PORT, () => console.log("server runnng on http://localhost:8080"))
