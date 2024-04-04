/**
 * Contains the layout for the edit link and the active/on hold button on the "My Listings" page.
 * @param {Object} props - The props containing listing information.
 * @param {string} props.listingID - The ID of the listing.
 * @param {string} props.title - The title of the listing.
 * @param {number} props.price - The price of the listing.
 * @param {string} props.description - The description of the listing.
 * @param {string} props.category - The category of the listing.
 * @param {string} props.condition - The condition of the listing.
 * @param {string} props.location - The location of the listing.
 * @param {string} props.email - The email of the lister.
 * @param {string} props.phone - The phone number of the lister.
 * @param {string[]} props.images - The images of the listing.
 * @param {boolean} props.active - The active status of the listing.
 * @param {boolean} props.flagged - The flagged status of the listing.
 * @param {boolean} props.banned - The banned status of the listing.
 * @returns {JSX.Element} The JSX element representing the layout for the edit link and the active/on hold button.
 */
 import React, { useState } from 'react';
 import EditLink from './EditLink';
 import Link from 'next/link';
 
 /**
  * Asynchronously updates the listing status on the server.
  * @param {Object} listingDict - The listing information to be updated.
  */
 const editListing = async (listingDict) => {
   const response = await fetch("http://localhost:3000/api/putListing",{
     method:"PUT",
     body : JSON.stringify({
     listing:(listingDict)
     })
     },
     );
   await response;
 };
 
 /**
  * Functional component for the active/inactive button on listings.
  * @param {Object} props - The props containing listing information.
  * @returns {JSX.Element} The JSX element representing the active/inactive button.
  */
 const ActiveInactive = ({listingID, title, price, description, category, condition, location, email, phone, images, active, flagged, banned}) => {
   // Used in button state to change button color and text
   const [isActive, setIsActive] = useState(true);
 
   /**
    * Toggles the active state of the button.
    */
   const toggleButtonText = () => {
     setIsActive(!isActive);
   };
 
   /**
    * Handles the click event of the button.
    * @param {Object} props - The props containing listing information.
    */
   const handleClick = ({listingID, title, price, description, category, condition, location, email, phone, images, active, flagged, banned}) => {
     active = !active;
     editListing({listingID, title, price, description, category, condition, location, email, phone, images, active, flagged, banned});
     toggleButtonText();
   }
 
 
   return (
     <div>
         <EditLink title={title} price={price} description={description} category={category} condition={condition} location={location} email={email} phone={phone} images={images} active={isActive} flagged={flagged} banned={banned}/>
         <button
         style={{ display: 'flex', width: '80px', height: '30px', fontWeight: '600', alignItems:'center', justifyContent: 'center', borderRadius: '10px', fontSize:"1.3rem", backgroundColor: isActive ? 'white' : 'black', color: isActive ? 'black' : 'white'}}
         onClick={() => handleClick({listingID, title, price, description, category, condition, location, email, phone, images, active, flagged, banned})}        >
         {isActive ? 'Active' : 'Hold'}
         </button>
     </div>
   );
 }
 
 export default ActiveInactive;
 