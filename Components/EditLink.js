 /**
  * EditLink component displays a link to edit a listing.
  * @param {Object} props - The props containing information about the listing.
  * @param {string} props.listingID - The ID of the listing.
  * @param {string} props.title - The title of the listing.
  * @param {string} props.price - The price of the listing.
  * @param {string} props.description - The description of the listing.
  * @param {string} props.category - The category of the listing.
  * @param {string} props.condition - The condition of the listing.
  * @param {string} props.location - The location of the listing.
  * @param {string} props.email - The email of the listing owner.
  * @param {string} props.phone - The phone number of the listing owner.
  * @param {string[]} props.images - The images of the listing.
  * @param {boolean} props.active - Whether the listing is active.
  * @param {boolean} props.flagged - Whether the listing is flagged.
  * @param {boolean} props.banned - Whether the listing is banned.
  * @returns {JSX.Element} The JSX element representing the edit link.
  */

 'use client'

import styled from "styled-components";
import Link from "next/link";
const Wrapper = styled.div``;

 // Styling for the background of the link
 const LinkBGStyle = {
    backgroundColor: 'black',
    height: '30px',
    width: '80px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '10px',
}
 // Styling for the text of the link
 const EditStyle = {
    display: 'flex',
    fontWeight: '600', 
    fontSize: `1.3rem`,
    color:'white'
};

const EditLink = ({post_key, title, price, description, category, condition, location, email, phone, images, flagged}) => {
    return(
        <Wrapper>
            <div style={LinkBGStyle}>
                <Link href={{
                    pathname: '/editlisting',
                    query: {
                        post_key: post_key,
                        testTitle: title,
                        testPrice: price,
                        testDescription: description,
                        testCategory: category,
                        testCondition: condition,
                        testLocation: location,
                        testEmail: email,
                        testPhone: phone,
                        testImages: images,
                        isFlagged: flagged
                    }
                }} style={EditStyle}>
                    Edit
                </Link>
            </div>
        </Wrapper>
    );
}

export default EditLink;
