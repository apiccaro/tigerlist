/**
 * Configuration for product appearance on the "My Listings" page.
 * @param {Object} listingID - The ID of the listing.
 * @param {string} title - The title of the product.
 * @param {string} price - The price of the product.
 * @param {string} description - The description of the product.
 * @param {string} category - The category of the product.
 * @param {string} condition - The condition of the product.
 * @param {string} location - The location of the product.
 * @param {string} email - The email of the lister.
 * @param {string} phone - The phone number of the lister.
 * @param {string[]} images - The images of the product.
 * @param {boolean} active - Whether the product is active.
 * @param {boolean} flagged - Whether the product is flagged.
 * @param {boolean} banned - Whether the product is banned.
 * @returns {JSX.Element} The JSX element representing the product appearance.
 */
// Configuration for product appearance on the "My Listings" page.
'use client'

import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import ActiveInactive from "./ActiveInactive";
import {useState} from 'react';
import AllowDelete from "./AllowDelete";

const ProductBGStyle ={
    backgroundColor: 'black',
    height: '250px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '10px',
}
const linkStyle = {
    display: 'flex',
    fontWeight: 600, 
    fontSize: '1.7rem',
    color:'black',
};
const buttonStyle = {
    display: 'flex',
    flexDirection: 'row', 
    gap: '40px',
    marginTop: '2px',
};


const ModeratePostsBox = ({post_key, title, price, description, category, condition, location, email, phone, images, flagged}) => {
    return(
        <div>
            <div style={ProductBGStyle}>
                <Link href={{
                    pathname: '/modproductview',
                    query: {
                        post_key: post_key,
                        productTitle: title,
                        productPrice: price,
                        productDescription: description,
                        productCategory: category,
                        productCondition: condition,
                        productLocation: location,
                        listerEmail: email,
                        listerPhone: phone,
                        productImages: images,
                        isActive: active,
                        isFlagged: flagged,
                        isBanned: banned
                    } 
                }} style={linkStyle}>
                    <Image
                        //src="/product.png"
                        src={("/"+listingID+"/"+images[0])? ("/"+listingID+"/"+images[0]):"/photo.svg"}
                        alt="Product Image"
                        accept="image/*"
                        //className="dark:invert"
                        width={130}
                        height={130}
                        priority
                    />
                </Link>
            </div>
            <div className="flex flex-row gap-40 mt-2 justify-center">
                {/* Put allow/delete buttons here */}
                <AllowDelete ID={listingID} title={title} price={price} description={description} category={category} condition={condition} location={location} email={email} phone={phone} images={images} active={active} flagged={flagged} banned={banned}/>
            </div>
        </div>
    );
}

export default ModeratePostsBox;
