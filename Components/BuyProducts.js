// Configuration for all of the products that will appear on the browse page.
'use client'

import styled from "styled-components";
import Image from "next/image";
import Link from 'next/link';
import BuyProductBox from "./BuyProductBox";
//import { getAllPosts } from "@/azure2/read";

// This will be the list to hold all of the product dictionaries
//var allListings = getAllPosts();
//console.log(allListings)

var allListings = [{title: "Hockey Ticket", price: "$5", description: "Ticket for Friday's game against North Dakota", category: "Service", condition: "New", location: "Off Campus", email: "student1@coloradocollege.edu", phone: "1234567890", images: ["/testimage3.jpeg", "/testimage4.jpeg"]},
                    {title: "Jacket", price: "$30", description: "Brown leather jacket. Good condition. Size medium.", category: "Clothing", condition: "Used-Good", location: "West Campus", email: "student2@coloradocollege.edu", phone: "2071233333", images: ["/testimage1.jpeg", "/testimage5.jpeg", "/testimage2.jpeg"]},
                    {title: "Carpool", price: "$15", description: "Driving to DIA Wednesday at 2:30pm.", category: "Carpool", condition: "New", location: "East Campus", email: "student3@coloradocollege.edu", phone: "5555552222", images: [""]}]

const ProductsGridStyle={
    marginTop: '20px',
    marginLeft: '20px',
    marginRight: '20px',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 1fr',
    gap:'20px',
}

export default function BuyProducts(){
    return(
        <div style={ProductsGridStyle} className="flex flex-grow">
            {allListings.map((listing, index) => (
                <BuyProductBox key={index} title={listing.title} price={listing.price} description={listing.description} category={listing.category} condition={listing.condition} location={listing.location} email={listing.email} phone={listing.phone} images={listing.images}/>
            ))}
        </div>
    );
}

// export default function DisplayProducts(){
//     return(
//         // Some function call to populate the allListings list.
//         // allListings = database.getAllPosts();

//         // For all of the dictionaries in the list call the BuyProductBox function with dictionaryt values as parameters
//         // <ProductsGrid className="flex flex-grow">
//         //     for (listing in allListings) {
//         //         <BuyProductBox(listing.title, listing.price, listing.description, listing.category, listing.condition, listing.location, listing.email, listing.phone, listing.image) />;
//         //     }
//         // </ProductsGrid>
//     );
// }