// This is a client component
"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import firebase from '../firebase';

const actionCodeSettings = {
  // URL you want to redirect back to. The domain (www.example.com) for this
  // URL must be in the authorized domains list in the Firebase Console.
  url: 'https://www.example.com/finishSignUp?cartId=1234',
  // This must be true.
  handleCodeInApp: true,
  iOS: {
    bundleId: 'com.example.ios'
  },
  android: {
    packageName: 'com.example.android',
    installApp: true,
    minimumVersion: '12'
  },
  dynamicLinkDomain: 'example.page.link'
};

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      console.log('User logged in successfully!');
    } catch (error) {
      console.error('Error logging in:', error.message);
    }
  };

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
