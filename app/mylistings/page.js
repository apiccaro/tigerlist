'use client'
/**
 * Design for the "My Listings" page of the website.
 * This component displays the user's listings and provides a link to flagged posts for moderators.
 * @returns {JSX.Element} The JSX element representing the "My Listings" page.
 */
// Design for the "My Listings" page of the website
import SellProducts from "@/Components/SellProducts";
import Link from "next/link";
import { useState, useEffect } from 'react'; 
import Loading from "@/app/mylistings/loading";

/**
 * Retrieves the current user's information from the API.
 * @returns {Promise<Object>} The user's information.
 */
const getUser = async () => {
  const response = await fetch(process.env.API_CONNECTION_URL + "getUser", {
      method: "GET",
  });
  const data = await response.json();
  console.log(data)
  return data;
}

/**
 * Retrieves a list of all moderated users from the API.
 * @returns {Promise<Array>} An array of moderated user information.
 */
const getAllModeratedUsers = async () => {
  const response = await fetch(process.env.API_CONNECTION_URL + "getAllModeratedUsers",{
    method: "GET",
  });
  const data = await response.json();
  console.log(data)
  return data;
};

/**
 * The Home component renders the "My Listings" page.
 * It fetches and displays listings belonging to the current user.
 */
export default function Home() {
  const [moderatedUsers, setModeratedUsers] = useState();
  const [isModerated, setIsModerated] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch all moderated users and set the state
        const data = await getAllModeratedUsers();
        setModeratedUsers(data.title);
        
        // Fetch the current user's information
        const user = await getUser();
        
        // Check if the current user is in the list of moderated users
        const userModerated = data.title.includes(user);
        console.log(user);
        setIsModerated(userModerated);
      } catch (error) {
        console.log(error)
      }
      debugger;
    };

    // Fetch data when the component mounts
    fetchData();
  }, []);

  // Styles for layout
  const RowStyle = {
    display: 'flex', 
    flexDirection: 'row',
    gap: '8px',
  };
  const ColStyle = {
    display: 'flex', 
    flexDirection: 'column',
    gap: '8px',
  };

  const moderators = ['j_dresser@coloradocollege.edu']
  const currentUser = 'j_dresser@coloradocollege.edu'

  // Check if the current user is a moderator
  const showFlaggedPostsLink = moderators.includes(currentUser);

  return (
    <main style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor:'#D09B2C',
      color: '#D09B2C',
      height: '100%',
      width: '100%',
    }}>
      <div style={ColStyle}>
        <div style={RowStyle}>
          <div className="text-4xl text-black font-semibold p-5">My Listings</div><br></br>
          {/* {isModerated && ( */}
          {showFlaggedPostsLink && (
            <Link href={'/flaggedposts'} className="text-4xl text-black font-semibold p-5">Flagged Posts</Link>
          )}
        </div>
        <SellProducts />
      </div>
    </main>
  );
}
