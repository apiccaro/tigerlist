// Configuration for all of the products that will appear on the browse page.
'use client'

import styled from "styled-components";
import Image from "next/image";
import Link from 'next/link';
import BuyProductBox from "./BuyProductBox";

const getUserListings = async (userEmail) => {

  const response = await fetch(process.env.NEXT_PUBLIC_API_CONNECTION_URL+"getUserListings",{
    method:"POST",
    body: JSON.stringify({
      email: userEmail,
    })
  });
  const data = await response.json();
  return data;
};


//Current hardcoded listing placeholder objects. Replaced with DB content upon successfull api call.
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


export default async function BuyJayProducts(){

    var testEmail = "j_moran@coloradocollege.edu"
    const apiListings = await getUserListings(testEmail);
    
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



  



