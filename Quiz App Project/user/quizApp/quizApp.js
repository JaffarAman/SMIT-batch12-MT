import { addDoc, collection, db, doc, getDoc } from "../../firebase.js"

let questions = []
let quizTitle = ""
let indexNumber = 0
let score = 0
const questionElement = document.getElementById("questionElement")
const optionElement = document.getElementById("optionElement")


// const myPromise = new Promise


const checkQuizID = async () => {
    try {
        const quizID = sessionStorage.getItem("quizId")
        console.log("quizID", quizID)
        if (quizID === null) {
            window.location.replace("../dashboard/dashboard.html")
            return
        }
        const docSnap = await getDoc(doc(db, "quizzes", quizID))
        console.log("docSnap", docSnap.data())
        quizTitle = docSnap.data().title
        return docSnap.data().questions
    } catch (error) {
        return error.message
    }

}

checkQuizID()
    .then((response) => {
        console.log("response", response)
        questions = response
        handleQuestion()
    })
    .catch((error) => {
        console.log("error", error)
    })


const handleQuestion = () => {
    // console.log("handleQuestion", questions)
    var optionsObj = questions[indexNumber].options
    var questionTitle = questions[indexNumber].questionText
    console.log(optionsObj)
    console.log(questionTitle)

    questionElement.innerHTML = questionTitle
    optionElement.innerHTML = ""
    for (var i = 0; i < optionsObj.length; i++) {
        optionElement.innerHTML += `<li onclick="checkAns(this)" >${optionsObj[i]}</li>`
    }
    // optionElement.innerHTML = ""
    // //option render krne k liye UI pr Ul k child 
    // for (var key in optionsObj) {
    //     optionElement.innerHTML += `<li onclick="checkAnswer(this)" >${optionsObj[key]}</li>`
    // }


    // //number counting 
    // currentQuesCount.innerHTML = indexNumber + 1
}





const nextQues = () => {
    console.log("questions", questions)
    indexNumber++
    if (indexNumber < questions.length) {
        handleQuestion()
    } else {
        console.log("submit")
        onsubmit()
    }

}


const checkAns = (ele) => {
    const allLiElement = optionElement.children
    const correctAns = questions[indexNumber].correctAns
    if (ele.innerHTML === correctAns) {
        console.log("correct Ans")
        ele.style.backgroundColor = "green"
        score++
    } else {
        console.log("wrong Ans")
        ele.style.backgroundColor = "red"

        for (var i = 0; i < allLiElement.length; i++) {
            if (allLiElement[i].innerHTML == correctAns) {
                allLiElement[i].style.backgroundColor = "green"
                break
            }
        }


    }

}


const onsubmit = async () => {
    console.log("total Qiues", questions.length)
    console.log("score", score)
    console.log("wrong ans", questions.length - score)
    const user = JSON.parse(localStorage.getItem("user"))
    const scoreObj = {
        totalQues: questions.length,
        score: score,
        wrongAns: questions.length - score,
        quizId: sessionStorage.getItem("quizId"),
        userId: user.uid,
        userName: user.firstName,
        quizTitle: quizTitle
    }
    console.log("scoreObj", scoreObj)
    const response = await addDoc(collection(db, "scores"), scoreObj)
    console.log("response score", response)

    var scores = document.getElementById("scores").children
    scores[0].innerHTML = `Quiz Name: ${quizTitle}`
    scores[1].innerHTML = `Score: ${score}`
    scores[2].innerHTML = `Wrong ans: ${ questions.length - score}`
    scores[3].innerHTML = `Total Ques: ${questions.length}`

    document.getElementById("resultContainer").style.display = "block"

}
window.onsubmit = onsubmit
window.checkAns = checkAns
window.nextQues = nextQues