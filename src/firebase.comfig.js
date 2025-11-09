// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCyrAq8DksSGVGKlm_oOsJjqkDRMAVKcAo",
  authDomain: "my-assignment-10-13cba.firebaseapp.com",
  projectId: "my-assignment-10-13cba",
  storageBucket: "my-assignment-10-13cba.firebasestorage.app",
  messagingSenderId: "367155378471",
  appId: "1:367155378471:web:e6145e429823e4b42a9102"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);