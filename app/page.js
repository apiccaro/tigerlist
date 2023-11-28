//this will be the sign in page! 

import Image from 'next/image'

function LoginButton() {
   const buttonStyle = {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '40px', // Set a specific height for the button if needed
    };
    return <button style={buttonStyle}>Sign In</button>;
 }
 

export default function Home() {
 return (
   //flex min-h-screen 
   <main className="flex flex-col items-center justify-between p-24">
      <h1>Welcome to TigerList</h1>
      <p>a program connect Colorado College students looking to exchange goods, services, and reduce waste.</p>
      <div className="flex items-center justify-center mt-20"> {/* Adjust mt-8 based on your preference */}
         <p> </p>
      </div>
      <div className="flex items-center justify-center mt-20"> {/* Adjust mt-8 based on your preference */}
         <LoginButton />
      </div>
   </main>
 )
}

// sign in page with AUTHENTICATION 