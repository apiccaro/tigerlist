'use client'
// Design for the "My Listings" page of the website
import SellProducts from "@/Components/SellProducts";
import Link from "next/link";
import {useState,useEffect} from 'react'; 
import { Suspense } from "react";
import Loading from "../loading";

const getUser= async()=>{

    const response = await fetch("http://localhost:3000/api/getUser",{
      method:"GET",
      });
    const data = await response.json();
    return data;
}



const getAllModeratedUsers = async () => {

    const response = await fetch("http://localhost:3000/api/getAllModeratedUsers",{
      method:"GET",
      });
    const data = await response.json();
    console.log(data)
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
                setModeratedUsers(data.title);
                const user = await getUser();
                const userModerated = data.title.includes(user);
                console.log(user);
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