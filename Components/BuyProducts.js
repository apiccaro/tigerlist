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
var allListings = [{title: "Hockey Ticket", price: "$5"},
                    {title: "Jacket", price: "$30"},
                    {title: "Carpool", price: "$15"}]

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
        <ProductsGrid className="flex flex-grow">
            {allListings.map((listing, index) => (
                <BuyProductBox key={index} title={listing.title} price={listing.price} />
            ))}
        </ProductsGrid>
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