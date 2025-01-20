const authCheck = () => {
    const user = localStorage.getItem("user")
    
    console.log("authCheck" , user)

    if(user === null){
        window.location.replace('../../index.html')
    }

}

export {
    authCheck
}