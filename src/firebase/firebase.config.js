// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAEwkSZKZ4UsMrvTqa7yhhF83R9nLewf5Y",
  authDomain: "coffee-store-firebase.firebaseapp.com",
  projectId: "coffee-store-firebase",
  storageBucket: "coffee-store-firebase.appspot.com",
  messagingSenderId: "1050104894171",
  appId: "1:1050104894171:web:3bcfaba170e4217b2132fe"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);