// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBLNprxx00fjHwcaozkJ80HaZt9rZKUdWQ",
  authDomain: "movie-dbko.firebaseapp.com",
  projectId: "movie-dbko",
  storageBucket: "movie-dbko.firebasestorage.app",
  messagingSenderId: "536124947417",
  appId: "1:536124947417:web:a8c9c3b40a59b2e269f7c8"
};

export const environment = {
  production: false,
  firebase: firebaseConfig
};




// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);