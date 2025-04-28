import React from "react"
import "./style.css"
import Header from "./components/Header"


const App = () => {
    return (
        <div>
            <Header />
            <Body />
            <Footer />
        </div>
    )
}





function Body() {
    return (
        <h1>BODY</h1>
    )
}


const Footer = () => {
    return (
        <h1>FOOTER</h1>
    )
}



export default App