// ensuring this is a client component
"use client";


import firebase from '../firebase';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { getAuth, sendSignInLinkToEmail } from "firebase/auth";


// CHECKING TO SEE IF FIREBASE IS PROPERLY CONFIGURED 
console.log('Here Is The Proof:', firebase);


//from FireBase documentation. Step 1. 
const actionCodeSettings = {
  // URL you want to redirect back to 
  url: 'http://localhost:3000',
  // ALWAYS TRUE 
  handleCodeInApp: true,
};


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    //from FireBase documentation. Step 2.  
    const auth = getAuth();
    sendSignInLinkToEmail(auth, email, actionCodeSettings)
    .then(() => {
    // the link was successfully sent. inform the user!
    // save the email locally so you don't need to ask the user for it again
    // if they open the link on the same device.
    window.localStorage.setItem('emailForSignIn', email);
    })
    .catch((error) => {
    console.error('Error logging in:', error.message);
    const errorCode = error.code;
    const errorMessage = error.message;
    });
  }
  
  return (
    <form onSubmit={handleLogin} className="flex flex-col items-center">
      <label className="mb-2 text-white">Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 text-black"
        />
      </label>
      <label className="mb-2 text-white">Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2 text-black"
        />
      </label>
      <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">Log In</button>
    </form>
  );
};

export default Login; 