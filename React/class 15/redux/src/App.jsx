import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Child1 from './components/ChildCmp/Child1'
import { useDispatch, useSelector } from 'react-redux'
import { addCounter, minusCounter } from './redux/slices/counterSlice'

function App() {
  // let [count, setCount] = useState(0)

  // console.log("parent")

  // const selector = useSelector((store) => store.user)
  // console.log("selector", selector.userName)

  const { counter } = useSelector((store) => store.counterSlice)
  console.log("selector", counter)

  const dispatch = useDispatch()

  return (
    <>
      <h1>COUNTER : {counter} </h1>
      <button onClick={() => {
        dispatch(addCounter("JAFFAR"))
      }} >ADD</button>
      <button onClick={() => {
        dispatch(minusCounter())
      }} >MINUS</button>
      {/* <h1> {"COUNT PARENT:" + count} </h1>
      <button onClick={()=>setCount(++count)} > Update state </button>
      <Child1 count={count} /> */}
    </>
  )
}

export default App
