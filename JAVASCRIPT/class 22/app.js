// Object methods

// var obj = {
//     firstName: "Jaffar",
//     lastName: "Aman",
//     fullName: function () {
//         // return this.firstName + " " + this.lastName
//         return `${this.firstName} ${this.lastName}`
//     }
// }

// var objFUllName = obj.fullName()
// console.log("objFUllName", objFUllName)

// // console.log(obj.firstName + obj.lastName)





// function Std(firstName, lastName, email) {
//     this.firstName = firstName
//     this.lastName = lastName
//     this.email = email
//     //methods
//     this.fullName = function () {
//         return `${this.firstName} ${this.lastName}`
//     }
// }


// var std1 = new Std("Jaffar")
// var std2 = new Std("muhammad", "sufiyan")
// var std3 = new Std("jaffar", "aman")

// // console.log(std1)
// console.log("std2" , std2.fullName())
// // console.log(std3)




const quizQuestions = [
    {
        id: 1,
        question: "HTML stands for?",
        options: {
            a: "Hyper Text Markup Language",
            b: "Hyper Text Programming Language",
            c: "Hyper Text Styling Language",
            d: "Hyper Text Scripting Language"
        },
        answer: "Hyper Text Markup Language"
    },
    {
        id: 2,
        question: "Which language is used for styling web pages?",
        options: {
            a: "HTML",
            b: "CSS",
            c: "JavaScript",
            d: "PHP"
        },
        answer: "CSS"
    },
    {
        id: 3,
        question: "Which of these is a JavaScript framework?",
        options: {
            a: "Django",
            b: "React",
            c: "Laravel",
            d: "Bootstrap"
        },
        answer: "React"
    },
    {
        id: 4,
        question: "Which tag is used to define a hyperlink in HTML?",
        options: {
            a: "link",
            b: "a",
            c: "href",
            d: "url"
        },
        answer: "a"
    },
    {
        id: 5,
        question: "Which company developed JavaScript?",
        options: {
            a: "Microsoft",
            b: "Netscape",
            c: "Oracle",
            d: "Sun Microsystems"
        },
        answer: "Netscape"
    },
    // {
    //     id: 6,
    //     question: "Which of these is not a programming language?",
    //     options: {
    //         a: "Python",
    //         b: "HTML",
    //         c: "Java",
    //         d: "C++"
    //     },
    //     answer: "HTML"
    // },
    // {
    //     id: 7,
    //     question: "What does CSS stand for?",
    //     options: {
    //         a: "Creative Style Sheets",
    //         b: "Cascading Style Sheets",
    //         c: "Colorful Style Sheets",
    //         d: "Cascading Script Sheets"
    //     },
    //     answer: "Cascading Style Sheets"
    // },
    // {
    //     id: 8,
    //     question: "Which HTML tag is used to display an image?",
    //     options: {
    //         a: "img",
    //         b: "image",
    //         c: "picture",
    //         d: "src"
    //     },
    //     answer: "img"
    // },
    // {
    //     id: 9,
    //     question: "Which HTML tag is used to define a table?",
    //     options: {
    //         a: "table",
    //         b: "thead",
    //         c: "tr",
    //         d: "tb"
    //     },
    //     answer: "table"
    // },
    // {
    //     id: 10,
    //     question: "Which one is not a JavaScript data type?",
    //     options: {
    //         a: "String",
    //         b: "Boolean",
    //         c: "Object",
    //         d: "Function"
    //     },
    //     answer: "Function"
    // }
];
// console.log("quizQuestions", quizQuestions[0].question)
// console.log("quizQuestions", quizQuestions[0].options)

var questionElement = document.getElementById("questionElement")
var optionElement = document.getElementById("optionElement")

var indexNumber = 0

function handleQuestion() {
    var optionsObj = quizQuestions[indexNumber].options
    questionElement.innerHTML = quizQuestions[indexNumber].question
    optionElement.innerHTML = ""
    for (var key in optionsObj) {
        optionElement.innerHTML += `<li onclick="checkAnswer(this)" >${optionsObj[key]}</li>`
    }


}

function nextQues() {
    if (indexNumber < quizQuestions.length - 1) {
        indexNumber++
        handleQuestion()
    } else {
        console.log("SUBMIT")
    }


}

function checkAnswer(element) {

    var allLiElement = optionElement.children

    var userSelection = element.innerHTML.toLowerCase()
    var ans = quizQuestions[indexNumber].answer.toLowerCase()
    var result = userSelection === ans
    console.log("answer batao", result)

    if (result) {
        element.style.backgroundColor = "green"
    } else {
        element.style.backgroundColor = "red"

    }


    for (var i = 0; i < allLiElement.length; i++) {
        console.log(allLiElement[i])
        allLiElement[i].style.pointerEvents = "none";
    }

}
