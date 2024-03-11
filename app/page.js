import Filter from "@/Components/Filter";
import BuyProducts from "@/Components/BuyProducts";
const readline = require('readline');

// const tryDB2 = async () => {
//     console.log ("Called tryDB2")
  
//     const response = await fetch(process.env.NEXT_PUBLIC_API_CONNECTION_URL+"apiTest",
//     {
//       method:"GET",
//     })
//     .catch(error => console.error('Error: fetch failed in Components/BuyProducts.js: ', error));
  
//     //const data = await response.json();
//     //return data;
//     console.log ("Finished tryDB2")
//   };

// console.log("using tryDB2 before main function in page.js")
// tryDB2();

export default function Home() {

    return (
        <div className="flex flex-row bg-yellow-600 min-h-screen">
            <Filter />
            <BuyProducts/>
        </div>
    );


}

