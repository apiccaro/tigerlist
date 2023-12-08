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


const SellProductBox = ({ title, price, description, category, condition, location, email, phone, images}) => {
    return(
        <div>
            <div style={ProductBGStyle}>
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
                        productImages: images
                    } 
                }} style={linkStyle}>
                    <Image
                        //src="/product.png"
                        src={images[0]? images[0]:"/photo.svg"}
                        alt="Product Image"
                        accept="image/*"
                        //className="dark:invert"
                        width={200}
                        height={50}
                        priority
                    />
                </Link>
            </div>
            <div className="flex flex-row gap-40 mt-2">
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
                        productImages: images
                    } 
                }} style={linkStyle}>
                    {title}
                </Link>
                {/* Need to send data to ActiveInactive for edit link to access */}
                <ActiveInactive title={title} price={price} description={description} category={category} condition={condition} location={location} email={email} phone={phone} images={images}/>
            </div>
        </div>
    );
}

export default SellProductBox;