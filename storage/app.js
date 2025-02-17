// // console.log("supabase" , supabase)
// // import { createClient } from '@supabase/supabase-js'

// // Create a single supabase client for interacting with your database
// const supabaseClient = supabase.createClient('https://lqpseixtxirsvxtjwwam.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxxcHNlaXh0eGlyc3Z4dGp3d2FtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzkyMDIxNTMsImV4cCI6MjA1NDc3ODE1M30.DqueIyKADrS07MuQAMVK_mCTEXRaCFX1uYOjwnJKBkY')

// // console.log("supabaseClient", supabaseClient)


// const uploadImage = async () => {
//     const fileInput = document.getElementById("imageFile")
//     // console.log("fileInput" , fileInput.files[0])
//     const file = fileInput.files[0]

//     const { data, error } = await supabaseClient
//         .storage
//         .from('images')
//         .upload(file.name + new Date().getMilliseconds(), file)
//     if (error) {
//         alert(error)
//         return
//     }
//     console.log(data, "Data")
//     const { data: url } = supabaseClient
//         .storage
//         .from('images')
//         .getPublicUrl(data.path)

//     console.log("url", url)


// }

// window.uploadImage = uploadImage



// console.log("HELLO WORLD 1")
// function timer() {
//     console.log("HELLO WORLD 2")
// }
// setTimeout(timer, 0)

// console.log("HELLO WORLD 3")
// console.log("HELLO WORLD 3")
// console.log("HELLO WORLD 3")
// console.log("HELLO WORLD 3")
// console.log("HELLO WORLD 3")
// console.log("HELLO WORLD 3")
// console.log("HELLO WORLD 3")
// console.log("HELLO WORLD 3")


// function foo(){
//     var a = 10
// }

// foo()
// console.log(a)




// new Promise()
// async await


console.log("HELLO WORLD 1")


setTimeout(() => {
    console.log("TImEOUT")
}, 2000)

const myPromise = new Promise((resolve, reject) => {
        resolve("promise")

}).then(res => console.log("promise"))



console.log("HELLO WORLD 3")

