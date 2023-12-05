// Configuration for all of the products that will appear on the browse page.
'use client'

import styled from "styled-components";
import Image from "next/image";
import Link from 'next/link';
import BuyProductBox from "./BuyProductBox";

// This will be the list to hold all of the product dictionaries
var allListings;

// This youtube video provided grid formatting help https://www.youtube.com/watch?v=dTFXufTgfOE
const ProductsGrid = styled.div`
    margin-top: 20px;
    margin-left: 20px;
    margin-right: 20px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 20px;
`;

export default function Products(){
    return(
        <ProductsGrid className="flex flex-grow">
            <BuyProductBox />
            <BuyProductBox />
            <BuyProductBox />
            <BuyProductBox />
            <BuyProductBox />
            <BuyProductBox />
            <BuyProductBox />
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