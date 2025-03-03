fetch("http://localhost:5000/getAllUser")
    .then(res => res.json()) // res convert into json
    .then((users) => { //success
        console.log("users", users)
    })
    .catch((error) => { //error
        console.log("error", error)
    })


const createuser = () => {
    const fullName = document.querySelector("#fullName").value
    const email = document.querySelector("#email").value
    const password = document.querySelector("#password").value

    const userObj = {
        fullName,
        email,
        password
    }

    fetch("http://localhost:5000/createUser", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body : JSON.stringify(userObj)
    })
        .then(res => res.json()) // res convert into json
        .then((users) => { //success
            console.log("users", users)
        })
        .catch((error) => { //error
            console.log("error", error)
        })



}