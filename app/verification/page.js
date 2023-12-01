import React from 'react';
import Image from 'next/image';
//import WriteToCloudFirestore from '../..firebase_components'


const LoginForm = () => {
  const labelStyle = { color: 'black', marginBottom: '8px' };
  const inputStyle = { color: 'black', marginLeft: '5px' };


  return (
    <div style={{ background: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
      <h1 style={{ color: 'black' }}>Sign In</h1>
      <form>
        <label style={labelStyle}>
          Email:
          <input type="email" name="email" style={inputStyle} />
        </label>
        <br />
        <label style={labelStyle}>
          Password:
          <input type="password" name="password" style={inputStyle} />
        </label>
        <br />  {/* line break */}
        <button type="button">Submit</button>

      </form>
    </div> 
  );
};

export default function Home() {
  return (
    //flex min-h-screen 
    <main className="flex flex-col items-center justify-between p-24">
       <LoginForm />
    </main>
  )
 }
