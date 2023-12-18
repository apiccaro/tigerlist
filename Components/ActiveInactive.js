// Contains the layout for the edit link and the active/on hold button on the "My Listings" page
import React, { useState } from 'react';
import EditLink from './EditLink';
import Link from 'next/link';

const editListing = async (listingDict) => {
  const response = await fetch(process.env.NEXT_PUBLIC_API_CONNECTION_URL+"putListing",{
    method:"PUT",
    body : JSON.stringify({
    listing:(listingDict)
    })
    },
    );
  await response;
};

const ActiveInactive = ({listingID, title, price, description, category, condition, location, email, phone, images, active, flagged, banned}) => {
  // Used in button state to change button color and text
  const [isActive, setIsActive] = useState(true);

  const toggleButtonText = () => {
    setIsActive(!isActive);
  };

  const handleClick = ({listingID, title, price, description, category, condition, location, email, phone, images, active, flagged, banned}) => {
    active = !active;
    editListing({listingID, title, price, description, category, condition, location, email, phone, images, active, flagged, banned});
    toggleButtonText();
  }


  return (
    <div>
        <EditLink title={title} price={price} description={description} category={category} condition={condition} location={location} email={email} phone={phone} images={images} active={isActive} flagged={flagged} banned={isBanned}/>
        <button
        style={{ display: 'flex', width: '80px', height: '30px', fontWeight: '600', alignItems:'center', justifyContent: 'center', borderRadius: '10px', fontSize:"1.3rem", backgroundColor: isActive ? 'white' : 'black', color: isActive ? 'black' : 'white'}}
        onClick={() => handleClick({listingID, title, price, description, category, condition, location, email, phone, images, active, flagged, banned})}        >
        {isActive ? 'Active' : 'Hold'}
        </button>
    </div>
  );
}

export default ActiveInactive;