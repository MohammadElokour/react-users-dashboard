import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD7l8NvZT_yZR5mXYIOlL4W3hjYAL-KZlo",
  authDomain: "react-users-dashboard.firebaseapp.com",
  projectId: "react-users-dashboard",
  storageBucket: "react-users-dashboard.appspot.com",
  messagingSenderId: "405931900757",
  appId: "1:405931900757:web:bbad3e17de147baf0579dc",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
