/**
 * Configuration for where the product and contact information will appear on the product view page.
 * @param {Object} listingID - The ID of the listing.
 * @param {string} title - The title of the product.
 * @param {string} price - The price of the product.
 * @param {string} description - The description of the product.
 * @param {string} category - The category of the product.
 * @param {string} condition - The condition of the product.
 * @param {string} location - The location of the product.
 * @param {string} email - The email of the lister.
 * @param {string} phone - The phone number of the lister.
 * @param {boolean} active - Whether the product is active.
 * @param {string[]} images - The images of the product.
 * @param {boolean} flagged - Whether the product is flagged.
 * @param {boolean} banned - Whether the product is banned.
 * @returns {JSX.Element} The JSX element representing the product and contact information.
 */
// Configuration for where the product and contact information will appear on the product view page
'use client'

import styled from "styled-components";
import { useState } from 'react';
import Image from 'next/image';
import AllowDelete from "./AllowDelete";


const InfoBoxStyle = {
    backgroundColor: 'black',
    height: '300px',
    width: '700px',
    display: 'flex',
    alignItems: 'top',
    justifyContent: 'left',
    borderRadius: '10px',
    paddingTop: '20px',
    paddingLeft: '20px',
    paddingRight: '20px'
}
const ContactBoxStyle = {
    backgroundColor: 'black',
    height: '140px',
    width: '700px',
    display: 'flex',
    alignItems: 'top',
    justifyContent: 'left',
    borderRadius: '10px',
    paddingTop: '20px',
    paddingLeft: '20px',
    paddingRight: '20px'
}

const ModProductInfo = ({post_key, title, price, description, category, condition, location, email, phone, flagged, banned}) => {

    const [isActive, setIsActive] = useState(true);

    // Function to toggle the flag button
    const toggleFlagButton = () => {
        setIsActive(!isActive);
    };

    const RowStyle={
        display: 'flex', 
        flexDirection: 'row',
        gap: '20px',
    }

    return(
        <aside style={{display: "flex", flexDirection: 'col', gap:'3rem', text:"white", padding:"1rem", }} className="flex flex-col gap-10 text-white p-4 mt-5">
            <div style={InfoBoxStyle}>
                <div className="flex flex-col gap-2">
                    <h3 className="flex gap-1 font-semibold text-2xl">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style={{width:'1.75rem', height:'1.75rem'}} class="w-8 h-8">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                        </svg>
                        Product Details
                    </h3>
                    <div className="font-bold">
                        Description: {description}
                    </div>
                    <div className="font-bold">
                        Location: {location}
                    </div>
                    
                </div>
            </div>
            <div style={ContactBoxStyle}>
                <div className="flex flex-col gap-2">
                    <h3 className="flex gap-1 font-semibold">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style={{width:'1.75rem', height:'1.75rem'}} class="w-8 h-8">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        Contact Information
                    </h3>
                    <div className="font-bold">
                        Email: {email}
                    </div>
                    <div className="font-bold">
                        Phone Number: {phone}
                    </div>
                </div>
            </div>

            <div style={RowStyle}>
                <button
                style={{height: '80px', width: '80px', alignItems: 'center', borderRadius: '10px', backgroundColor: 'black', borderColor: 'black'}}
                onClick={toggleFlagButton}>
                    {isActive ? <Image
                                    src="/unflagged.svg"
                                    alt="Tiger Image"
                                    accept="image/*"
                                    width={'200'}
                                    height={'50'}
                                    priority
                    /> : <Image
                            src="/flagged.svg"
                            alt="Tiger Image"
                            accept="image/*"
                            width={'200'}
                            height={'50'}
                            priority
                        />}
                </button>
                <AllowDelete ID={listingID} title={title} price={price} description={description} category={category} condition={condition} location={location} email={email} phone={phone} images={images} active={active} flagged={flagged} banned={banned}/>
            </div>


        </aside>
    );
}

export default ModProductInfo;
