import { supabaseClient } from "./app.js"

const username = document.querySelector("#username")
const password = document.querySelector("#password")


const loginHandler = async () => {
    try {
        const { data, error } = await supabaseClient.auth.signInWithPassword({
            email: username.value,
            password: password.value,
        })
        console.log(data, "data")
        console.log(error, "error")

    } catch (error) {

    }
}

window.loginHandler = loginHandler