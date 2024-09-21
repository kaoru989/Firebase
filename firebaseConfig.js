// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCXPWdKrTWGvTY-zOpQ2THMBs9lZDZRL-Q",
  authDomain: "fir-auth-a755f.firebaseapp.com",
  projectId: "fir-auth-a755f",
  storageBucket: "fir-auth-a755f.appspot.com",
  messagingSenderId: "1094099946361",
  appId: "1:1094099946361:web:afe7a1580f89c3af333da8",
  measurementId: "G-V3SJDMP6FC"
};

// Initialize Firebase
const Fireapp = initializeApp(firebaseConfig);
const analytics = getAnalytics(Fireapp);
const db = getFirestore(app);

export {Fireapp, db, analytics};