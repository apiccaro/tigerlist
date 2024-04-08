// Configuration for product appearance on the "My Listings" page.
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



const SellProductBox = ({post_key, title, price, description, category, condition, location, email, phone, images, flagged}) => {
    console.log("making a sellbox with post_key: "+post_key)

    //Get good image name, either given or category default
    const { getGoodImage,getCategoryImage } = require('./imageTools');
    const imageUrl = getGoodImage(images[0], category);
    const defaultUrl = getCategoryImage(category)


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
                        isFlagged: flagged
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
                        isFlagged: flagged
                    } 
                }} style={linkStyle}>
                    {title}
                </Link>
                {/* Need to send data to ActiveInactive for edit link to access */}
                <ActiveInactive post_key={post_key} title={title} price={price} description={description} category={category} condition={condition} location={location} email={email} phone={phone} images={images} flagged={flagged}/>
            </div>
        </div>
    );
}

export default SellProductBox;