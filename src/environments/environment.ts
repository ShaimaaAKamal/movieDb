// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDjZkKyQDYgqmnWhfHK0A-XEF3XkfA1S4Q",
  authDomain: "moviedb-49c93.firebaseapp.com",
  projectId: "moviedb-49c93",
  storageBucket: "moviedb-49c93.firebasestorage.app",
  messagingSenderId: "690054886200",
  appId: "1:690054886200:web:1cc60597d4dd28004987cd",
  measurementId: "G-3QMM5K62PK"
};

export const environment = {
  production: false,
  firebase: firebaseConfig
};




// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);