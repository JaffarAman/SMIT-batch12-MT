import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Child1 from './components/ChildCmp/Child1'
import { useDispatch, useSelector } from 'react-redux'
import { addCounter, minusCounter } from './store/slices/counterSlice'
import axios from 'axios'
import ProductList from './components/ProductList'
import { getProductData } from './store/slices/productSlice'

function App() {
  // let [count, setCount] = useState(0)

  // console.log("parent")

  // const selector = useSelector((store) => store.user)
  // console.log("selector", selector.userName)




  const { counter } = useSelector((store) => store.counter)
  console.log(counter)

  const dispatch = useDispatch()

  useEffect(() => {

    fetchData()

  }, [])

  const fetchData = async () => {
    const res = await axios.get("https://fakestoreapi.com/products/")
    // console.log("res", res.data)
    dispatch(getProductData(res.data))
  }

  return (
    <>
      <h1>REACT REDUX</h1>


      <ProductList />
      {/* <h1>COUNTER: {counter} </h1>
      <button onClick={() => dispatch(addCounter("JAFFAR AMAN"))} >ADD</button>
      <button onClick={() => dispatch(minusCounter())} >MINUS</button> */}



      {/* <h1> {"COUNT PARENT:" + count} </h1>
      <button onClick={()=>setCount(++count)} > Update state </button>
      <Child1 count={count} /> */}
    </>
  )
}

export default App
