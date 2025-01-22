import { collection, db, doc, getDocs, updateDoc } from "../../firebase.js"

const parent = document.querySelector(".container")

const getQuizList = async () => {
    const quizSnap = await getDocs(collection(db, "quizzes"))
    // console.log("quizSnap", quizSnap)
    parent.innerHTML = ""
    quizSnap.forEach((doc) => {
        const quizObj = { ...doc.data(), id: doc.id }
        console.log("quizObj", quizObj, doc.id)

        parent.innerHTML += `<div class="quiz-card">
            <h3 class="quiz-title"> ${quizObj.title} </h3>
            <p class="quiz-description"> ${quizObj.category} </p>
                ${quizObj.isActive == true ?
                `<button id=${doc.id} class="quiz-status-btn active" onclick="toggleStatus(this , 'active')">Active</button>` : `<button id=${doc.id} class="quiz-status-btn inactive" onclick="toggleStatus(this , 'inactive')">Inactive</button>`

            }
            
        </div>`
    })

}
window.addEventListener("load", getQuizList)

const toggleStatus = async (ele, status) => {
    console.log(ele.id, status)
    const cardID = ele.id


    await updateDoc(doc(db, "quizzes", cardID), {
        isActive: status === "active" ? false : true
    })

    getQuizList()

}

window.toggleStatus = toggleStatus
window.getQuizList = getQuizList