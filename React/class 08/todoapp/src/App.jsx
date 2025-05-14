import { useState } from 'react'
import TodoApp from './components/TodoApp/todo'
// import "./components/Button/button.css"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TodoApp />
    </>
  )
}

export default App
