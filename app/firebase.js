// firebase.js
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyC-vqfnFZjBaqHiieMaMD1tHCc-QJovoH4",
  authDomain: "tigerlist-10777.firebaseapp.com",
  projectId: "tigerlist-10777",
  storageBucket: "tigerlist-10777.appspot.com",
  messagingSenderId: "316694031166",
  appId: "1:316694031166:web:eabb8328a7698d97a11a6f",
  measurementId: "G-QYQQD10GV1"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

console.log('FIREBASE WAS INITIALIZED!', firebaseConfig);

export default app;
