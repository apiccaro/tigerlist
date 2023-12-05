'use client'

import styled from "styled-components";
import Image from 'next/image'
import Link from 'next/link';
import React from 'react';
import {useState} from 'react'; 

const NavBarBG = styled.div`
    background-color: black;
    height: 150px;
    display: flex;
    align-items: top;
    justify-content: center;
    border-radius: 10px;
`;

export default function NavBar() {
    const [title, setTitle] = useState();

    return(
        <NavBarBG>
            <Link href={'/listview'} className="flex text-6xl font-bold">
                TigerList
                <Image
                src="/TigerIcon.svg"
                alt="Tiger Image"
                accept="image/*"
                className="dark:invert"
                width={'200'}
                height={'50'}
                priority
                />
            </Link>

            <div className="flex p-5 text-2xl font-semibold">
                <Link href={'/listview'} className="flex p-3">
                    Browse
                </Link>

                <Link href={'/makelisting'} className="flex p-3 underline-on-hover">
                    Make Listing   
                </Link>

                <div className="flex p-3">
                    Search
                </div>

                <label>
                    <input 
                        id="Enter Keyword"
                        name="Enter Keyword"
                        type="text"

                        style={{ color: 'black' }}

                        value={title} 
                        placeholder='Enter Keyword'
                        onChange={e => setTitle(e.target.value)}
                          /> 
                </label>

                <Link href={"/mylistings"} className="flex p-3">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                </Link>

                <Link href={'/'} className="flex p-3">
                    Sign Out
                </Link>

            </div>
            


        </NavBarBG>
    );
}