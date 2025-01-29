import { db, doc, getDoc } from "../../firebase.js"

let questions = []
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


const onsubmit = () => {
    console.log(score)
}
window.onsubmit = onsubmit
window.checkAns = checkAns
window.nextQues = nextQues