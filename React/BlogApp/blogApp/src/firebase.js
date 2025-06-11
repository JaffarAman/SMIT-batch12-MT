import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDBSpEyqthJDcaEv0J0ALSZ58m81ydBokM",
    authDomain: "fullstack-quizapp.firebaseapp.com",
    projectId: "fullstack-quizapp",
    storageBucket: "fullstack-quizapp.firebasestorage.app",
    messagingSenderId: "804689834014",
    appId: "1:804689834014:web:43c61fef5c05bfcb5abe0f"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth()
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export {
    app,
    auth,
    db
}