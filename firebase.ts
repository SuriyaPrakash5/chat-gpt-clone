// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0utDoEtqj3BunNe-MkRLwwxNN-pyGVCw",
  authDomain: "chatgpt-fa594.firebaseapp.com",
  projectId: "chatgpt-fa594",
  storageBucket: "chatgpt-fa594.appspot.com",
  messagingSenderId: "611592336928",
  appId: "1:611592336928:web:375ee4eced44f82bc8ae45",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
