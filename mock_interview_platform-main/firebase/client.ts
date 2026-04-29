
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "key",
  authDomain: "vocalens-5707d.firebaseapp.com",
  projectId: "vocalens-5707d",
  storageBucket: "vocalens-5707d.firebasestorage.app",
  messagingSenderId: "928538067623",
  appId: "1:928538067623:web:c1708110aad59c8bca1182",
  measurementId: "G-NYQFXYXCKZ"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
