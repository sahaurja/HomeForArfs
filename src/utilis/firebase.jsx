// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAjYf0WarjEsWwLWeojCKKQ1wD0xrIjE_s",
  authDomain: "homeforarfs-bc72e.firebaseapp.com",
  projectId: "homeforarfs-bc72e",
  storageBucket: "homeforarfs-bc72e.appspot.com",
  messagingSenderId: "119570551858",
  appId: "1:119570551858:web:f501b436f6d0fa6075582b",
  measurementId: "G-HMF1NDCJNV"
};
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
