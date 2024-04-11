/**
 * Configuration for all of the products that will appear on the browse page.
 * @returns {JSX.Element} The JSX element representing the product grid.
 */
// Configuration for all of the products that will appear on the browse page.
'use client'

import styled from "styled-components";
import Image from "next/image";
import Link from 'next/link';
import BuyProductBox from "./BuyProductBox";
import React from "react";

//Fetch all new database posts, sorts by newest by default
const getNew = async (listingDict) => {
  console.log("Calling getNew in BuyProducts.js")
  var data;
  const response = await fetch(process.env.NEXT_PUBLIC_API_CONNECTION_URL+"getAllListings",{
    method:"GET",
    body : JSON.stringify(
      listingDict
    )
  },)
  data = await response.json();
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

//Current hardcoded listing dictionaries so page can render properly even if API is down
//Should be obvious enough to a user that its not legit
var allListings = [{post_key: "123", title: "If youre seeing these, the api failed", price: "$5", description: "Ticket for Friday's game against North Dakota", category: "Service", condition: "New", location: "Off Campus", email: "student1@coloradocollege.edu", phone: "1234567890", images: ["/testimage3.jpeg", "/testimage4.jpeg"], flagged: false},
                    {post_key: "456", title: "Sample Listing", price: "$30", description: "Brown leather jacket. Good condition. Size medium.", category: "Clothing", condition: "Used-Good", location: "West Campus", email: "student2@coloradocollege.edu", phone: "2071233333", images: ["/testimage1.jpeg", "/testimage5.jpeg", "/testimage2.jpeg"], flagged: false},
                    {post_key: "789", title: "Sample Listing", price: "$15", description: "Driving to DIA Wednesday at 2:30pm.", category: "Carpool", condition: "New", location: "East Campus", email: "student3@coloradocollege.edu", phone: "5555552222", images: [""], flagged: true}]

const ProductsGridStyle={
    marginTop: '20px',
    marginLeft: '20px',
    marginRight: '20px',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 1fr',
    gap:'20px',
}

/**
 * Functional component for displaying a grid of buy products.
 * @returns {JSX.Element} The JSX element representing the product grid.
 */
export default async function BuyProducts(){

  // console.log("Trying getCasEmail")
  // const casResult = getCasEmail();
  // console.log("Did it work?",casResult) //it did not. Doesnt seem like cas doesn't wanna be used by api methods.

  const apiListings = await getNew();
  if (apiListings!==undefined){
    allListings = apiListings
  }
  
    return(
        <div style={ProductsGridStyle} className="flex flex-grow">
          {allListings.map((listing, index) => (
                <BuyProductBox key={index} post_key={listing.post_key} title={listing.title} price={listing.price} description={listing.description} category={listing.category} condition={listing.condition} location={listing.location} email={listing.email} phone={listing.phonevalue} images={listing.images} flagged={listing.flagged} active={listing.active}/>
            ))}
        </div>
    );
}