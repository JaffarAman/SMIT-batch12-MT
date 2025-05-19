import React, { useEffect, useState } from 'react'
import Button from '../Button/Button'

const TodoApp = () => {

    const [todoInput, setTodpInput] = useState("")
    // console.log("todoInput", todoInput)

    // const tempArr = ["JAFFAR", "HELLO", "SMIT"]
    const [todos, setTodos] = useState([])
    const addTodo = () => {
        console.log("addTodo", todoInput)
        setTodos([todoInput, ...todos])
    }

    const deleteAll = () => {
        console.log("deleteAll")
        setTodos([])
    }


    const deleteTodo = (index) => {
        console.log("deleteTodo", index)
        todos.splice(index, 1) //delete one value
        console.log("todos delete", todos)
        setTodos([...todos])
    }


    // const editTodo = (index) => {
    //     console.log("editTodo", index)
    //     var editValue = prompt("Enter New Value", todos[index])
    //     console.log("editValue", editValue)
    //     todos.splice(index, 1, editValue)
    //     setTodos([...todos])

    // }

    const [indexNumber, setIndexNumber] = useState(null)
    const [editInput, setEditInput] = useState("")

    const editHandler = (indexNum) => {
        console.log("indexNum", indexNum)
        setIndexNumber(indexNum)
    }
    console.log("indexNumber", indexNumber)
    const condition = false

    const saveHandler = () => {
        console.log("editInput", editInput)
        todos.splice(indexNumber, 1, editInput)
        setTodos([...todos])
        setIndexNumber(null)
    }

    return (
        <div>
            <h1>TodoApp</h1>
            <div>

                <input type="text" placeholder='enter your todos..'
                    onChange={(e) => {
                        setTodpInput(e.target.value)
                    }}
                />
                <div>
                    <Button text="Add"
                        handleClick={addTodo}
                    />
                    <Button
                        text="Delete All"
                        handleClick={deleteAll}
                    />
                </div>
            </div>


            {/* //listing */}
            <div>

                <ul>
                    {
                        todos.map((value, index) => {
                            // console.log("value", value)
                            return (
                                indexNumber === index ? <div key={index} >
                                    <input type="text" placeholder='Edit Value'
                                        onChange={(e) => setEditInput(e.target.value)}
                                    />
                                    <button onClick={saveHandler} >SAVE</button>
                                </div> : <li key={index} >
                                    {value}
                                    <Button text="Edit"
                                        // handleClick={() => editTodo(index)}
                                        handleClick={() => editHandler(index)}
                                    />
                                    <Button text="Delete"
                                        handleClick={() => {
                                            deleteTodo(index)
                                        }}
                                    />
                                </li>
                            )
                        })
                    }


                </ul>



            </div>



            <div>

            </div>


        </div>

    )
}

export default TodoApp

// hooks
// useEffect
// axios
// weather app
