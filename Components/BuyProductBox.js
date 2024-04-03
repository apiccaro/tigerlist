// Configuration for the product display on the browse page
'use client'

import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import { DynamicServerError } from "next/dist/client/components/hooks-server-context";
import React, { useState } from 'react';

getImageUrl



const ProductBGStyle ={
    backgroundColor: 'black',
    height: '250px',
    display: 'flex',
    alignItems: 'center', 
    justifyContent: 'center',
    borderRadius: '10px',
}
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
    color:"white",
};
const RowStyle={
    display: 'flex', 
    flexDirection: 'row',
     gap: '8px',
    }




//set default imageUrl based on listing category
const { getImageUrl } = require('./imageTools');
const imageUrl = getImageUrl(category)


const BuyProductBox = ({listingID, title, price, description, category, condition, location, email, phone, images, flagged}) => {


    //Categories map to usable images
    const categoryImageMap = {
        'Textbook': '/testimage1.jpeg',
        'Furniture': '/testimage2.jpeg',
        'Appliances': '/testimage3.jpeg',
        'Clothing': '/testimage4.jpeg',
        'Service': '/testimage5.jpeg',
        'Carpool': '/CCLogoDerp.png',
    };

    //use categoryImageMap to get link to image
    const getImageUrl = () => {
        const defaultImageUrl = '/product.png';
        return categoryImageMap[category] || defaultImageUrl;
    };

    return (
    <div>
            <div style={ProductBGStyle}>
                {/* This link should pass info about the product that is clicked on */}
                <Link href={{
                    pathname: '/productview',
                    query: {
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
                }} className="flex text-semibold text-2xl">
                    <Image
                        //src={images[0]? images[0]:"/photo.svg"} // Replacing with line below until we have DB image functionality
                        src={imageUrl}
                        

                        alt="Product Image"
                        accept="image/*"
                        className="flex flex-grow"
                        width={250}
                        height={10}
                        priority
                    />
                </Link>
                </div>
            <div style={RowStyle}>
                {/* This link should pass info about the product that is clicked on */}
                <Link href={{
                    pathname: '/productview',
                    query: {
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
                <div style={PriceStyle}>
                    {price}
                </div>
            </div>
        </div>
    )
}

export default BuyProductBox;

