// Configuration for the product display on the browse page
'use client'

import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import { DynamicServerError } from "next/dist/client/components/hooks-server-context";

const ProductBGStyle ={
    backgroundColor: 'black',
    height: '250px',
    display: 'flex',
    alignItems: 'center', 
    justifyContent: 'center',
    borderRadius: '10px',
}
const ProductStyle = {
    display: 'flex',
    fontWeight: 'bold', 
    fontSize: '1.5rem',    
    color: 'black',
};
const PriceStyle = {
    display: 'flex',
    fontWeight: 'bold',
    fontSize: '1.75rem',
};
const RowStyle={
    display: 'flex', 
    flexDirection: 'row',
     gap: '8px',
    }

const BuyProductBox = ({ title, price, description, category, condition, location, email, phone, images}) => {
    return (
    <div>
            <div style={ProductBGStyle}>
                {/* This link should pass info about the product that is clicked on */}
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
                        src={images[0]? images[0]:"/photo.svg"}
                        //src={images[0]}
                        alt="Product Image"
                        accept="image/*"
                        className="flex flex-grow"
                        width={250}
                        height={10}
                        priority
                    />
                </Link>
                </div>
            <div style={RowStyle}>
                {/* This link should pass info about the product that is clicked on */}
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
                }} 
                style={ProductStyle}>
                    {title}
                </Link>
                <div style={PriceStyle}>
                    {price}
                </div>
            </div>
        </div>
    )
}

export default BuyProductBox;


//export default BuyProductBox;
//     return(
//         <Wrapper>
//             <ProductBG>
//                 {/* This link should pass info about the product that is clicked on */}
//                 <Link href={'/productview'} className="flex text-semibold text-2xl">
//                     <Image
//                         src="/product.png"
//                         //src={image}
//                         alt="Product Image"
//                         accept="image/*"
//                         className="dark:invert"
//                         width={200}
//                         height={50}
//                         priority
//                     />
//                 </Link>
//             </ProductBG>
//             <div className="flex flex-row gap-8">
//                 {/* This link should pass info about the product that is clicked on */}
//                 <Link href={'/productview'} className="flex text-semibold text-2xl text-black">
//                     Title
//                 </Link>
//                 <div className="flex font-bold text-3xl">
//                     $100
//                 </div>
//             </div>
//         </Wrapper>
//     );
// }