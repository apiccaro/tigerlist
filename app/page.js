//SIGN IN PAGE 
"use client";

import Image from 'next/image'
import Link from 'next/link';

// defining a function assigning it to var handleLogin 
const handleLogin = () => {
  // TODO: REPLACE WITH CC'S SSI PAGE 
  // change the browser's location to the specified URL 
  window.location.href = 'https://cas.coloradocollege.edu/cas/';
};

function LoginButton() {
  const buttonStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center', 
    height: '40px', 
    border: '2px solid white', 
    padding: '0 16px', 
  };
  return (
      <button style={buttonStyle} onClick={handleLogin}>Sign In</button>
  );
}


export default function Home() {
return (
  //flex min-h-screen
  <main className="flex flex-col items-center justify-between p-24">
     <h1>Welcome to TigerList</h1>
     <p>a program connecting Colorado College students looking to exchange goods, services, and reduce waste.</p>
     <div className="flex items-center justify-center mt-10"> 
        <p> </p>
     </div>
     <div className="flex items-center justify-center mt-10"> 
        <LoginButton />
     </div>
  </main>
)
}