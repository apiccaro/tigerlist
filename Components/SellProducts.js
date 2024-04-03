// Grid configuration for the products on the "My listings" page.
'use client'

import styled from "styled-components";
import SellProductBox from "./SellProductBox";


//Uses api/getUserListings to return a an array of listings posted by a given user
const getUserListings = async (userEmail) => {

  const response = await fetch(process.env.NEXT_PUBLIC_API_CONNECTION_URL+"getUserListings",{
    method:"POST",
    body: JSON.stringify({
      email: userEmail
    })
    });
  const data = await response.json();
  return data;
};

// This youtube video provided grid formatting help https://www.youtube.com/watch?v=dTFXufTgfOE
const ProductsGrid = styled.div`
    margin-top: 20px;
    margin-left: 20px;
    margin-right: 20px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 20px;
`;

// Hardcoded listings. Replaced upon successful database query.
var myListings = [{listingID: "123", title: "Hockey Ticket", price: "$5", description: "Ticket for Friday's game against North Dakota", category: "Service", condition: "New", location: "Off Campus", email: "student1@coloradocollege.edu", phone: "1234567890", images: ["/testimage3.jpeg", "/testimage4.jpeg"], flagged: false},
                    {listingID: "456", title: "Jacket", price: "$30", description: "Brown leather jacket. Good condition. Size medium.", category: "Clothing", condition: "Used-Good", location: "West Campus", email: "student2@coloradocollege.edu", phone: "2071233333", images: ["/testimage1.jpeg", "/testimage5.jpeg", "/testimage2.jpeg"], flagged: false},
                    {listingID: "789", title: "Carpool", price: "$15", description: "Driving to DIA Wednesday at 2:30pm.", category: "Carpool", condition: "New", location: "East Campus", email: "student3@coloradocollege.edu", phone: "5555552222", images: [""], flagged: true}]


// Export function that queries user listings based on a hardcoded email, presenting recieved content in a grid                   
export default async function SellProducts(){

  var userEmail = "l_flanagan@coloradocollege.edu"
  const apiListings = await getUserListings(userEmail);

  if (apiListings!==undefined){
    myListings = apiListings.sort(function(x, y){
        return x.post_timestamp - y.post_timestamp;
    })

  }

    return(
        <div className="flex flex-col gap-1 text-4xl font-semibold">
            <ProductsGrid className="flex flex-grow">
            {myListings.map((listing, index) => (
                <SellProductBox key={index} listingID={listing.listingID} title={listing.title} price={listing.price} description={listing.description} category={listing.category} condition={listing.condition} location={listing.location} email={listing.email} phone={listing.phone} images={listing.images} flagged={listing.flagged}/>
            ))}
            </ProductsGrid>
        </div>
    );
}