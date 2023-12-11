// Configuration for where the product and contact information will appear on the product view page
'use client'

import styled from "styled-components";

const InfoBoxStyle = {
    backgroundColor: 'black',
    height: '300px',
    width: '700px',
    display: 'flex',
    alignItems: 'top',
    justifyContent: 'left',
    borderRadius: '10px',
    paddingTop: '20px',
    paddingLeft: '20px',
    paddingRight: '20px'
}
const ContactBoxStyle = {
    backgroundColor: 'black',
    height: '200px',
    width: '700px',
    display: 'flex',
    alignItems: 'top',
    justifyContent: 'left',
    borderRadius: '10px',
    paddingTop: '20px',
    paddingLeft: '20px',
    paddingRight: '20px'
}

const ProductInfo = ({ title, price, description, category, condition, location, email, phone }) => {
    return(
        <aside style={{display: "flex", flexDirection: 'col', gap:'3rem', text:"white", padding:"1rem", }} className="flex flex-col gap-10 text-white p-4 mt-5">
            <div style={InfoBoxStyle}>
                <div className="flex flex-col gap-2">
                    <h3 className="flex gap-1 font-semibold text-2xl">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style={{width:'1.75rem', height:'1.75rem'}} class="w-8 h-8">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                        </svg>
                        Product Details
                    </h3>
                    <div className="font-bold">
                        Description: {description}
                    </div>
                    <div className="font-bold">
                        Location: {location}
                    </div>
                    
                </div>
            </div>
            <div style={ContactBoxStyle}>
                <div className="flex flex-col gap-2">
                    <h3 className="flex gap-1 font-semibold">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style={{width:'1.75rem', height:'1.75rem'}} class="w-8 h-8">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        Contact Information
                    </h3>
                    <div className="font-bold">
                        Email: {email}
                    </div>
                    <div className="font-bold">
                        Phone Number: {phone}
                    </div>
                </div>
            </div>
        </aside>
    );
}

export default ProductInfo;