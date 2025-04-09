const listingParent = document.querySelector("#listingParent")
let allTodoData = []

const addTodo = async () => {
    try {
        const input = document.getElementById("input")
        console.log("input", input.value)
        const body = {
            todo: input.value
        }
        const response = await fetch("http://localhost:5000/createTodo", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(body)
        })
            .then(res => res.json())

        getTodos()

        console.log("response", response)
    } catch (error) {
        alert(error.message)
    }

}


const getTodos = async () => {
    try {
        allTodoData = []
        const todoData = await fetch("http://localhost:5000/getTodos")
            .then(res => res.json())
        console.log("todoData", todoData.data)
        allTodoData = todoData.data
        listingParent.innerHTML = ""
        todoData.data.map((obj) => {
            listingParent.innerHTML += ` <li> ${obj.todo}
            <button id=${obj._id} onclick="editTodo(this)" >EDIT</button>    
            <button onclick="deleteTodo(this)" id=${obj._id} >DELETE</button>    
        </li>`
        })


    } catch (error) {
        alert(error.message)
    }
}


const editTodo = async (ele) => {
    console.log("ele edit", ele)
    try {
        var editValue = prompt("enter edit value")
        const obj = {
            todo: editValue
        }
        const response = await fetch(`http://localhost:5000/updateTodo/${ele.id}`, {
            method: "PUT",
            headers: {

                "content-type": "application/json"
            },
            body: JSON.stringify(obj)
        }).then(res => res.json())
        console.log("response", response)
        getTodos()
    } catch (error) {
        alert(error.message)
    }

}


const alldeleteTodo = async () => {
    // console.log("alltodo", allTodoData)
    const idArr = allTodoData.map((obj) => {
        return obj._id
    })
    console.log("idArr", idArr)

}


window.addEventListener("load", getTodos)
window.addTodo = addTodo
window.getTodos = getTodos
window.editTodo = editTodo
window.alldeleteTodo = alldeleteTodo
