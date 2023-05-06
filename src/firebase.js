// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
                         apiKey: "AIzaSyBJ8O5E2nGEApB1TNKN7QMClTDMgHlx1LM",
                         authDomain: "proyecto-4-f6e12.firebaseapp.com",
                         projectId: "proyecto-4-f6e12",
                         storageBucket: "proyecto-4-f6e12.appspot.com",
                         messagingSenderId: "785244856702",
                         appId: "1:785244856702:web:6736f85a97b5fc8ec4932f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore();
export default db; 
