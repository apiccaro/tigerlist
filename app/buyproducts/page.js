import Filter from "@/../Components/Filter";
import BuyProducts from "@/../Components/BuyProducts";
const readline = require('readline');


//api method that queries DB for all lisitngs 
const allPostsFromDB = async () => {
  try {
    //attempt to make fetch and turn response into usable data.
    const response = await fetch(process.env.NEXT_PUBLIC_API_CONNECTION_URL+"getAllListings",
    {
      method:"GET"
    })
    .catch(error => console.error('Error: fetch failed in Components/BuyProducts.js: ', error));
    const data = await response.json();

    //assuming no error, print a listing from the returned set
    console.log("One row from API data: ",data.rows[10]);
    return data.rows;
  } 
  catch (error) {
    console.error('Fetch failed in allPostsFromDB:', error)
    return null;
  } 
};

//Use allPostsFromDB(), and if successful, print sample listing
console.log("using allPostsFromDB() in main body")
let result1 = await allPostsFromDB();
console.log("finished allPostsFromDB() in main body")
if (result1 !== undefined || result1 !== null){
  console.log("sample listing: "+result1[15]);
}



export default async function Home() {

  //Use allPostsFromDB(), and if successful, print sample listing
    console.log("using allPostsFromDB() in Home()")
    let result2 = await allPostsFromDB();
    console.log("finished allPostsFromDB() in Home()")

    if (result2 !== undefined || result2 !== null){
      console.log("sample listing: "+result2[12]);
    }
    
    return (
        <div className="flex flex-row bg-yellow-600 min-h-screen">
            <Filter />
            <BuyProducts/>
        </div>
    );


}

