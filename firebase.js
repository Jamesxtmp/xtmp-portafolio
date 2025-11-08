// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAHfQZGf4wz9e5-FwZY2XV7rfiZfZvpczU",
  authDomain: "xtmp-portafolio.firebaseapp.com",
  databaseURL: "https://xtmp-portafolio-default-rtdb.firebaseio.com",
  projectId: "xtmp-portafolio",
  storageBucket: "xtmp-portafolio.firebasestorage.app",
  messagingSenderId: "827537104187",
  appId: "1:827537104187:web:1c0d1c3fc4b5fa3f65eb1e",
  measurementId: "G-K6QHSTJZR3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = getStorage(app);
export { app, storage, analytics };