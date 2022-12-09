// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
import firebase from 'firebase/app'
import 'firebase/auth'


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const auth=firebase.initializeApp({
  apiKey: "AIzaSyDTKI7W_oIt7dmuo5UImQiWqeGBPR-4pvA",
  authDomain: "nocode-eba9d.firebaseapp.com",
  projectId: "nocode-eba9d",
  storageBucket: "nocode-eba9d.appspot.com",
  messagingSenderId: "22867901376",
  appId: "1:22867901376:web:a6e2ea70e15bb73842a625",
  measurementId: "G-NG7D8BK8SV"
}).auth();

{/*
const firebaseConfig = {
  apiKey: "AIzaSyDTKI7W_oIt7dmuo5UImQiWqeGBPR-4pvA",
  authDomain: "nocode-eba9d.firebaseapp.com",
  projectId: "nocode-eba9d",
  storageBucket: "nocode-eba9d.appspot.com",
  messagingSenderId: "22867901376",
  appId: "1:22867901376:web:a6e2ea70e15bb73842a625",
  measurementId: "G-NG7D8BK8SV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);*/}