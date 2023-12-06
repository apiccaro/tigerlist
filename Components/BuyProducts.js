'use client'

import styled from "styled-components";
import Image from "next/image";
import Link from 'next/link';
import BuyProductBox from "./BuyProductBox";

// This youtube video provided formatting help https://www.youtube.com/watch?v=dTFXufTgfOE

const ProductsGridStyle={
    marginTop: '20px',
    marginLeft: '20px',
    marginRight: '20px',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 1fr',
    gap:'20px',
}

export default function Products(){
    return(
        <div style={ProductsGridStyle} className="flex flex-grow">
            <BuyProductBox />
            <BuyProductBox />
            <BuyProductBox />
            <BuyProductBox />
            <BuyProductBox />
            <BuyProductBox />
            <BuyProductBox />
        </div>
    );
}