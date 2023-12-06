'use client'

import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";


const ProductBGStyle ={
    backgroundColor: 'black',
    height: '250px',
    display: 'flex',
    alignItems: 'center', 
    justifyContent: 'center',
    borderRadius: '10px',
}

export default function BuyProductBox(){
    return(

        
        <div>
            <div style={ProductBGStyle}>

           
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
                </div>
            <div className="flex flex-row gap-8">
                <Link href={'/productview'} className="flex text-semibold text-2xl text-black">
                    Product Name
                </Link>
                <div className="flex font-bold text-3xl">
                    $100
                </div>
            </div>
        </div>
        
    );
}