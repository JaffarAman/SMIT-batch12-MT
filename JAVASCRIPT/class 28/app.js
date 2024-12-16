// console.log(firstName)
// console.log("hello world")

// const foo = () => {
//     try {
//         const firstName = "Jaffar"
//         console.log("lastName", lastName)
//         console.log("firstName", firstName)

//     } catch (error) {
//         console.log("error", error.message)
//         alert(error.message)
//     }

// }
// foo()
// console.log("HELLO WORLD 1")
// console.log("HELLO WORLD 2")
// console.log("HELLO WORLD 3")
// console.log("HELLO WORLD 4")


// const foo = () => {
//     try {
//         const isAdmin = false
//         if (isAdmin) {
//             console.log("ALLOW")
//         } else {
//             throw "Not Allowed"
//         }
//         alert("hello world")

//     } catch (error) {
//         console.log("error", error)
//     }
// }

// foo()


// const myPromise = new Promise((resolve, reject) => {
//     const bool = true
//     if (bool) {
//         resolve({
//             status: true,
//             message: "Successfully",
//             data: []
//         })
//     } else {
//         reject({
//             status: false,
//             message: "rejected",
//             date: null
//         })
//     }

// })
//     .then(response => {
//         console.log("response", response)
//     })
//     .catch(error => {
//         console.log("error", error)
//     })

const fetchData = async () => {
    try {
        const response = await fetch("https://backend-prod.app.hiringmine.com/api/jobAds/all?limit=10&pageNo=1&keyWord=&category=&isPending=false")
            .then(res => res.json())
        console.log("response job data", response)
    } catch (error) {
        console.log("error", error)
    }
}

fetchData()