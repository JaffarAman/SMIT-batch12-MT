console.log("HELLO WORLD")

const projectURL = "https://wyiqfkbrbfigtuviakes.supabase.co"
const APIKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind5aXFma2JyYmZpZ3R1dmlha2VzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzYzNTI4NDksImV4cCI6MjA1MTkyODg0OX0.MrHG6GKn2z4abuPCSDwSXwYMLQ24O6kM7z1JLhTro9g"


export const supabaseClient = supabase.createClient(projectURL, APIKey)
console.log("supabaseClient", supabaseClient)
console.log(supabase)


const email = document.querySelector("#email")
const password = document.querySelector("#password")

const signupHandler = async () => {
    try {
        // create Data
        const { data, error } = await supabaseClient
            .from('SMIT')
            .insert({ full_name: "JaffarAman", last_name: "Aman" })
            .select()
        console.log(data, "data")
        console.log(error, "error")


        // const { data, error } = await supabaseClient.auth.signUp({
        //     email: email.value,
        //     password: password.value,
        // })

        // const { data, error } = await supabaseClient.auth.signUp({
        //     phone: '+923462528569',
        //     password: 'admin123',
        //     options: {
        //         channel: 'whatsapp'
        //     }
        // })
        // console.log(data, "data")
        // console.log(error, "error")

    } catch (error) {
        console.log(error, "error")
    }


}

window.signupHandler = signupHandler 