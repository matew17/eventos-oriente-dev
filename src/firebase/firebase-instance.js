import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
import { initializeApp } from "firebase/app";

import { firebaseConfig } from "./firebase-config";

const firebase = initializeApp(firebaseConfig);

const firebaseAuth = getAuth(firebase);
const fireStoreDB = getFirestore(firebase);
const googleProvider = new GoogleAuthProvider();

export { firebaseAuth, fireStoreDB, googleProvider };
