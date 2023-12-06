// Grid configuration for the products on the "My listings" page.
'use client'

import styled from "styled-components";
import SellProductBox from "./SellProductBox";

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
        <div className="flex flex-col gap-1 text-4xl font-semibold">
            <ProductsGrid className="flex flex-grow">
                <SellProductBox />
                <SellProductBox />
                <SellProductBox />
                <SellProductBox />
                <SellProductBox />
            </ProductsGrid>
        </div>
    );
}