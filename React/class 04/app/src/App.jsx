import React from "react"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Button from 'react-bootstrap/Button';

const App = () => {
  // var username = "JAFFAR AMAN"

  // const add = (num1, num2 , event) => {
  //   console.log("addition" , num1, num2 , event.target)
  // }

  // const foo = (event) => {
  //   console.log("event", event)
  // }

  // API DATA
  const userName = "Sufiyan bhai "

  const FbLink = "https://www.facebook.com"

  return (
    <>
      {/* <button onClick={(event)=>{
          add(100, 200 ,event)
      }} >ADD</button> */}
      {/* <button onClick={(event) => foo(event)} >CLICK</button> */}

      {/* <button onClick={foo} >CLICK</button>

      <h1 style={{
        color: "red",
        background: "blue"
      }}   >HELLO WORLD</h1>
      <h1>HELLO SMIT</h1>
      <h1>HELLO  {username} </h1> */}

      <Navbar name={userName} age="20" />
      <h1>BODY</h1>
      <Button variant="primary">Primary</Button>
      <Footer  shapatar={FbLink} />
    </>
  )
}

export default App