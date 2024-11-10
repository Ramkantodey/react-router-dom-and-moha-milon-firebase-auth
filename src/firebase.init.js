// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBzWg8_n12BI3WkEAq9uvL-BXxEbrRlUc8",
    authDomain: "auth-moha-milon-1bf88.firebaseapp.com",
    projectId: "auth-moha-milon-1bf88",
    storageBucket: "auth-moha-milon-1bf88.firebasestorage.app",
    messagingSenderId: "359264181272",
    appId: "1:359264181272:web:5fc1c698a6f20186d0b76d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);