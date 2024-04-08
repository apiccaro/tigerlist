import { Handjet } from 'next/font/google';
import { useRouter } from 'next/navigation';
import React from 'react';
import { useForm } from "react-hook-form";

const MyComponent = () => {
    const router = useRouter();
    // Force refresh the page
    const handleReload = () => {
      router.reload();
    };
};

const RowStyle={
    display: 'flex', 
    flexDirection: 'row',
    alignItems: 'center',
    gap: '8px',
    }

const deleteListing = async (post_key) => {
  console.log("Listing ID"+post_key);
    const response = await fetch("http://localhost:3000/api/deleteListing",{
    method:"DELETE",
    body : JSON.stringify("1234"
    )
    },
    );
    await response;
};

const editListing = async (listingDict) => {
    const response = await fetch("http://localhost:3000/api/editListing",{
      method:"PUT",
      body : JSON.stringify({
      listing:(listingDict)
      })
      },
      );
    await response;
  };

  const handleDeleteClick = (post_key) => {
    deleteListing(post_key);
    MyComponent();
  }

  const handleAllowClick = ({post_key, title, price, description, category, condition, location, email, phone, images, flagged}) => {
    editListing({post_key, title, price, description, category, condition, location, email, phone, images, flagged});
    MyComponent();
  }

// Next Step: remove post from flagged posts page when Allow or Delete is selected.

const AllowDelete = ({post_key, title, price, description, category, condition, location, email, phone, images, flagged}) => {
  return (
    <div style={RowStyle}>

        <button style={{height: '30px', width: '100px', borderWidth: "4px", alignItems: 'center', justifyContent: 'center', borderRadius: '10px', backgroundColor: 'white', color: 'black', borderColor: 'green'}} 
        onClick={handleAllowClick({post_key, title, price, description, category, condition, location, email, phone, images, flagged})}>
            Allow
        </button>

        <button style={{height: '30px', width: '100px', borderWidth: "4px", alignItems: 'center', justifyContent: 'center', borderRadius: '10px', backgroundColor: 'white', color: 'black', borderColor: 'red'}} 
        onClick={handleDeleteClick(post_key)}>
            Delete
        </button>
    </div>
  );
}

export default AllowDelete;