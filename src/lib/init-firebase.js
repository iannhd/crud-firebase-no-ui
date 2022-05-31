// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyATU18KFGX65yPqkbCtjB6e9OHdaO9Jslw",
  authDomain: "yourstruly-c0bbf.firebaseapp.com",
  projectId: "yourstruly-c0bbf",
  storageBucket: "yourstruly-c0bbf.appspot.com",
  messagingSenderId: "475571036114",
  appId: "1:475571036114:web:377317242484afd16ab20b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore 
export const db = getFirestore(app)