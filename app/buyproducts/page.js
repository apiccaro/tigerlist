import Filter from "@/../Components/Filter";
import BuyProducts from "@/../Components/BuyProducts";
const readline = require('readline');



const tryDB2 = async () => {
    console.log ("Called tryDB2")
  
    const response = await fetch(process.env.NEXT_PUBLIC_API_CONNECTION_URL+"apiTest",
    {
      method:"GET",
    })
    .catch(error => console.error('Error: fetch failed in Components/BuyProducts.js: ', error));
  
    //const data = await response.json();
    //return data;
    console.log ("Finished tryDB2")
  };

  const allPostsFromDB = async () => {
    const response = await fetch(process.env.NEXT_PUBLIC_API_CONNECTION_URL+"getAllListings",{
      })
    .then(
        response => response.json()
        )
    .catch(error => console.error('Fetch failed in allPostsFromDB:', error));
    

    const data = response;
    
    console.log("One row from API data: ",data.rows[10]);

    return data.rows;

};


console.log("using allPostsFromDB() in main body")
let result1 = allPostsFromDB();
console.log("sample listing: "+result1[15])
console.log("finished allPostsFromDB() in main body")



export default function Home() {


    console.log("using allPostsFromDB() in Home()")
    let result2 = allPostsFromDB();
    console.log("sample listing: "+result2[7])
    console.log("finished allPostsFromDB() in Home()")



    return (
        <div className="flex flex-row bg-yellow-600 min-h-screen">
            <Filter />
            <BuyProducts/>
        </div>
    );


}

