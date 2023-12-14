import { initializeApp } from 'firebase/app';
/**
* firebase configuration to connect our website to firebase
* unique to every firebase project
* using vars from .env.local for security reasons
* found all these in FireBase's interface settings for my project
*/

const firebaseConfig = {
  apiKey: "AIzaSyC-vqfnFZjBaqHiieMaMD1tHCc-QJovoH4",
  authDomain: "tigerlist-10777.firebaseapp.com",
  projectId: "tigerlist-10777",
  storageBucket: "tigerlist-10777.appspot.com",
  messagingSenderId: "316694031166",
  appId: "1:316694031166:web:335013c245d09420a11a6f",
  measurementId: "G-0TFVF3NL29"
};

const app = initializeApp(firebaseConfig);