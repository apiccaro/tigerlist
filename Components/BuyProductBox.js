// Configuration for the product display on the browse page
'use client'

import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

const Wrapper = styled.div``;

const ProductBG = styled.div`
    background-color: black;
    height: 250px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
`;

var title;
var price;
var location;
var description;
var category;
var condition;
var email;
var phone;
var image;

export default function BuyProductBox(){
    return(
        <Wrapper>
            <ProductBG>
                {/* This link should pass info about the product that is clicked on */}
                <Link href={'/productview'} className="flex text-semibold text-2xl">
                    <Image
                        src="/product.png"
                        alt="Product Image"
                        accept="image/*"
                        className="dark:invert"
                        width={200}
                        height={50}
                        priority
                    />
                </Link>
            </ProductBG>
            <div className="flex flex-row gap-8">
                {/* This link should pass info about the product that is clicked on */}
                <Link href={'/productview'} className="flex text-semibold text-2xl text-black">
                    Product Name
                </Link>
                <div className="flex font-bold text-3xl">
                    $100
                </div>
            </div>
        </Wrapper>
    );
}