/**
 * Configuration for product appearance on the "My Listings" page.
 * @param {string} listingID - The unique identifier for the product listing.
 * @param {string} title - The title of the product listing.
 * @param {string} price - The price of the product listing.
 * @param {string} description - The description of the product listing.
 * @param {string} category - The category of the product listing.
 * @param {string} condition - The condition of the product listing.
 * @param {string} location - The location of the product listing.
 * @param {string} email - The email of the product listing owner.
 * @param {string} phone - The phone number of the product listing owner.
 * @param {Array<string>} images - The images of the product listing.
 * @param {boolean} active - The status of the product listing (active or inactive).
 * @param {boolean} flagged - The status of the product listing (flagged or not).
 * @param {boolean} banned - The status of the product listing (banned or not).
 * @returns {JSX.Element} The JSX element representing the product appearance on the "My Listings" page.
 */
 'use client'

import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import ActiveInactive from "./ActiveInactive";
import {useState} from 'react';

const Wrapper = styled.div``;

const ProductBGStyle ={
    backgroundColor: 'black',
    height: '250px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '10px',
    color:'white'
}
const linkStyle = {
    display: 'flex',
    fontWeight: 600, 
    fontSize: '1.7rem',
    color:'black',
    color:'white'
};
const buttonStyle = {
    display: 'flex',
    flexDirection: 'row', 
    gap: '40px',
    marginTop: '2px',
    color:"white",
};



const SellProductBox = ({post_key, title, price, description, category, condition, location, email, phone, active, images, flagged}) => {
    const banned = false
    //Get good image name, either given or category default
    const { getGoodImage,getCategoryImage } = require('./imageTools');
    var imageUrl = getGoodImage(images[0], category);
    const defaultUrl = getCategoryImage(category)
    imageUrl = defaultUrl

    // method to handle image loading error when a file name is invalid
    const handleImageError = (e) => {
        e.target.src = defaultUrl
    };

    

    return(
        <div>
            <div style={ProductBGStyle}>
                <Link href={{
                    pathname: '/productview',
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
                    } 
                }} style={linkStyle}>
                    <Image
                        src={imageUrl}
                        //src={images[0]? images[0]:imageUrl}
                        alt="Product Image"
                        accept="image/*"
                        //className="dark:invert"
                        onError={handleImageError} 
                        style={{
                            borderRadius: '10px',
                            objectFit: 'scale-down',
                        }}

                        width={175}
                        height={250}
                        priority
                    />
                </Link>
            </div>
            <div className="flex flex-row gap-40 mt-2">
                <Link href={{
                    pathname: '/productview',
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
                        active: true,
                        isFlagged: flagged,
                    } 
                }} style={linkStyle}>
                    {title}
                </Link>
                <div style={PriceStyle}>
          ${price} {/* Adding dollar sign here */}
        </div>
                {/* Need to send data to ActiveInactive for edit link to access */}
                <ActiveInactive post_key={post_key} title={title} price={price} description={description} category={category} condition={condition} location={location} email={email} phone={phone} images={images} active={active} flagged={flagged} banned={banned}/>
            </div>
        </div>
    );
}

export default SellProductBox;
