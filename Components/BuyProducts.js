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

  
  const response = await fetch(process.env.NEXT_PUBLIC_API_CONNECTION_URL+"getAllListings",{
    method:"GET",
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

const getCasEmail = async () => {
  console.log("Calling getCasEmail in BuyProducts.js")
  var data;

  const response = await fetch(process.env.NEXT_PUBLIC_API_CONNECTION_URL+"getUserEmail",{
    method:"GET"
  },)
  data = await response.json();

return data
};

//Current hardcoded listing dictionaries. Replacing with queried data once api methods work
var allListings = [{listingID: "123", title: "Proof of concept", price: "$5", description: "Ticket for Friday's game against North Dakota", category: "Service", condition: "New", location: "Off Campus", email: "student1@coloradocollege.edu", phone: "1234567890", images: ["/testimage3.jpeg", "/testimage4.jpeg"], flagged: false},
                    {listingID: "456", title: "Jacket", price: "$30", description: "Brown leather jacket. Good condition. Size medium.", category: "Clothing", condition: "Used-Good", location: "West Campus", email: "student2@coloradocollege.edu", phone: "2071233333", images: ["/testimage1.jpeg", "/testimage5.jpeg", "/testimage2.jpeg"], flagged: false},
                    {listingID: "789", title: "Carpool", price: "$15", description: "Driving to DIA Wednesday at 2:30pm.", category: "Carpool", condition: "New", location: "East Campus", email: "student3@coloradocollege.edu", phone: "5555552222", images: [""], flagged: true}]

const ProductsGridStyle={
    marginTop: '20px',
    marginLeft: '20px',
    marginRight: '20px',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 1fr',
    gap:'20px',
}


export default async function BuyProducts(){

  // console.log("Trying getCasEmail")
  // const casResult = getCasEmail();
  // console.log("Did it work?",casResult) //it did not

  const apiListings = await getNew();
  if (apiListings!==undefined){
    allListings = apiListings
  }

  
    return(
        <div style={ProductsGridStyle} className="flex flex-grow">
          {allListings.map((listing, index) => (

                <BuyProductBox key={index} listingID={listing.post_key} title={listing.title} price={listing.price} description={listing.description} category={listing.category} condition={listing.condition} location={listing.location} email={listing.email} phone={listing.phonevalue} images={listing.images} flagged={listing.flagged}/>
            ))}
        </div>
    );
}

