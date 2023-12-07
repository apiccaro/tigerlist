// Configuration for the product display on the browse page
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

export default function BuyProductBox(){
    return(

        
        <div>
            <div style={ProductBGStyle}>

           
                <Link href={'/productview'} className="flex text-semibold text-2xl">
                    <Image
                        src="/product.png"
                        //src={image}
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
                {/* This link should pass info about the product that is clicked on */}
                <Link href={'/productview'} style={ProductStyle}>
                    Title
                </Link>
                <div style={PriceStyle}>
                    Price
                </div>
            </div>
        </div>
        
    );
}


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