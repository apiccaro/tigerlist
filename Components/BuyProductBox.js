/**
 * Configuration for the product display on the browse page.
 * @param {Object} props - The props containing product information.
 * @param {string} props.listingID - The ID of the product listing.
 * @param {string} props.title - The title of the product.
 * @param {number} props.price - The price of the product.
 * @param {string} props.description - The description of the product.
 * @param {string} props.category - The category of the product.
 * @param {string} props.condition - The condition of the product.
 * @param {string} props.location - The location of the product.
 * @param {string} props.email - The email of the lister.
 * @param {string} props.phone - The phone number of the lister.
 * @param {string[]} props.images - The images of the product.
 * @param {boolean} props.active - The active status of the product.
 * @param {boolean} props.flagged - The flagged status of the product.
 * @param {boolean} props.banned - The banned status of the product.
 * @returns {JSX.Element} The JSX element representing the product display.
 */
// Configuration for the product display on the browse page
'use client'

import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import { DynamicServerError } from "next/dist/client/components/hooks-server-context";
import React, { useState } from 'react';

const ProductBGStyle ={
  backgroundColor: 'black',
  height: '250px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '10px',
};

const ProductStyle = {
  display: 'flex',
  fontWeight: 'bold',
  fontSize: '1.5rem',
  color: 'black',
};

const PriceStyle = {
  display: 'flex',
  fontWeight: 'bold',
  fontSize: '1.75rem',
  color: "white",
};

const RowStyle = {
  display: 'flex',
  flexDirection: 'row',
  gap: '8px',
};

/**
 * Functional component for displaying a product box.
 * @param {Object} props - The props containing product information.
 * @returns {JSX.Element} The JSX element representing the product box.
 */
const BuyProductBox = ({ post_key, title, price, description, category, condition, location, email, phone, images, flagged}) => {


    // Get good image name, either given or based on category
    const { getGoodImage,getCategoryImage } = require('./imageTools');
    var imageUrl = getGoodImage(images[0], category);
    const defaultUrl = getCategoryImage(category)
    imageUrl = getCategoryImage // frontend isn't liking images, using defaults for now

    // method to handle image loading error when a file name is invalid
    const handleImageError = (e) => {
        e.target.src = defaultUrl
    };

  return (
    <div>
      <div style={ProductBGStyle}>
        {/* This link should pass info about the product that is clicked on */}
        <Link href={{
          pathname: '/productview',
          query: {
            post_key:post_key,
            productTitle: title,
            productPrice: price,
            productDescription: description,
            productCategory: category,
            productCondition: condition,
            productLocation: location,
            listerEmail: email,
            listerPhone: phone,
            productImages: images,
            isFlagged: flagged,
            active: active,
            banned: banned
          }
        }} className="flex text-semibold text-2xl">
          <Image
            // src={images[0]? images[0]:"/photo.svg"}
            src={imageUrl}
            alt="Product Image"
            accept="image/*"
            className="flex flex-grow"
  
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
      <div style={RowStyle}>
        {/* This link should pass info about the product that is clicked on */}
        <Link href={{
          pathname: '/productview',
          query: {
            post_key:post_key,
            productTitle: title,
            productPrice: price,
            productDescription: description,
            productCategory: category,
            productCondition: condition,
            productLocation: location,
            listerEmail: email,
            listerPhone: phone,
            productImages: images,
            isFlagged: flagged
          }
        }}
          style={ProductStyle}>
          {title}
        </Link>



        {/* <div style={PriceStyle}>
          {price}
        </div> */}


        <div style={PriceStyle}>
          ${price} {/* Adding dollar sign here */}
        </div>


      </div>
    </div>
  )
}

export default BuyProductBox;

