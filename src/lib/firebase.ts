import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// TODO: Replace with your actual Firebase config from the Firebase Console
const firebaseConfig = {
  apiKey: "AIzaSyBdMN-TZo2Zyaxge_9w76pXcRjF4iaxGzQ",
  authDomain: "portfoliodashboard-23b01.firebaseapp.com",
  projectId: "portfoliodashboard-23b01",
  storageBucket: "portfoliodashboard-23b01.firebasestorage.app",
  messagingSenderId: "972133309418",
  appId: "1:972133309418:web:fda11e00a9c74c3246f093"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
