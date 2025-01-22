// {
//     title :"JS QUIZ CHAP#1 to CHAP#20",
//     category :"Javascript",
//     question : [
//         {
//             question : "html Stand for",
//             options : ["1" , "2" , "3" , "4"],
//             correctAns : "1",
//         },
//         {
//             question : "CSS Stand for",
//             options : ["1" , "2" , "3" , "4"],
//             correctAns : "1",
//         }
//     ],


// }

import { addDoc, collection, db } from "../../firebase.js"

const quizTitle = document.getElementById("quizTitle")
const quizCategory = document.getElementById("quizCategory")
const quesArr = []



const createQuizHandler = async () => {
    try {
        console.log(quizTitle.value)
        console.log(quizCategory.value)
        console.log("quesArr", quesArr)

        const saveObj = {
            title: quizTitle.value,
            category: quizCategory.value,
            questions: quesArr,
            isActive : false
        }

        const res = await addDoc(collection(db, "quizzes"), saveObj)
        console.log("res", res)

    } catch (error) {
        alert(error.message)
        console.log(error.message)
    }

}


const handleQuestions = () => {
    const questionText = document.getElementById("questionText")
    const option1 = document.getElementById("option1")
    const option2 = document.getElementById("option2")
    const option3 = document.getElementById("option3")
    const option4 = document.getElementById("option4")
    const correctAnswer = document.getElementById("correctAnswer")
    // console.log("ques",
    //     questionText.value,
    //     option1.value,
    //     option2.value,
    //     option3.value,
    //     option4.value,
    //     correctAnswer.value,
    // )
    const quesObj =
    {
        questionText: questionText.value,
        options: [option1.value, option2.value, option3.value, option4.value],
        correctAns: correctAnswer.value,
    }
    quesArr.push(quesObj)


    //empty all question related fields
    questionText.value = ""
    option1.value = ""
    option2.value = ""
    option3.value = ""
    option4.value = ""
    correctAnswer.value = ""

    console.log("quesObj", quesObj)
}

window.createQuizHandler = createQuizHandler
window.handleQuestions = handleQuestions

