import { collection, db, getDocs, query, where } from "../../firebase.js"

const scoreTable = document.getElementById("scoreTable")

const getScoreListing = async () => {
    try {
        const user = JSON.parse(localStorage.getItem("user"))

        const q = query(collection(db, "scores"), where("userId", "==", user.uid))

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

        // const q = query(collection(db, "scores"), where("userId", "==", user.uid))

        // const snap = await getDocs(q)
        // snap.forEach(doc => {
        //     console.log(doc.data())
        // })
    } catch (error) {
        console.log("error", error)
    }
}

window.getScoreListing = getScoreListing