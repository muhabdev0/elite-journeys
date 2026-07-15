
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore, initializeFirestore } from "firebase/firestore";

// Define config in a way that prevents Vite/Esbuild from aggressively optimizing it out
const firebaseConfig = Object.freeze({
  apiKey: "AIzaSyD_KhwpVn0eoTyHIRUl5pV4MTJV2pxQglA",
  authDomain: "aswani-data.firebaseapp.com",
  projectId: "aswani-data",
  storageBucket: "aswani-data.firebasestorage.app",
  messagingSenderId: "813389915406",
  appId: "1:813389915406:web:fa724999c1b12eb866635f",
});

// Singleton pattern: Ensure Firebase is initialized exactly once, preventing race conditions
let app;
let db: ReturnType<typeof getFirestore>;

if (!getApps().length) {
  app = initializeApp(firebaseConfig);
  // Force long polling to prevent Vercel serverless functions/containers from hanging
  db = initializeFirestore(app, {
    experimentalForceLongPolling: true,
  });
} else {
  app = getApp();
  db = getFirestore(app);
}

// Export the globally guaranteed database instance
export { app, db };