import { useEffect, useState } from 'react'
import TodoApp from './components/TodoApp/todo'
import axios from 'axios'
// import "./components/Button/button.css"

function App() {
  // let [count, setCount] = useState(0)
  // const [input, setInput] = useState("")



  // const foo = () => {
  //   console.log("check auth")
  // }

  // // mounting 
  // useEffect(() => {
  //   // foo()
  //   console.log("use effect first time render")
  // }, [])



  // updating
  // useEffect(() => {
  //   console.log("use effect count state update k bad")
  // }, [count])

  // useEffect(() => {
  //   console.log("use effect count or input state update k bad")
  // }, [count, input])


  // useEffect(() => {
  //   // foo()
  //   console.log("use effect every component render")
  // })

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    // console.log("fetchData()")
    try {
      const response = await axios.get("https://fakestoreapi.com/products/")
      console.log("response", response.data)
    } catch (error) {
      alert("error: ", error.message)
    }

  }

  return (
    <>
      {/* <TodoApp /> */}
      {/* <h1>APP CMP</h1>

      <button onClick={() => setCount(++count)} > {count} </button>
      <input type="text" onChange={(e) => setInput(e.target.value)} /> */}








    </>



  )
}

export default App
// https://api.escuelajs.co/api/v1/products