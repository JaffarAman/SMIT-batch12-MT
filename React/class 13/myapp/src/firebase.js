import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDBSpEyqthJDcaEv0J0ALSZ58m81ydBokM",
  authDomain: "fullstack-quizapp.firebaseapp.com",
  projectId: "fullstack-quizapp",
  storageBucket: "fullstack-quizapp.firebasestorage.app",
  messagingSenderId: "804689834014",
  appId: "1:804689834014:web:9d5c2b9c6839e7da5abe0f"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth()

export {
    app,
    auth
}