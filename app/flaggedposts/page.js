/**
 * Represents the "My Listings" page of the website.
 */
 import ModeratePosts from "@/Components/ModeratePosts";
 import Link from "next/link";
 
 export default function Home() {
 
     /**
      * CSS styling for a row layout.
      */
     const RowStyle={
         display: 'flex', 
         flexDirection: 'row',
          gap: '8px',
         }
     /**
      * CSS styling for a column layout.
      */
     const ColStyle={
         display: 'flex', 
         flexDirection: 'column',
         alignItems: 'center',
         gap: '8px',
         }
 
     /**
      * Renders the "My Listings" page content.
      * @returns {JSX.Element} The JSX content for the page.
      */
     return (
         <main style={{
             display: 'flex',
             alignItems: 'center',
             justifyContent: 'center',
             backgroundColor:'#D09B2C',
             color: '#D09B2C',
             height: '100%',
             width: '100%',
         }}>
             <div style={ColStyle}>
                 <div style={RowStyle}>
                     <Link href={'/mylistings'} className="text-4xl text-black font-semibold p-5">My Listings</Link>
                     <div className="text-4xl text-black font-semibold p-5">Flagged Posts</div><br></br>
                 </div>
                 <ModeratePosts />
             </div>
         </main>
         );
 }
 