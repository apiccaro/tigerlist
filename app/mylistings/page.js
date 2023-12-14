import SellProducts from "@/Components/SellProducts";
<<<<<<< HEAD
=======
import Link from "next/link";
import {useState,useEffect} from 'react'; 
import Loading from "@/app/mylistings/loading";
const getUser= async()=>{

  const response = await fetch(process.env.NEXT_PUBLIC_API_CONNECTION_URL+"getUser", {
      method:"GET",
      });
    const data = await response.json();
    console.log(data)
    return data;
}



const getAllModeratedUsers = async () => {

    const response = await fetch(process.env.NEXT_PUBLIC_API_CONNECTION_URL+"getAllModeratedUsers",{
      method:"GET",
      });
    const data = await response.json();
    console.log(data)
    return data;
  };
>>>>>>> 4b9d3364e39965bdb019021541f97b94d59b296d

export default function Home() {
    return (
        <div className="flex flex-col bg-yellow-600 min-h-screen">
            <div className="text-4xl text-black font-semibold p-5">My Listings</div><br></br>
            <SellProducts />
        </div>
        );
}