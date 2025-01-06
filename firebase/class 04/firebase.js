// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";

import {
    getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword,
    onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";

import { doc, setDoc, getFirestore, getDoc, collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDE9_D7Daf5B5ACD0EPC84Kz3SqMCqPcc8",
    authDomain: "smit-batch-12.firebaseapp.com",
    projectId: "smit-batch-12",
    storageBucket: "smit-batch-12.firebasestorage.app",
    messagingSenderId: "933837860584",
    appId: "1:933837860584:web:4dbac5cecf84b936dbe35d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Authentication
const auth = getAuth();

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export {
    app,
    getAuth,
    createUserWithEmailAndPassword,
    auth,
    doc, setDoc,
    db,
    signInWithEmailAndPassword,
    getDoc,
    onAuthStateChanged,
    collection, addDoc,
    getDocs
}


// https://firebase.google.com/docs/auth/web/password-auth