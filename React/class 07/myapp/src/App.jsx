import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
import TodoApp from './components/TodoApp'

function App() {
  // const [count, setCount] = useState(0)


  // condition ? statement   : condition ?  true :false 


  // var userName = "Jaffar"

  // console.log(userName)

  // const [state, setState] = useState("JAFFAR")
  // const [userName, setUserName] = useState("JAFFAR")
  // console.log("state", state)

  // const updateName = () => {
  //   setState("JAFFAR AMAN")
  // }



  // console.log("APP CMP")


  // const [userName, setUserName] = useState("")



  // const submitHandler = () => {
  //   // const userName = document.getElementById("userName")
  //   // console.log("userName", userName.value)
  //   console.log("userName", userName)

  // }
  // var name = "JAFFAR"
  return (
    <>
      {/* <h1> hello {state} </h1>
      <button onClick={updateName} >UPDATE</button> */}
      {/* <h1>HELLO {userName}</h1>
       */}
      {/* {
        userName ?
          <>
            <h1>HELLO {userName} </h1>
            <h1>HELLO {userName} </h1>
          </>

          :
          <h1>HELLO USER</h1>
      } */}


      {/* <Card state={state} />
      <button onClick={() => {
        setState("Jaffar AMAN")
      }} >Parent Update</button> */}


      {/* <input
        value={userName}
        onChange={(event) => {
          // console.log("event", event.target.value)
          setUserName(event.target.value)
          // name += event.target.value
        }} type="text" id='userName' placeholder='Enter Name' />
      <button onClick={submitHandler} >SUBMIT</button> */}

      <TodoApp />


    </>
  )
}

export default App
