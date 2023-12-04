// Configuration for all of the products that will appear on the browse page.
'use client'

import styled from "styled-components";
import Image from "next/image";
import Link from 'next/link';
import BuyProductBox from "./BuyProductBox";

// This youtube video provided grid formatting help https://www.youtube.com/watch?v=dTFXufTgfOE

const ProductsGrid = styled.div`
    margin-top: 20px;
    margin-left: 20px;
    margin-right: 20px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 20px;
`;

export default function Products(){
    return(
        <ProductsGrid className="flex flex-grow">
            <BuyProductBox />
            <BuyProductBox />
            <BuyProductBox />
            <BuyProductBox />
            <BuyProductBox />
            <BuyProductBox />
            <BuyProductBox />
        </ProductsGrid>
    );
}