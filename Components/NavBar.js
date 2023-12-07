// Configutation for all of the links that appear on the navigation bar that exists at the top of each page.
'use client'

import styled from "styled-components";
import Image from 'next/image'
import Link from 'next/link';
import React from 'react';
import {useState} from 'react'; 

const NavBarBGStyle = {
    backgroundColor: 'black',
    height: '150px',
    display: 'flex',
    alignItems: 'bottom', 
    justifyContent: 'center',
    borderRadius: '10px',
}
const LinkStyle={
        display: 'flex',
        fontSize: '6xl',
        fontWeight: 'bold',
        alignItems: 'center',
};

export default function NavBar() {
    const [title, setTitle] = useState();

    return(
        <div style={NavBarBGStyle}>
            <Link href={'/listview'} style={{fontSize: "3rem", fontWeight: "bold"}} className="flex">
                TigerList
                <Image
                src="/CCLogoDerp.png"
                alt="Tiger Image"
                accept="image/*"
                width={'200'}
                height={'50'}
                priority
                />
            </Link>

            <div style={{fontSize: "1.60rem", fontWeight: "semibold", display:"flex", padding:"1.25rem"}}>
                <Link href={'/'} style={{display:"flex",padding:"1.25rem"}} className="flex p-3">
                    Browse
                </Link>

                <Link href={'/makelisting'} style={{display:"flex",padding:"1.25rem"}} className="underline-on-hover">
                    Make Listing   
                </Link>

                <div style={{display:"flex",padding:"1.25rem"}} className="flex p-3">
                    Search
                </div>

                <label>
                    <input 
                        id="Enter Keyword"
                        name="Enter Keyword"
                        type="text"

                        style={{ color: 'black', borderRadius: '10px'}}

                        value={title} 
                        placeholder='Enter Keyword'
                        onChange={e => setTitle(e.target.value)}
                          /> 
                </label>

                <Link href={"/mylistings"} style={{display:"flex",padding:"1.25rem"}} className="flex p-3">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style={{width:'3rem', height:'3rem'}} class="w-12 h-12">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                </Link>

                <Link href={'/'}  style={{display:"flex",padding:"1.25rem"}} className="flex p-3">
                    Sign Out
                </Link>

            </div>
            


        </div>
    );
}