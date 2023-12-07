// Contains the layout for the edit link and the active/on hold button on the "My Listings" page
import React, { useState } from 'react';
import EditLink from './EditLink';
import Link from 'next/link';

const ActiveInactive = ({ title, price, description, category, condition, location, email, phone, images}) => {
  // Used in button state to change button color and text
  const [isActive, setIsActive] = useState(true);

  const toggleButtonText = () => {
    setIsActive(!isActive);
  };

  return (
    <div>
        <EditLink title={title} price={price} description={description} category={category} condition={condition} location={location} email={email} phone={phone} images={images}/>
        <button
        style={{ width: '80px', height: '30px', justifyContent: 'center', alignItems: 'center', borderRadius: '10px', backgroundColor: isActive ? 'white' : 'black', color: isActive ? 'black' : 'white'}}
        onClick={toggleButtonText} className="flex font-bold text-xl"
        >
        {isActive ? 'Active' : 'Hold'}
        </button>
    </div>
  );
}

export default ActiveInactive;