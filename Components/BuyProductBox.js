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

const BuyProductBox = ({ title, price, description, category, condition, location, email, phone, images}) => {
    return (
    <Wrapper>
            <ProductBG>
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
            </ProductBG>
            <div className="flex flex-row gap-2">
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
                className="flex text-semibold font-bold text-2xl text-black">
                    {title}
                </Link>
                <div className="flex font-bold text-3xl">
                    {price}
                </div>
            </div>
        </Wrapper>
    )
}


export default BuyProductBox;
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