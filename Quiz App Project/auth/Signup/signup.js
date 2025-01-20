import { auth, createUserWithEmailAndPassword, db, doc, setDoc } from "../../firebase.js"

const signupHandler = async () => {
    try {
        const firstName = document.querySelector("#firstName")
        const lastName = document.querySelector("#lastName")
        const mobileNumber = document.querySelector("#mobileNumber")
        const email = document.querySelector("#email")
        const password = document.querySelector("#password")

        if (!firstName.value || !lastName.value || !mobileNumber.value || !email.value || !password.value) {
            alert("Required fields are missing!")
            return
        }

        const userObj = {
            firstName: firstName.value,
            lastName: lastName.value,
            mobileNumber: mobileNumber.value,
            email: email.value,
            type: "user",  //admin | user
            isBlock: false,
            isDeleted: false
        }
        console.log("userObj", userObj)


        // firebase Auth
        const authResponse = await createUserWithEmailAndPassword(auth, email.value, password.value)
        console.log("authResponse", authResponse)

        // store data on firebase firestore db
        await setDoc(doc(db, "users", authResponse.user.uid), userObj)
        alert("user successfully signup!")
        window.location.assign("../../index.html")

    } catch (error) {
        console.log("error", error.message)
        alert(error.message)
    }


}





window.signupHandler = signupHandler

