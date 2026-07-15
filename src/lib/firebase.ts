
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
// 1. Import initializeFirestore instead of getFirestore
import { initializeFirestore } from "firebase/firestore";

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



// 2. FIX: Force Firestore to use standard HTTP long-polling.
// This prevents Vercel serverless containers from hanging on database calls!
export const db = initializeFirestore(app, {
  experimentalForceLongPolling: true,
});