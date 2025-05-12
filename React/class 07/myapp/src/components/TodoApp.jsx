import React, { useState } from 'react'

const TodoApp = () => {

    const [todoInput, setTodoInput] = useState("")

    // const arr = ["hello", "world"]
    const [todos, setTodos] = useState([])

    const addTodo = () => {
        console.log("addTodo", todoInput)
        if (!todoInput) {
            alert("enter todo value")
            return
        }

        setTodos([...todos, todoInput])


        // console.log(arr, "Arr")

    }
    return (
        <div>
            <h1>TODO APP</h1>

            <input
                value={todoInput}
                type="text" placeholder='Enter Todos...'
                onChange={(e) => {
                    setTodoInput(e.target.value)
                    // console.log(e.target.value)
                }}
            />
            <button onClick={addTodo} >Add</button>
            <button>Delete All</button>

            <div>
                <ul>
                    {
                        todos.map((value, index) => {
                            // console.log("value", value)
                            return (
                                <li key={index}  >
                                    {value}
                                    <button>Edit</button>
                                    <button>Delete</button>
                                </li>
                            )
                        })
                    }



                </ul>
            </div>

        </div>
    )
}

export default TodoApp
