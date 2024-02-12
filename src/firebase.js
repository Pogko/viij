// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore"

import {getAuth, GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = { 
  apiKey : "AIzaSyDjHcnknDlmilaSvBCkVoS5XP6J5wozztc" , 
  authDomain : "projek-web-kelas.firebaseapp.com" , 
  projectId : "projek-web-kelas" , 
  penyimpananBucket : "projek-web-kelas.appspot.com" , 
  pesanSenderId : "437986384869" , 
  appId : "1:437986384869:web:a1603bb3d6a19877ffed0c" 
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();