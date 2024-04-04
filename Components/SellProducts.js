/**
 * Grid configuration for the products on the "My listings" page.
 * @returns {JSX.Element} The JSX element representing the grid configuration for the products.
 */
 'use client'

 import styled from "styled-components";
 import SellProductBox from "./SellProductBox";
 import React from "react";
 
 // var myListings = [{listingID: "123", title: "Hockey Ticket", price: "$5", description: "Ticket for Friday's game against North Dakota", category: "Service", condition: "New", location: "Off Campus", email: "student1@coloradocollege.edu", phone: "1234567890", images: ["/testimage3.jpeg", "/testimage4.jpeg"], active: true, flagged: false, banned: false},
 //                     {listingID: "456", title: "Jacket", price: "$30", description: "Brown leather jacket. Good condition. Size medium.", category: "Clothing", condition: "Used-Good", location: "West Campus", email: "student2@coloradocollege.edu", phone: "2071233333", images: ["/testimage1.jpeg", "/testimage5.jpeg", "/testimage2.jpeg"], active: true, flagged: false, banned: false},
 //                     {listingID: "789", title: "Carpool", price: "$15", description: "Driving to DIA Wednesday at 2:30pm.", category: "Carpool", condition: "New", location: "East Campus", email: "student3@coloradocollege.edu", phone: "5555552222", images: [""], active: true, flagged: true, banned: false}]
 
 
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
  * Function to get user listings from the API.
  * @param {string} email - The email of the user.
  * @returns {Promise<Array>} A promise that resolves to an array of user listings.
  */
 const getUserListings = async (email) => {
     const response = await fetch("http://localhost:3000/api/getUserListings",{
       method:"GET",
       });
     const data = await response.json(email);
     return data;
   };
 
 const SellProducts = () => {
     const [userListings, setAllListings] = React.useState([]);
       
     React.useEffect(() => {
         const fetchData = async () => {
         try {
             const data = await getUserListings();
             setAllListings(data);
         } catch (error) {
             console.error('Error fetching data:', error);
         }
         };
     
         fetchData();
     }, []);
 
     return(
         <div style={ProductsGridStyle} className="flex flex-grow">
             {(Array.from(userListings)).map((listing, index) => (
                 <SellProductBox key={index} 
                 listingID={listing.listingID} 
                 title={listing.title} price={listing.price} 
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
 
 export default SellProducts;
 