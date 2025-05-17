/**
 * Represents the grid configuration for the products on the "My Listings" page.
 * @returns {JSX.Element} The JSX element representing the grid configuration for the products.
 */
// Grid configuration for the products on the "My listings" page.
'use client'

import { list } from "postcss";
import styled from "styled-components";
import ModeratePostsBox from "./ModeratePostsBox";
import React from "react";

var myListings = [{post_key: "123", title: "Hockey Ticket", price: "$5", description: "Ticket for Friday's game against North Dakota", category: "Service", condition: "New", location: "Off Campus", email: "student1@coloradocollege.edu", phone: "1234567890", images: ["/testimage3.jpeg", "/testimage4.jpeg"], flagged: false},
                    {post_key: "456", title: "Jacket", price: "$30", description: "Brown leather jacket. Good condition. Size medium.", category: "Clothing", condition: "Used-Good", location: "West Campus", email: "student2@coloradocollege.edu", phone: "2071233333", images: ["/testimage1.jpeg", "/testimage5.jpeg", "/testimage2.jpeg"], flagged: false},
                    {post_key: "789", title: "Carpool", price: "$15", description: "Driving to DIA Wednesday at 2:30pm.", category: "Carpool", condition: "New", location: "East Campus", email: "student3@coloradocollege.edu", phone: "5555552222", images: [""], flagged: true}]


// This youtube video provided grid formatting help https://www.youtube.com/watch?v=dTFXufTgfOE
const ProductsGridStyle={
    marginTop: '20px',
    marginLeft: '20px',
    marginRight: '20px',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 1fr',
    gap:'20px',
}

/**
 * Fetches all flagged listings.
 * @returns {Promise} A promise containing the fetched data.
 */
const getAllFlaggedListings = async () => {
    const response = await fetch("http://localhost:3000/api/getAllListings",{
      method:"GET",
      });
    const data = await response.json();
    return data;
};

/**
 * Component for displaying all flagged listings.
 * @returns {JSX.Element} The JSX element representing the component.
 */
const ModeratePosts = () => {
    const [allFlaggedListings, setAllListings] = React.useState([]);
      
    React.useEffect(() => {
        const fetchData = async () => {
        try {
            const data = await getAllFlaggedListings();
            setAllListings(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
        };
    
        fetchData();
    }, []);

    return(
            <div style={ProductsGridStyle} className="flex flex-grow">
                {allFlaggedListings.map((listing, index) => (
                    <ModeratePostsBox key={index} listingID={listing.post_key} title={listing.title} price={listing.price} description={listing.description} category={listing.category} condition={listing.condition} location={listing.location} email={listing.email} phone={listing.phonevalue} images={listing.images} active={listing.active} flagged={listing.flagged} banned={listing.banned}/>
                ))}
            </div>
    );


    //Jack's version, I replaced bad names but havent tested to see if its compatible
    // return(
    //     <div className="flex flex-col gap-1 text-xl font-semibold">
    //         <ProductsGrid className="flex flex-grow">
    //         {myListings.map((listing, index) => (
    //             <ModeratePostsBox key={index} post_key={listing.post_key} title={listing.title} price={listing.price} description={listing.description} category={listing.category} condition={listing.condition} location={listing.location} email={listing.email} phone={listing.phonevalue} images={listing.images} active={listing.active} flagged={listing.flagged} banned={listing.banned}/>
    //         ))}
    //         </ProductsGrid>
    //     </div>
    // );
}

export default ModeratePosts;
