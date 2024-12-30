import { addDoc, app, auth, collection, createUserWithEmailAndPassword, db, doc, getDocs, updateDoc } from "./firebase.js"

const inputValue = document.querySelector("#inputValue")
const parent = document.querySelector("#parent")


const addTodo = async () => {
    // console.log("addTodo()", inputValue.value)
    try {
        if (!inputValue.value) {
            alert("Enter a task")
            return
        }
        const todoObj = {
            todo: inputValue.value,
        }
        const response = await addDoc(collection(db, "todos"), todoObj)
        console.log("response", response)
        fetchData()

    } catch (error) {
        console.log("error", error.message)
    }



}


// Get All docs
const fetchData = async () => {
    console.log("fetchData")
    try {
        const tempArr = []
        const querySnapshot = await getDocs(collection(db, "todos"))
        parent.innerHTML = ""
        querySnapshot.forEach((doc) => {
            // console.log(doc.id)
            console.log(doc.data())
            // tempArr.push({
            //     id : doc.id,
            //     ...doc.data()
            // })

            // render UI
            parent.innerHTML += `<div class="card" style="width: 100%;">
            <div class="card-body">
                <h5 class="card-title"> ${doc.data().todo}  </h5>
                <button class="btn btn-info" 
                    onclick="updateTodo(this)"
                    id=${doc.id}
                >Edit</button>
                <button class="btn btn-danger">Delete</button>
            </div>
        </div>`


        })

        // console.log("tempArr" , tempArr)


    } catch (error) {
        console.log("error", error.message)
    }


}


const updateTodo = async (ele) => {
    try {
        console.log("updateTodo", ele.id)
        const editValue = prompt("Enter edit value")
        console.log("editValue", editValue)
        if (!editValue) {
            alert("Enter edit value")
            return
        }
        await updateDoc(doc(db, "todos", ele.id), {
            todo: editValue
        })
        fetchData()

    } catch (error) {
        console.log("error", error.message)
    }
}


const signup = async () => {
    try {
        const email = "admin"
        const pass = "adm"
        const user = await createUserWithEmailAndPassword(auth, email, pass)
        console.log("user", user)
    } catch (error) {
        console.log("error", error.code)
    }
}


window.addTodo = addTodo
window.fetchData = fetchData
window.updateTodo = updateTodo
window.signup = signup
