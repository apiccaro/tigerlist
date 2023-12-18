'use client'
// Design for the "My Listings" page of the website
import SellProducts from "@/Components/SellProducts";
import Link from "next/link";
import {useState,useEffect} from 'react'; 
import Loading from "@/app/mylistings/loading";
const getUser= async()=>{

  const response = await fetch(process.env.API_CONNECTION_URL+"getUser", {
      method:"GET",
      });
    const data = await response.json();
    console.log(data)
    return data;
}



const getAllModeratedUsers = async () => {

    const response = await fetch(process.env.API_CONNECTION_URL+"getAllModeratedUsers",{
      method:"GET",
      });
    const data = await response.json();
    console.log(data)
    return data;
  };

export default function Home() {
    const [moderatedUsers, setModeratedUsers] = useState();
    const [isModerated,setIsModerated]=useState();
    (() => {
      
        const fetchData = async () => {
          
          try {
            const data = await getAllModeratedUsers();
            setModeratedUsers(data.title);
            const user=await getUser();
            const userModerated = data.title.includes(user);
            console.log(user);
            setIsModerated(userModerated);
          } catch (error) {
            console.log(error)
          }
          debugger;
          
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
        <main style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor:'#D09B2C',
            color: '#D09B2C',
            height: '100%',
            width: '100%',
          }}>
            <div style={RowStyle}>
                <div className="text-4xl text-black font-semibold p-5">My Listings</div><br></br>
                {isModerated && (
                    <Link href={'/flaggedposts'} className="text-4xl text-black font-semibold p-5">Flagged Posts</Link>
                )}
            </div>
            <SellProducts />
        </main>
    );
}