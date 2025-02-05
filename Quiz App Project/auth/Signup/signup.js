import { auth, createUserWithEmailAndPassword, db, doc, setDoc } from "../../firebase.js"



// Create a single supabase client for interacting with your database
const supabaseClient = supabase.createClient('https://wyiqfkbrbfigtuviakes.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind5aXFma2JyYmZpZ3R1dmlha2VzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzYzNTI4NDksImV4cCI6MjA1MTkyODg0OX0.MrHG6GKn2z4abuPCSDwSXwYMLQ24O6kM7z1JLhTro9g')




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




        // firebase Auth
        const authResponse = await createUserWithEmailAndPassword(auth, email.value, password.value)
        console.log("authResponse", authResponse)

        //upload profile Image on supabase Storage
        const profileImage = document.getElementById("profileImage")
        const file = profileImage.files[0]
        console.log("file", file)
        const { data, error } = await supabaseClient
            .storage
            .from('quizApp')
            .upload(file.name + new Date().getMilliseconds(), file)
        console.log("data", data)
        console.log("error", error)

        const { data: url } = supabaseClient
            .storage
            .from('quizApp')
            .getPublicUrl(data.path)

        console.log("URL", url)

        const userObj = {
            firstName: firstName.value,
            lastName: lastName.value,
            mobileNumber: mobileNumber.value,
            email: email.value,
            type: "user",  //admin | user
            isBlock: false,
            isDeleted: false,
            imageURL: url.publicUrl
        }
        console.log("userObj", userObj)

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


var a = 10
var b = "HELLO"
console.log(name)
let name = "JAFFAR"
