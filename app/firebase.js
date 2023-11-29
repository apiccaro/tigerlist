// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


/**
 * firebase configuration to connect our website to firebase
 * unique to every firebase project 
 * using vars from .env.local for security reasons 
 * found all these in FireBase's interface settings for my project 
 */
const firebaseConfig = {
    apiKey: NEXT_PUBLIC_FIREBASE_API_KEY, 
    authDomain: NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN, 
    projectId: NEXT_PUBLIC_FIREBASE_PROJECT_ID, 
    storageBucket: FIREBASE_STORAGE_BUCKET,
    messagingSenderId: FIREBASE_SENDER_ID, 
    appId: FIREBASE_APP_ID, 
    measurementId: FIREBASE_MEASUREMENT_ID
  };
  

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
