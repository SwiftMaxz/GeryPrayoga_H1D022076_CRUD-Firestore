// src/utils/firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyA4oSVbe2jjjZgc5VQbqG6KPtcACBL4t_g",
    authDomain: "vue-firebase-51a76.firebaseapp.com",
    projectId: "vue-firebase-51a76",
    storageBucket: "vue-firebase-51a76.firebasestorage.app",
    messagingSenderId: "170185358092",
    appId: "1:170185358092:web:c46d6f58d506fa9d572729"
};

const firebase = initializeApp(firebaseConfig);
const auth = getAuth(firebase);
const googleProvider = new GoogleAuthProvider();
const db = getFirestore(firebase);

export { auth, googleProvider, db };