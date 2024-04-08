// Configuration for product appearance on the "My Listings" page.
'use client'

import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import ActiveInactive from "./ActiveInactive";
import {useState} from 'react';
import AllowDelete from "./AllowDelete";

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
                        isFlagged: flagged
                    } 
                }} style={linkStyle}>
                    <Image
                        //src="/product.png"
                        src={images[0]? images[0]:"/photo.svg"}
                        alt="Product Image"
                        accept="image/*"
                        //className="dark:invert"
                        width={300}
                        height={100}
                        priority
                    />
                </Link>
            </div>
            <div className="flex flex-row gap-40 mt-2 justify-center">
                {/* Put allow/delete buttons here */}
                <AllowDelete />
            </div>
        </div>
    );
}

export default ModeratePostsBox;