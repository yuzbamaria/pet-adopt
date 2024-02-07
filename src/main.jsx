import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyByfFYRuUyHbWZqTju2E5AK-jHGHBRNj-M",
  authDomain: "vivid-art-292315.firebaseapp.com",
  projectId: "vivid-art-292315",
  storageBucket: "vivid-art-292315.appspot.com",
  messagingSenderId: "236585214787",
  appId: "1:236585214787:web:23bfb27727df466a1105f6",
  measurementId: "G-8W3Y8JRVEH"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebase);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
