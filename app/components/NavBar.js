import React from "react";
import Link from "next/link";
import NavItem from "./NavItem";

const NavBar=()=>{
    return(
        <header>
            <nav className="nav">
                <Link href={"/"}>
                    <h2>
                        TigerList
                    </h2>

                </Link>
            <div>
                <NavItem href="/makelisting" title="Make New Listing"></NavItem>
            </div>
            </nav>
        </header>
    )
};
export default NavBar;