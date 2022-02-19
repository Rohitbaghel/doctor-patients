// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyA5kAanKGPs7uJidj6El8gFMNO0bn1jnug",
  authDomain: "doctor-patient-records.firebaseapp.com",
  projectId: "doctor-patient-records",
  storageBucket: "doctor-patient-records.appspot.com",
  messagingSenderId: "91818039035",
  appId: "1:91818039035:web:6325718c5539890a6f825e",
  measurementId: "G-7X65REQLYV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const Auth =getAuth(app)