import React from "react"

import "./App.css"
import Footer from "./components/footer"

const style = {
  color: "red",
  backgroundColor: "black"
}

function App() {
  const userName = "JAFFAR AMAN"
  // var h1 = document.getElementById("userName")
  // h1.innerHTML = userName

  const foo = (event) => {
    console.log("foo", event.target)
  }

  return (
    // <h1 id="userName">HELLO: {userName} {2 + 5} </h1>
    // <h1 id="userName">HELLO: {userName.slice(0, 1).toUpperCase()} </h1>
    <>
      {/* <h1 id="userName">HELLO: {userName.slice(0, 1).toUpperCase()} </h1>
      <h1 style={style} >HELLO WORLD</h1>
      <h1   style={{
        color : "hotpink",
        background :"grey"
      }}  >SMIT</h1> */}
      <h1 id="container" >HELLO SMIT</h1>
      {/* <button onClick={foo} >CLICK</button>
      <button onClick={() => {
        foo("100")
      }}>ARG CLICK</button> */}

      {/* <button onClick={(event) => foo(event)} >BTN</button> */}
      {/* <button onClick={(event) => foo(event)} >BTN</button> */}
      <button className="container" onClick={foo} >BTN</button>

      <Footer />
    </>
  )
}

export default App


// React v19

// component 
// JSX
// JSX JS part
// fragment
// style
// className
// Event
// CSS
// Module Css

// react Boostrap
// props
// listing
 
