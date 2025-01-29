import { collection, db, getDocs } from "../../firebase.js"

const cardListingContainer = document.getElementById("cardListingContainer")

const quizListing = async () => {
    console.log("quizListing")
    try {
        const docSnap = await getDocs(collection(db, "quizzes"))

        docSnap.forEach((doc) => {
            const data = doc.data()
            console.log("doc", doc.data())
            if (data.isActive == true) {
                cardListingContainer.innerHTML += `<div class="quiz-card">
                <h3 class="quiz-title"> ${data.title} </h3>
                <p class="quiz-description">
                    ${data.category}
                </p >
<button id=${doc.id} class="quiz-status-btn active" onclick="navigte(this)" >Start Quiz</button>
            </div > `
            }


        })


    } catch (error) {

    }
}


const navigte = (ele) => {
    console.log("navigte", ele.id)

    sessionStorage.setItem("quizId", ele.id)
    window.location.assign("../quizApp/quizApp.html")
}

window.navigte = navigte

window.addEventListener("load", quizListing)