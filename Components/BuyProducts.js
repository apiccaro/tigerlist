// Configuration for all of the products that will appear on the browse page.
'use client'

import styled from "styled-components";
import Image from "next/image";
import Link from 'next/link';
import BuyProductBox from "./BuyProductBox";

//Eventually replace with non test api method
const getNew = async (listingDict) => {
  console.log("Calling getNew in BuyProducts.js")
  var data;
  // try{

  
  const response = await fetch(process.env.NEXT_PUBLIC_API_CONNECTION_URL+"getNewListings",{
    method:"POST",
    body : JSON.stringify(
      listingDict
    )
  },)
  data = await response.json();
// } 
// catch (error){
//   console.log("Caught Error: ",error)
//   console.log("This ECONNREFUSED nonsense is annoying")
// }

return data
};




//test, shouldnt be relevant anymore
// const tryMakeListing = async (listingDict) => {
//   const response = await fetch(process.env.NEXT_PUBLIC_API_CONNECTION_URL+"putListing",{
//     method:"PUT",
//       body : JSON.stringify(
//         listingDict
//       )
//     },
//   )

//   const data=await response.json();
//   console.log(data);
//   return data
// };

// //test, shouldnt be relevant anymore
// const tryDB2 = async () => {
//   console.log ("Called tryDB2")

//   const response = await fetch(process.env.NEXT_PUBLIC_API_CONNECTION_URL+"apiTest",{
//     method:"GET",
//   }).catch(error => console.error('Error: fetch failed in Components/BuyProducts.js: ', error));

//   console.log ("Finished tryDB2")
// };


// const allPostsFromDB = async () => {
//     const response = await fetch(process.env.NEXT_PUBLIC_API_CONNECTION_URL+"getAllListings",{//original line, replace below once things are working
//       method:"GET",
//       })
//     .then(
//         response => response.json()
//         )
//     .catch(error => console.error('Fetch failed in allPostsFromDB:', error));
    

//     const data = response;
    
//     //console.log("Data from API: ",data);

//     return data.rows;

// };


var newDBlistings = [];

// (async () => {
//   console.log("Starting IIFE in BuyProducts.js")

//   console.log("Testing tryDB2")
//   await tryDB2()

//   console.log("Testing allPostsFromDB()")
//   let dbcontent = await allPostsFromDB()
//   if (dbcontent !== undefined){
//     newDBlistings = dbcontent
//   }

//   console.log("Finishing IIFE in BuyProducts.js")
// })();


//Current hardcoded listing dictionaries. Replacing with queried data once api methods work
var allListings = [{listingID: "123", title: "Proof of concept", price: "$5", description: "Ticket for Friday's game against North Dakota", category: "Service", condition: "New", location: "Off Campus", email: "student1@coloradocollege.edu", phone: "1234567890", images: ["/testimage3.jpeg", "/testimage4.jpeg"], flagged: false},
                    {listingID: "456", title: "Jacket", price: "$30", description: "Brown leather jacket. Good condition. Size medium.", category: "Clothing", condition: "Used-Good", location: "West Campus", email: "student2@coloradocollege.edu", phone: "2071233333", images: ["/testimage1.jpeg", "/testimage5.jpeg", "/testimage2.jpeg"], flagged: false},
                    {listingID: "789", title: "Carpool", price: "$15", description: "Driving to DIA Wednesday at 2:30pm.", category: "Carpool", condition: "New", location: "East Campus", email: "student3@coloradocollege.edu", phone: "5555552222", images: [""], flagged: true}]

//Try getting new listings from API
//newDBlistings = await getNew()

// if (newDBlistings.length > 0){
//   console.log("For now, we're not displaying all content, but here's the first listing:")
//   allListings = newDBlistings;
//   console.log(newDBlistings[0])
// }
// else {
//   console.log("newDBlistings.length = 0, nothing to add to listings array:")
// }

const ProductsGridStyle={
    marginTop: '20px',
    marginLeft: '20px',
    marginRight: '20px',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 1fr',
    gap:'20px',
}
// const newPosts = async () =>{
//   content = await getNew();
//   return content
// }
export default async function BuyProducts(){
  const apiListings = await getNew();
  if (apiListings!==undefined){
    allListings = apiListings
  }
    return(
        <div style={ProductsGridStyle} className="flex flex-grow">
          {allListings.map((listing, index) => (

                <BuyProductBox key={index} listingID={listing.listingID} title={listing.title} price={listing.price} description={listing.description} category={listing.category} condition={listing.condition} location={listing.location} email={listing.email} phone={listing.phone} images={listing.images} flagged={listing.flagged}/>
            ))}
        </div>
    );
}



  


// //reference copy 
// const getAllListings = async () => {
//     const response = await fetch("http://localhost:3000/api/getAllListings",{
//       method:"GET",
//       });
//     const data = await response.json();
//     return data;
//   };

// const tryDB = async () => {
    
//     const response = await fetch(process.env.NEXT_PUBLIC_API_CONNECTION_URL+"apiTest",
//     {
//     method:"GET",
//     })
//   .then(
//       response => response.json()
//       )
//   .catch(error => console.error('Error: fetch failed in Components/BuyProducts.js: ', error));
  
//   console.log ("If nothing bad happened yet thats a win")


//   //const data = response;
//   //console.log("Data from API: ",data);


// };

//demoDict = {listingID: "789", title: "Carpool", price: "$15", description: "Driving to DIA Wednesday at 2:30pm.", category: "Carpool", condition: "New", location: "East Campus", email: "student3@coloradocollege.edu", phone: "5555552222", images: [""], flagged: true}
//tryMakeListing(demoDict)



// const allPostsFromDB_subbedout = async (listingDict) => {
//     const response = await fetch(process.env.NEXT_PUBLIC_API_CONNECTION_URL+"getAllListings",
//     {
//       method:"GET",
//       body : JSON.stringify()
//       },
//     )  
//     .then(
//         response => response.json()
//         )
//     .catch(error => console.error('Fetch failed:', error));

//     const data = response;
    
//     console.log("Data from API: ",data);

//     return data;

//   };





