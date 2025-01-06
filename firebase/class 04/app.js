const authCheck = () => {
    const userUid = localStorage.getItem("uid")
    console.log("userUid", userUid)
    if (userUid) {
        window.location.replace("./dashboard.html")
    }

}


import { app, auth, db, doc, getDoc, signInWithEmailAndPassword } from "./firebase.js";

const email = document.querySelector("#email")
const password = document.querySelector("#password")
// const firstName = document.querySelector("#firstName")
// const firstName = document.getElementById("firstName")
// console.log(firstName)

const loginHandler = async () => {
    try {

        const response = await signInWithEmailAndPassword(auth, email.value, password.value)
        const uid = response.user.uid
        console.log(uid)
        localStorage.setItem("uid", uid)
        // const userData = await getDoc(doc(db, "users", uid))
        // console.log("userData", userData.data())
        window.location.replace("./dashboard.html")

    } catch (error) {
        console.log("error", error.message)
        alert("error", error.code)
    }
}

window.loginHandler = loginHandler
window.authCheck = authCheck
