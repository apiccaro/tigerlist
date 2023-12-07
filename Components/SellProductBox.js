// Configuration for product appearance on the "My Listings" page.
'use client'

import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import ActiveInactive from "./ActiveInactive";
import {useState} from 'react';

const Wrapper = styled.div``;

const ProductBG = styled.div`
    background-color: black;
    height: 250px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
`;

const SellProductBox = ({ title, price, description, category, condition, location, email, phone, images}) => {
    return(
        <Wrapper>
            <ProductBG>
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
                }} className="flex text-semibold text-2xl">
                    <Image
                        //src="/product.png"
                        src={images[0]? images[0]:"/photo.svg"}
                        alt="Product Image"
                        accept="image/*"
                        width={300}
                        height={100}
                        priority
                    />
                </Link>
            </ProductBG>
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
                }} className="flex text-semibold text-2xl text-black">
                    {title}
                </Link>
                {/* Need to send data to ActiveInactive for edit link to access */}
                <ActiveInactive title={title} price={price} description={description} category={category} condition={condition} location={location} email={email} phone={phone} images={images}/>
            </div>
        </Wrapper>
    );
}

export default SellProductBox;