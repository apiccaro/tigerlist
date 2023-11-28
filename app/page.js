//this will be the sign in page! 

import Image from 'next/image'
import Link from 'next/link';

function LoginButton() {
   const buttonStyle = {
     display: 'flex',
     alignItems: 'center',
     justifyContent: 'center',
     height: '40px', // Set a specific height for the button if needed
     border: '2px solid white', // Add a white border
     padding: '0 16px', // Add padding for better visual appearance
   };
 
   return (
     <Link href="/SSI">
         <button style={buttonStyle}>Sign In</button>
     </Link>
   );
 }
 

export default function Home() {
 return (
   //flex min-h-screen 
   <main className="flex flex-col items-center justify-between p-24">
      <h1>Welcome to TigerList</h1>
      <p>a program connecting Colorado College students looking to exchange goods, services, and reduce waste.</p>
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