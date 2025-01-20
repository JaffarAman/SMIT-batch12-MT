import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";

// Auth
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";

//  Firestore
import { getFirestore, doc, setDoc , getDoc  } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyDBSpEyqthJDcaEv0J0ALSZ58m81ydBokM",
    authDomain: "fullstack-quizapp.firebaseapp.com",
    projectId: "fullstack-quizapp",
    storageBucket: "fullstack-quizapp.firebasestorage.app",
    messagingSenderId: "804689834014",
    appId: "1:804689834014:web:ebd84d561985de765abe0f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export {
    app,
    auth,
    createUserWithEmailAndPassword,
    db,
    doc,
    setDoc,
    signInWithEmailAndPassword,
    getDoc
}


//  https://firebase.google.com/docs/auth/web/password-auth?_gl=1*1u6q9me*_up*MQ..&gclid=Cj0KCQiAhbi8BhDIARIsAJLOludI44HEArlar99xNi3sppfh0heeJ3wtfLFvynAY4Pw95QFw2qwjwZ4aAiS3EALw_wcB&gclsrc=aw.ds