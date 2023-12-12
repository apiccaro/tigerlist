// Grid configuration for the products on the "My listings" page.
'use client'

import styled from "styled-components";
import ModeratePostsBox from "./ModeratePostsBox";

var myListings = [{title: "Hockey Ticket", price: "$5", description: "Ticket for Friday's game against North Dakota", category: "Service", condition: "New", location: "Off Campus", email: "student1@coloradocollege.edu", phone: "1234567890", images: ["/testimage3.jpeg", "/testimage4.jpeg"]},
                    {title: "Jacket", price: "$30", description: "Brown leather jacket. Good condition. Size medium.", category: "Clothing", condition: "Used-Good", location: "West Campus", email: "student2@coloradocollege.edu", phone: "2071233333", images: ["/testimage1.jpeg", "/testimage5.jpeg", "/testimage2.jpeg"]},
                    {title: "Carpool", price: "$15", description: "Driving to DIA Wednesday at 2:30pm.", category: "Carpool", condition: "New", location: "East Campus", email: "student3@coloradocollege.edu", phone: "5555552222", images: [""]}]


// This youtube video provided grid formatting help https://www.youtube.com/watch?v=dTFXufTgfOE
const ProductsGrid = styled.div`
    margin-top: 20px;
    margin-left: 20px;
    margin-right: 20px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 20px;
`;

export default function ModeratePosts(){
    return(
        <div className="flex flex-col gap-1 text-xl font-semibold">
            <ProductsGrid className="flex flex-grow">
            {myListings.map((listing, index) => (
                <ModeratePostsBox key={index} title={listing.title} price={listing.price} description={listing.description} category={listing.category} condition={listing.condition} location={listing.location} email={listing.email} phone={listing.phone} images={listing.images}/>
            ))}
            </ProductsGrid>
        </div>
    );
}