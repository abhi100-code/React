import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBXxw27AWr5OgaWLiRIhfoqf28QutpcU_0",
  authDomain: "fir-app-baba0.firebaseapp.com",
  projectId: "fir-app-baba0",
  storageBucket: "fir-app-baba0.firebasestorage.app",
  messagingSenderId: "730985734695",
  appId: "1:730985734695:web:05e98e32ea545298d96402",
};

const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);