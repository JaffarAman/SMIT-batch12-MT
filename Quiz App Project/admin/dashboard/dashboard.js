// const authCheck = (() => {
//     const user = localStorage.getItem("user")

//     console.log("authCheck" , user)

//     if(user === null){
//         window.location.replace('../../index.html')
//     }

// }
// )()

// window.addEventListener("load" , authCheck)
// window.authCheck = authCheck


import { collection, db, getDocs, query, where } from "../../firebase.js"

const scoreTable = document.getElementById("scoreTable")

const getScoreListing = async () => {
    try {
        const user = JSON.parse(localStorage.getItem("user"))

        // const q = query(collection(db, "scores"), where("userId", "==", user.uid))

        const querySnapshot = await getDocs(collection(db, "scores"))
        querySnapshot.forEach(doc => {
            console.log(doc.data())
            const data = doc.data()
            const per = (data.score / data.totalQues) * 100
            scoreTable.innerHTML += `  <tr>
            <td> ${doc.id} </td>
            <td>${data.userName}</td>
            <td>${data.quizTitle}</td>
            <td>${data.score}</td>
            <td>${data.wrongAns}</td>
            <td>${data.totalQues}</td>
            <td>${per.toFixed(1)}%</td>
        </tr>`
        })

        // const q = query(collection(db, "scores"), where("userId", "==", user.uid))

        // const snap = await getDocs(q)
        // snap.forEach(doc => {
        //     console.log(doc.data())
        // })
    } catch (error) {
        console.log("error", error)
    }
}

const getQuizList = async () => {
    try {
        const quizDropdown = document.getElementById("quizDropdown")
        console.log("getQuizList")
        const quizSnap = await getDocs(collection(db, "quizzes"))
        // console.log("quizSnap", quizSnap)
        quizSnap.forEach((doc) => {
            const quizObj = { ...doc.data(), id: doc.id }
            console.log("quizObj", quizObj, doc.id)
            quizDropdown.innerHTML += ` <option value=${doc.id} >  ${doc.data().title} </option>`
        })
    } catch (error) {
        console.log("error", error.message)
    }


}
const filterQuiz = async (ele) => {
    console.log("ele", ele.value)


    const user = JSON.parse(localStorage.getItem("user"))

    const q = query(collection(db, "scores"), where("quizId", "==", ele.value))
    scoreTable.innerHTML = ""
    scoreTable .innerHTML = `<tr>
    <td>No#</td>
    <td>Name</td>
    <td>Quiz Name</td>
    <td>Score</td>
    <td>Wrong Ans</td>
    <td>Total Question</td>
    <td>Percentage%</td>
</tr>`
    const querySnapshot = await getDocs(q)
    querySnapshot.forEach(doc => {
        console.log(doc.data())
        const data = doc.data()
        const per = (data.score / data.totalQues) * 100
        scoreTable.innerHTML += `  <tr>
        <td> ${doc.id} </td>
        <td>${data.userName}</td>
        <td>${data.quizTitle}</td>
        <td>${data.score}</td>
        <td>${data.wrongAns}</td>
        <td>${data.totalQues}</td>
        <td>${per.toFixed(1)}%</td>
    </tr>`
    })
}


window.filterQuiz = filterQuiz
window.getQuizList = getQuizList
window.getScoreListing = getScoreListing