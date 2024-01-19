import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCLNuYTbyDcHbWlN91c7yV69K34Savzn_g",
  authDomain: "react-notes-5a67b.firebaseapp.com",
  projectId: "react-notes-5a67b",
  storageBucket: "react-notes-5a67b.appspot.com",
  messagingSenderId: "480015760338",
  appId: "1:480015760338:web:c2dfa4774e1f19d8b0a60b"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export const notesCollection = collection(db, "notes")



//npm install firebase