//this will be the sign in page!


import Image from 'next/image'
import Link from 'next/link';


function LoginButton() {
  //defining variable containing all the stylistic elements for this button 
  //let for dynamic vars, const otherwidr 
  
  return (
    <Link href="/verification"> 
        <button style={{width: '100px', height: '50px'}}>Sign In</button>
    </Link>
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


// sign in page with AUTHENTICATION

