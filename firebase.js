// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore}from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBWnKfXrrmIfjkJQh-Tf0pRwGwGj-vpEHM",
  authDomain: "ups-clone-b55e2.firebaseapp.com",
  databaseURL: "https://ups-clone-b55e2-default-rtdb.firebaseio.com",
  projectId: "ups-clone-b55e2",
  storageBucket: "ups-clone-b55e2.appspot.com",
  messagingSenderId: "571928252435",
  appId: "1:571928252435:web:aa7fcd2057f78fd69eefe6",
  measurementId: "G-QXNKSZ6WEQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const db=getFirestore()
export  {db}