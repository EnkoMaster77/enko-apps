// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCqu2HlWOn2YN_Ow8mSA-_sXGE6OI507Sc",
  authDomain: "enko-app-ecdb0.firebaseapp.com",
  projectId: "enko-app-ecdb0",
  storageBucket: "enko-app-ecdb0.appspot.com",
  messagingSenderId: "588332671027",
  appId: "1:588332671027:web:a02bd134953b8bbcb00346",
  measurementId: "G-HCYBP2JY2N"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
