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

const ModeratePostsBox = ({listingID, title, price, description, category, condition, location, email, phone, images, active, flagged, banned}) => {
    return(
        <div>
            <div style={ProductBGStyle}>
                <Link href={{
                    pathname: '/modproductview',
                    query: {
                        productID: listingID,
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
                <AllowDelete ID={listingID} title={productTitle} price={productPrice} description={productDescription} category={productCategory} condition={productCondition} location={productLocation} email={listerEmail} phone={listerPhone} images={productImages} active={isActive} flagged={isFlagged} banned={isBanned}/>
            </div>
        </div>
    );
}

export default ModeratePostsBox;