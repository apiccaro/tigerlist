import React from 'react';
import Link from 'next/link';
const NavItem=({href, title})=>{
    return(
        <Link href={href}>
            {title}
        </Link>
    )
}
export default NavItem;