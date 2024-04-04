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

var allListings = [{listingID: "123", title: "Hockey Ticket", price: "$5", description: "Ticket for Friday's game against North Dakota", category: "Service", condition: "New", location: "Off Campus", email: "student1@coloradocollege.edu", phone: "1234567890", images: ["/testimage3.jpeg", "/testimage4.jpeg"], active: true, flagged: false, banned: false},
                    {listingID: "456", title: "Jacket", price: "$30", description: "Brown leather jacket. Good condition. Size medium.", category: "Clothing", condition: "Used-Good", location: "West Campus", email: "student2@coloradocollege.edu", phone: "2071233333", images: ["/testimage1.jpeg", "/testimage5.jpeg", "/testimage2.jpeg"], active: true, flagged: false, banned: false},
                    {listingID: "789", title: "Carpool", price: "$15", description: "Driving to DIA Wednesday at 2:30pm.", category: "Carpool", condition: "New", location: "East Campus", email: "student3@coloradocollege.edu", phone: "5555552222", images: [""], active: true, flagged: false, banned: false}]

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
const BuyProducts = () => {
    const [allListings, setAllListings] = React.useState([]);
      
    React.useEffect(() => {
        const fetchData = async () => {
        try {
            const data = await getAllListings();
            setAllListings(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
        };
    
        fetchData();
    }, []);


    return(
        <div style={ProductsGridStyle} className="flex flex-grow">
            {/* {Array.isArray(allListings) && allListings.map((listing, index) => ( */}
            {(Array.from(allListings)).map((listing, index) => (
                <BuyProductBox 
                key={index} 
                listingID={listing.listingID} 
                title={listing.title} 
                price={listing.price} 
                description={listing.description} 
                category={listing.category} 
                condition={listing.condition} 
                location={listing.location} 
                email={listing.email} 
                phone={listing.phone} 
                images={listing.images}
                active={listing.active} 
                flagged={listing.flagged} 
                banned={listing.banned}/>
            ))}
        </div>
    );
}

export default BuyProducts;
