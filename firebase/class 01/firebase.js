// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, doc, updateDoc } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-firestore.js";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "***************",
    authDomain: "************",
    projectId: "************",
    storageBucket: "*************",
    messagingSenderId: "**************",
    appId: "*******************"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);


export {
    app,
    db,
    collection,
    addDoc,
    getDocs,
    doc, updateDoc
}



// Add Firebase to your JavaScript project
// https://firebase.google.com/docs/web/setup