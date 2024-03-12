'use client'
// Design for the "My Listings" page of the website
import SellProducts from "@/Components/SellProducts";
import Link from "next/link";
import {useState,useEffect} from 'react'; 
import { Suspense } from "react";
import Loading from "../loading";

const getUser= async()=>{
    console.log("calling getUser in app/mylistings/page.js")

  const response = await fetch(process.env.NEXT_PUBLIC_API_CONNECTION_URL+"getUser", {
      method:"GET",
      });
    const data = await response.json();
    return data;
}

const getUserCAS= async()=>{
    console.log("calling getUserCAS in app/mylistings/page.js")

  const response = await fetch(process.env.NEXT_PUBLIC_API_CONNECTION_URL+"getUserCAS", {
      method:"GET",
      });
    const data = await response.json();
    console.log(data)
    return data;
}

//https://www.youtube.com/watch?v=uR67O6sNjbg&t=431s - Data fetching and loading state

const getAllModeratedUsers = async () => {

    const response = await fetch(process.env.NEXT_PUBLIC_API_CONNECTION_URL+"getAllModeratedUsers",{
      method:"GET",
      });
    const data = await response.json();
    return data;
  };

  

export default function Home() {
    const [moderatedUsers, setModeratedUsers] = useState();
    const [isModerated,setIsModerated]=useState();
    const [loading, setLoading] = useState(false);
    // useEffect(() => {
      
    //     const fetchData = async () => {
          
    //       try {
    //         const data = await getAllModeratedUsers();
    //         setModeratedUsers(data.title);
    //         const user=await getUser();
    //         const userModerated = data.title.includes(user);
    //         console.log(user);
    //         setIsModerated(userModerated);
    //       } catch (error) {
    //         console.log(error)
    //       }
    //     };
    
    //     fetchData();
    //   }, []);


    useEffect(() => {
        const fetchData = async () => {
          
            try {
              setLoading(true);
                const data = await getAllModeratedUsers();
                setModeratedUsers(data);
                console.log(data)
                const user = await getUserCAS();
                console.log("apparently got data")
                console.log(user);
                const userModerated = data.includes(user);
                
                setIsModerated(userModerated);
            } catch (error) {
                console.log(error);
            } finally {
                setTimeout(() => {
                  setLoading(false);
              }, 1500);
          }
      };

      fetchData();
  }, []);

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


//     return (
//       <Suspense fallback={<Loading/>} maxDuration={10000}>

     
//       <main>
           
       
//         <div className="flex flex-col bg-yellow-600 min-h-screen">
//             <div style={RowStyle}>
//                 <div className="text-4xl text-black font-semibold p-5">My Listings</div><br></br>
//                 {isModerated && (
//                     <Link href={'/flaggedposts'} className="text-4xl text-black font-semibold p-5">Flagged Posts</Link>
//                 )}
//             </div>
//             <SellProducts />
//         </div>

//         </main>
//         </Suspense>
//         );
// }