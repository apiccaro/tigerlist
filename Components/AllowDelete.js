/**
 * Contains the layout for the Allow and Delete buttons on the flagged posts page.
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
 * @returns {JSX.Element} The JSX element representing the Allow and Delete buttons.
 */
import { Handjet } from 'next/font/google';
import { useRouter } from 'next/navigation';
import React from 'react';
import { useForm } from "react-hook-form";


 /**
  * Functional component for handling updates to listings.
  * @returns {void}
  * 
  * JM: From Jack's Branch, not sure if its still how we do things
  */
 const Update = () => {
  const router = useRouter();
  // Force refresh the page
  const handleReload = () => {
    router.reload();
  };
};

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

 /**
  * Asynchronously deletes a listing.
  * @param {string} listingID - The ID of the listing to be deleted.
  *   
  * Still had pre-server api call when I merged, never saw this feature made usable by the front end.
  */
 const deleteListing = async (post_key) => {
     const response = await fetch("http://localhost:3000/api/deleteListing",{
     method:"DELETE",
     body : JSON.stringify({
     listingId:(listingID)
     })
     },
     );
     await response;
 };
 

 /**
  * Asynchronously edits a listing.
  * @param {Object} listingDict - The listing information to be edited.
  * 
  * Still had pre-server api call when I merged, never saw this feature made usable by the front end.
  */
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

 
   /**
    * Handles the click event for deleting a listing.
    * @param {string} listingID - The ID of the listing to be deleted.
    */
  const handleDeleteClick = (post_key) => {
    deleteListing(post_key);
    // MyComponent();
    Update();
  }

     /**
    * Handles the click event for allowing a listing.
    * @param {Object} props - The props containing listing information.
    */
     const handleAllowClick = ({post_key, title, price, description, category, condition, location, email, phone, images, flagged, banned}) => {
      flagged = !flagged;
      editListing({post_key, title, price, description, category, condition, location, email, phone, images, flagged, banned});
      // MyComponent();
      Update();
    }


// Next Step: remove post from flagged posts page when Allow or Delete is selected.
 /**
  * Functional component for the Allow and Delete buttons on flagged posts.
  * @param {Object} props - The props containing listing information.
  * @returns {JSX.Element} The JSX element representing the Allow and Delete buttons.
  */
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
