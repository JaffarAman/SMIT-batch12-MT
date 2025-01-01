import { auth, createUserWithEmailAndPassword, db, doc, setDoc } from "./firebase.js"

const email = document.querySelector("#email")
const password = document.querySelector("#password")
const firstName = document.querySelector("#firstName")
const lastName = document.querySelector("#lastName")


const signupHandler = async () => {
    try {
        console.log("signupHandler")
        if (!email.value || !password.value) {
            alert("Please Enter Email or password")
            return
        }
        const response = await createUserWithEmailAndPassword(auth, email.value, password.value)

        console.log(response.user, "response")
        // create User document on firestore DB
        await setDoc(doc(db, "users", response.user.uid), {
            firstName: firstName.value,
            lastName: lastName.value,
            email: email.value
        })
        window.location.href = "./index.html"
        alert("User successfully SignUp!")

    } catch (error) {
        console.log("error", error.message)
        alert(error.code)
    }

}


window.signupHandler = signupHandler