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


export default function SellProductBox(){
    return(
        <div>
            <div style={ProductBGStyle}>
                <Link href={'/productview'} style={linkStyle}>
                    <Image
                        src="/product.png"
                        alt="Product Image"
                        accept="image/*"
                        //className="dark:invert"
                        width={200}
                        height={50}
                        priority
                    />
                </Link>
            </div>
            <div style={buttonStyle}>
                <Link href={'/productview'} style={linkStyle}>
                    Product Name
                </Link>
                <ActiveInactive />
            </div>
        </div>
    );
}