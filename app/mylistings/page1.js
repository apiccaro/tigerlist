'use client'


//I changed this page name so i could test a simplified version of the page. 
//Currently works as intended given a hardcoded email!


// Design for the "My Listings" page of the website
import SellProducts from "@/Components/SellProducts";
import Link from "next/link";
import {useState,useEffect} from 'react'; 
import { Suspense } from "react";
import Loading from "../loading";

//https://www.youtube.com/watch?v=uR67O6sNjbg&t=431s - Data fetching and loading state


export default function Home() {
    const [loading, setLoading] = useState(false);
    const isModerated = false;

    const RowStyle={
        display: 'flex', 
        flexDirection: 'row',
         gap: '8px',
    }

    const moderators = ['j_dresser@coloradocollege.edu']
    const currentUser = 'j_dresser@coloradocollege.edu'
    //const currentUser = 's_treat@coloradocollege.edu'

    const showFlaggedPostsLink = moderators.includes(currentUser);
    return (
      <div>

    
      {loading&& <Loading/>}
          <main>
            
              {!loading&&<div className="flex flex-col bg-yellow-600 min-h-screen">
                  <div style={RowStyle}>
                      <div className="text-4xl text-black font-semibold p-5">My Listings</div>
                      <br></br>
                      {isModerated && (
                          <Link href={'/flaggedposts'} className="text-4xl text-black font-semibold p-5">
                              Flagged Posts
                          </Link>
                      )}
                  </div>
                  <SellProducts />
              </div>}

          </main>
          </div>
  );
}