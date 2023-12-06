import React, { useState } from 'react';
import LinkBackground from './LinkBackground';

export default function ActiveInactive() {
  const [isActive, setIsActive] = useState(true);

  const toggleButtonText = () => {
    setIsActive(!isActive);
  };

  return (
    <div>
        <LinkBackground />
        <button
        style={{ width: '80px', height: '30px', fontSize:'20px', alignItems: 'center', backgroundColor: isActive ? 'white' : 'black', color: isActive ? 'black' : 'white',}}
        onClick={toggleButtonText}
        >
        {isActive ? 'Active' : 'On Hold'}
        </button>
    </div>
  );
}
