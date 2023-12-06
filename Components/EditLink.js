// The edit link formatted to be the same as the active/on hold button
'use client'

import styled from "styled-components";
import Link from "next/link";

// var testDict = {title: "test title", price: "test price", description: "test description",
//                 category: "Textbook", condition: "New", location: "East Campus", 
//                 email: "test@coloradocollege.edu", phone: "2079561870" 
// }

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

export default function EditLink(){
    return(
        <Wrapper>
            <LinkBG>
                <Link href={{
                    pathname: '/editlisting',
                    query: {
                        productID: '12345',
                        testPrice: 'Test Price',
                        testDescription: 'Test Description',
                        testCategory: 'Textbook',
                        testCondition: "Used-Fair",
                        testLocation: "East Campus",
                        testEmail: "test@coloradocollege.edu",
                        testPhone: "2079561870"
                    }
                }} className="flex text-semibold text-xl">
                    Edit
                </Link>
                {/* <Link
                    href="/editlisting"
                    as={`/editlisting?title=${encodeURIComponent("test title")}&price=${encodeURIComponent("test price")}&description=${encodeURIComponent("test description")}&category=${encodeURIComponent("Textbook")}&condition=${encodeURIComponent("New")}&location=${encodeURIComponent("East Campus")}&email=${encodeURIComponent("test@coloradocollege.edu")}&phone=${encodeURIComponent("2079561870")}`}
                    className="flex text-semibold text-xl"
                    >
                    Edit
                    </Link> */}
            </LinkBG>
        </Wrapper>
    );
}