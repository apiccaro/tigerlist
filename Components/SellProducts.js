/**
 * Grid configuration for the products on the "My listings" page.
 * @returns {JSX.Element} The JSX element representing the grid configuration for the products.
 */
 'use client'

import styled from "styled-components";
import SellProductBox from "./SellProductBox";


 /**
  * Function to get user listings from the API.
  * @param {string} email - The email of the user.
  * @returns {Promise<Array>} A promise that resolves to an array of user listings.
  */const getUserListings = async (userEmail) => {

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

//Current hardcoded listing dictionaries so page can render properly even if API is down
//Should be obvious enough to a user that its not legit
var myListings = [{post_key: "123", title: "If youre seeing these, the api failed", price: "$5", description: "Ticket for Friday's game against North Dakota", category: "Service", condition: "New", location: "Off Campus", email: "student1@coloradocollege.edu", phone: "1234567890", images: ["/testimage3.jpeg", "/testimage4.jpeg"], flagged: false},
                  {post_key: "456", title: "Sample Listing", price: "$30", description: "Brown leather jacket. Good condition. Size medium.", category: "Clothing", condition: "Used-Good", location: "West Campus", email: "student2@coloradocollege.edu", phone: "2071233333", images: ["/testimage1.jpeg", "/testimage5.jpeg", "/testimage2.jpeg"], flagged: false},
                  {post_key: "789", title: "Sample Listing", price: "$15", description: "Driving to DIA Wednesday at 2:30pm.", category: "Carpool", condition: "New", location: "East Campus", email: "student3@coloradocollege.edu", phone: "5555552222", images: [""], flagged: true}]

// Export function that queries user listings based on a hardcoded email, presenting recieved content in a grid                   
export default async function Products(){

  var userEmail = "j_moran@coloradocollege.edu"
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
                <SellProductBox key={index} post_key={listing.post_key} title={listing.title} price={listing.price} description={listing.description} category={listing.category} condition={listing.condition} location={listing.location} email={listing.email} phone={listing.phonevalue} images={listing.images} flagged={listing.flagged} active={listing.active} banned={false}/>
            ))}
            </ProductsGrid>
        </div>
    );
}
