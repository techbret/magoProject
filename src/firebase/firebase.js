// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCjj1BINiRT-mSFJ7cgRq5BllDXh4_1pDg",
  authDomain: "spacetogether-ecef7.firebaseapp.com",
  projectId: "spacetogether-ecef7",
  storageBucket: "spacetogether-ecef7.appspot.com",
  messagingSenderId: "941209204247",
  appId: "1:941209204247:web:3cc1fc6ff066891b938e52",
  measurementId: "G-Z81E3ZDM2X"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const auth = getAuth(app);
export const db = getFirestore(app);