import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD_KhwpVn0eoTyHIRUl5pV4MTJV2pxQglA",
  authDomain: "aswani-data.firebaseapp.com",
  projectId: "aswani-data",
  storageBucket: "aswani-data.firebasestorage.app",
  messagingSenderId: "813389915406",
  appId: "1:813389915406:web:fa724999c1b12eb866635f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
