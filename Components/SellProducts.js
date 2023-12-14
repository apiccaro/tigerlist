// Grid configuration for the products on the "My listings" page.
'use client'

import styled from "styled-components";
import SellProductBox from "./SellProductBox";

var myListings = [{listingID: "123", title: "Hockey Ticket", price: "$5", description: "Ticket for Friday's game against North Dakota", category: "Service", condition: "New", location: "Off Campus", email: "student1@coloradocollege.edu", phone: "1234567890", images: ["/testimage3.jpeg", "/testimage4.jpeg"], flagged: false},
                    {listingID: "456", title: "Jacket", price: "$30", description: "Brown leather jacket. Good condition. Size medium.", category: "Clothing", condition: "Used-Good", location: "West Campus", email: "student2@coloradocollege.edu", phone: "2071233333", images: ["/testimage1.jpeg", "/testimage5.jpeg", "/testimage2.jpeg"], flagged: false},
                    {listingID: "789", title: "Carpool", price: "$15", description: "Driving to DIA Wednesday at 2:30pm.", category: "Carpool", condition: "New", location: "East Campus", email: "student3@coloradocollege.edu", phone: "5555552222", images: [""], flagged: true}]


// This youtube video provided grid formatting help https://www.youtube.com/watch?v=dTFXufTgfOE
const ProductsGridStyle={
    marginTop: '20px',
    marginLeft: '20px',
    marginRight: '20px',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 1fr',
    gap:'20px',
}

const getUserListings = async (email) => {
    const response = await fetch("http://localhost:3000/api/getUserListings",{
      method:"GET",
      });
    const data = await response.json(email);
    return data;
  };

export default function Products(){
    // var userListings=[]
    // const getOneUserListings=async()=>{
    //     const response = await getAllUserListings()
    //     userListings=response;
    // }
    return(
        <div style={ProductsGridStyle} className="flex flex-grow">
            {myListings.map((listing, index) => (
                <SellProductBox key={index} listingID={listing.listingID} title={listing.title} price={listing.price} description={listing.description} category={listing.category} condition={listing.condition} location={listing.location} email={listing.email} phone={listing.phone} images={listing.images} flagged={listing.flagged}/>
            ))}
        </div>
    );
}