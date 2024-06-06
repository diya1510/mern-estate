// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-fcf0c.firebaseapp.com",
  projectId: "mern-estate-fcf0c",
  storageBucket: "mern-estate-fcf0c.appspot.com",
  messagingSenderId: "613313526886",
  appId: "1:613313526886:web:589d947412d46cf03cc1a7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;