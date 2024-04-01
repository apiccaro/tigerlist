import Filter from "@/Components/Filter";
import BuyProducts from "@/Components/BuyProducts";
const readline = require('readline');


const getNew = async (listingDict) => {
    console.log("Calling getNew in viewall/page.js")
    const response = await fetch(process.env.NEXT_PUBLIC_API_CONNECTION_URL+"getNewListings",{
      method:"POST",
      body : JSON.stringify(
        listingDict
      )
    },)
  
    const data = await response.json();
    console.log(data);
    return data
  };
getNew();
export default function Home() {

    return (
        <div className="flex flex-row bg-yellow-600 min-h-screen">
            <Filter />
            <BuyProducts/>
        </div>
    );


}

