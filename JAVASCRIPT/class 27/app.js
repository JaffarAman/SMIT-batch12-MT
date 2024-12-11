
// find
// const arr = [ 1, 2, 3, 4, 4, 5, 9]
// const findValue = arr.findIndex((val , index)=>{
//     console.log("function" , val)
//     if(val===15){
//         return val
//     }
// })

// console.log(" findValue" , findValue)

// fetch()
//     .then() =>json convert
//         .then()
//         .catch()


// Promise's
// const myPromise = new Promise((resolve, reject) => {
//     const api = true

//     if (api) {
//         resolve("API call successfully")
//     } else {
//         reject("Something went wrong!")
//     }

// })
// .then((result)=>{
//     console.log("result" , result)
// })
// .catch((error)=>{
//     console.log("error" , error)
// })



// const myPromise = new Promise((resolve, reject) => {
//     const api = true

//     if (api) {
//         resolve("API call successfully")
//     } else {
//         reject("Something went wrong!")
//     }

// });

// myPromise.then((result)=>{
//     console.log("result" , result)
// })
// .catch((error)=>{
//     console.log("error" , error)
// })


// async / await
// const reqApi =  async () => {
//     console.log("HELLO WORLD 1")
//     console.log("HELLO WORLD 2")
//     var api =  await false
//     console.log("HELLO WORLD 3" , api)
// }

// fetch("https://fakestoreapi.com/products")
// .then(res=>res.json())
// .then
// .catch

const fetchApi = async () => {
    try {

        const response = await fetch("https://fakestoreapi.com/products").then(res => res.json())
        console.log(response, "response")

    } catch (error) {
        console.log(error, "error")
    }
}
fetchApi()

// const respnse=  await fetch()
// await response.json()