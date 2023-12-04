'use client'

import styled from "styled-components";
import Link from "next/link";

const Wrapper = styled.div``;

const LinkBG = styled.div`
    background-color: black;
    height: 30px;
    width: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
`;

export default function LinkBackground(){
    return(
        <Wrapper>
            <LinkBG>
                <Link href={'/editlisting'} className="flex text-semibold text-2xl">
                    Edit
                </Link>
            </LinkBG>
        </Wrapper>
    );
}