import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "coder-backend-course.firebaseapp.com",
  projectId: "coder-back-course",
  storageBucket: "coder-back-course.appspot.com",
  messagingSenderId: "403334413486",
  appId: "1:403134413482:web:43dcf931b7ab63be34aed3"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)