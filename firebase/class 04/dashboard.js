import { addDoc, auth, collection, db, doc, getDoc, getDocs, onAuthStateChanged } from "./firebase.js"

const authCheck = async () => {
    const userUid = localStorage.getItem("uid")
    console.log("userUid", userUid)
    if (!userUid) {
        window.location.replace("./index.html")
    }


    const fname = document.getElementById("fname")
    const lname = document.getElementById("lname")
    // get Data 
    const userData = await getDoc(doc(db, "users", userUid))
    console.log(userData.data())
    // fname.innerHTML = userData.data().firstName
    // lname.innerHTML = userData.data().lastName



    // onAuthStateChanged(auth, (user) => {
    //     if (!user) {
    //         window.location.replace("./index.html")
    //         // console.log("user login hai", user)
    //     } else {
    //         // console.log("user login nahi hai")
    //     }
    // })

}


const blogPost = async () => {
    try {
        console.log("blogPost")
        const title = document.querySelector("#title")
        const desc = document.querySelector("#desc")
        const checkbox = document.querySelector("#checkbox")
        const obj = {
            title: title.value,
            desc: desc.value,
            isPrivate: checkbox.checked,
            uid: localStorage.getItem('uid')
        }
        await addDoc(collection(db, "blogs"), obj)
        alert("blog created successfully!")
        getPost()
    } catch (error) {
        console.log("error", error.message)
    }



}


const getPost = async () => {
    console.log("getPost get")
    try {
        const parent = document.getElementById("parent")
        const snapShot = await getDocs(collection(db, "blogs"))
        parent.innerHTML = ""
        snapShot.forEach((doc) => {
            if (doc.data().isPrivate) {
                if (doc.data().uid === localStorage.getItem("uid")) {
                    parent.innerHTML += ` <div>
                <li> ${doc.data().title} </li>
                <li>${doc.data().desc}</li>
                <li> ${doc.data().isPrivate ? "Private" : "Public"} </li>
                ${doc.data().uid === localStorage.getItem("uid") ?

                            "<button>EDIT</button>" : ""
                        }
                <hr />
            </div>`
                }

            } else {
                parent.innerHTML += ` <div>
                <li> ${doc.data().title} </li>
                <li>${doc.data().desc}</li>
                <li> ${doc.data().isPrivate ? "Private" : "Public"} </li>
                ${doc.data().uid === localStorage.getItem("uid") ?

                        "<button>EDIT</button>" : ""
                    }
                
                <hr />
            </div>`
            }

        })

    } catch (error) {

    }

}


window.blogPost = blogPost
window.authCheck = authCheck
window.getPost = getPost
