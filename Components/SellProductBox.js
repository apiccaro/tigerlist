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

export default function SellProductBox(){
    return(
        <Wrapper>
            <ProductBG>
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
            <div className="flex flex-row gap-40 mt-2">
                <Link href={'/productview'} className="flex text-semibold text-2xl text-black">
                    Product Name
                </Link>
                <ActiveInactive />
            </div>
        </Wrapper>
    );
}