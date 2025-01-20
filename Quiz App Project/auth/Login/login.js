import { auth, db, doc, getDoc, signInWithEmailAndPassword } from "../../firebase.js"

const loginHandler = async () => {
    try {

        const email = document.getElementsByName("username")[0]
        const password = document.getElementsByName("password")[0]

        const userAuth = await signInWithEmailAndPassword(auth, email.value, password.value)
        const uid = userAuth.user.uid
        // get Login User Data
        const docRef = doc(db, "users", uid);
        const docSnap = await getDoc(docRef);
        const userData = {
            ...docSnap.data(),
            uid
        }

        localStorage.setItem("user", JSON.stringify(userData))

        if (userData.type === "admin") {
            window.location.replace("../../admin/dashboard/dashboard.html")
        } else {
            window.location.replace("../../user/dashboard/dashboard.html")
        }

        // if (docSnap.exists()) {
        //     console.log("Document data:", docSnap.data());



        // } else {
        //     // docSnap.data() will be undefined in this case
        //     alert("No such document!");
        // }

    } catch (error) {
        alert(error.message)
    }
}

window.loginHandler = loginHandler