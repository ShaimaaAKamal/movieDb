// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";

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



// Initialize Firebase services
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore();

onAuthStateChanged(auth, async (user) => {
  if (user) {
    const userRef = doc(db, "users", user.uid);
    await setDoc(userRef, {
      email: user.email,
      displayName: user.displayName,
      createdAt: new Date().toISOString()
    });
  }
});


