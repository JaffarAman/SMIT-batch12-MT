const authCheck = () => {
    const user = localStorage.getItem("user")

    console.log("authCheck", user)

    if (user === null) {
        window.location.replace('../../index.html')
    }

}




// user auth
const authUserCheck = () => {
    const user = JSON.parse(localStorage.getItem("user"))

    console.log("authCheck", user)

    if (user === null) {
        window.location.replace('../../index.html')
    }

    if (user.type !== "user") {
        // window.location.replace("../admin/dashboard/dashboard.html")
        return
    }


}


const authAdminCheck = () => {
    const user = JSON.parse(localStorage.getItem("user"))

    console.log("authCheck", user)

    if (user === null) {
        window.location.replace('../../index.html')
    }
    console.log("user.type", user.type)
    if (user.type !== "admin") {
    // window.location.replace("../user/dashboard/dashboard.html")
    //     return
    }


}

export {
    authCheck,
    authUserCheck,
    authAdminCheck
}