import React from "react"

const Navbar = (props) => {
    const {name  , age} = props
    console.log("props", name , age)
    return (
        <div>
            <h1>HELLO USER: {name}👋</h1>
        
        {/* <Links  age={age} /> */}
        </div>
    )
}

export default Navbar