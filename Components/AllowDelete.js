import { Handjet } from 'next/font/google';
import { useRouter } from 'next/navigation';
import React from 'react';
import { useForm } from "react-hook-form";

const RowStyle={
    display: 'flex', 
    flexDirection: 'row',
    alignItems: 'center',
    gap: '8px',
    }

const deleteListing = async (listingID) => {
    const response = await fetch("http://localhost:3000/api/deleteListing",{
    method:"DELETE",
    body : JSON.stringify({
    listingId:(listingID)
    })
    },
    );
    await response;
};

const editListing = async (listingDict) => {
    const response = await fetch("http://localhost:3000/api/deleteListing",{
      method:"PUT",
      body : JSON.stringify({
      listing:(listingDict)
      })
      },
      );
    await response;
  };

  const handleDeleteClick = ({listingID, title, price, description, category, condition, location, email, phone, images, flagged}) => {
    deleteListing(listingID);
  }

// Next Step: remove post from flagged posts page when Allow or Delete is selected.

const AllowDelete = ({listingID, title, price, description, category, condition, location, email, phone, images, flagged}) => {
  return (
    <div style={RowStyle}>

        <button style={{height: '30px', width: '100px', borderWidth: "4px", alignItems: 'center', justifyContent: 'center', borderRadius: '10px', backgroundColor: 'white', color: 'black', borderColor: 'green'}} 
        onClick={deleteListing(listingID)}>
            Allow
        </button>

        <button style={{height: '30px', width: '100px', borderWidth: "4px", alignItems: 'center', justifyContent: 'center', borderRadius: '10px', backgroundColor: 'white', color: 'black', borderColor: 'red'}} 
        onClick={handleDeleteClick({listingID, title, price, description, category, condition, location, email, phone, images, flagged})}>
            Delete
        </button>
    </div>
  );
}

export default AllowDelete;