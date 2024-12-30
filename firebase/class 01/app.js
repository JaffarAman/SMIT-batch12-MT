import { addDoc, app, collection, db, doc, getDocs, updateDoc } from "./firebase.js"
// console.log("app", app)
// console.log("db", db)

const addDataBtn = document.querySelector("#addDataBtn")
const getDataBtn = document.querySelector("#getDataBtn")
const updateDataBtn = document.querySelector("#updateDataBtn")

const addData = async () => {
    // add data on firebase
    // const userCollection = collection(db, "users")
    // const response = await addDoc(userCollection, {
    //     name: "Jaffar",
    //     age: 23,
    //     isActive: true,
    //     isAdmin: false
    // })
    // console.log("response", response)
    try {
        const docRef = await addDoc(collection(db, "user"), {
            first: "Ada",
            last: "Lovelace",
            born: 1815
        });
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}


const getData = async () => {
    try {
        // const querySnapshot = await getDocs(collection(db, "users"))
        // // console.log("querySnapshot", querySnapshot)
        // querySnapshot.forEach((doc) => {
        //     console.log("doc", doc.data())
        // })


        const querySnapshot = await getDocs(collection(db, "users"));
        querySnapshot.forEach((doc) => {
            console.log(`${doc.id}`);
            console.log(doc.data());
        });


    } catch (error) {
        console.log("error", error.message)
    }
}


const updateData = async () => {
    try {
        await updateDoc(doc(db, "users", "gqCgGj2Wti3Iz4xkksvJ"), {
            name: "Jaffar Aman"
        })
        console.log("updated")
    } catch (error) {
        console.log("error", error.message)
    }
}


getDataBtn.addEventListener("click", getData)
addDataBtn.addEventListener("click", addData)
updateDataBtn.addEventListener("click", updateData)