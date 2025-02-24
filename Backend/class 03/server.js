// console.log("HELLO WORLD")


import http from "http"

const server = http.createServer((request, response) => {
    //    console.log("request" , request.url)
    //     response.end("HELLO SERVER!")
    switch (request.url) {
        case "/":
            response.end("HELLO SERVER")
            break;

        case '/about':
            response.end("HELLO  ABOUT")
            break

            
        case '/contact':
            response.end("HELLO Contact")
            break

        default :
        response.end("404 not found")

    }

})
const PORT = 5000

server.listen(PORT, () => console.log("server running on http://localhost:5000"))
