// The filters that appear on the browse page
'use client'

import styled from "styled-components";

const FilterOptions = styled.div`
    display: col;
    padding: 5px;
    padding-top: 20px;
    
`;

export default function Filter(){
    return(
        <FilterOptions>
            <div className="text-bold text-3xl text-black">Filter Options</div><br></br>
            <label for="category"> </label> 
                <select name="category" id="category" style={{ color: 'grey' }}> 
                <option value="" disabled selected>Category</option>
                <option value="Textbook" >Textbook </option> 
                <option value="Furniture">Furniture</option> 
                <option value="Appliances">Appliance</option> 
                <option value="Clothing">Clothing</option> 
                <option value="Service">Service</option> 
                <option value="Carpool">Carpool</option>
            </select> <br></br><br></br>

            <label for="condition" className=""> </label> 
                <select name="condition" id="condition" style={{ color: 'grey'}}> 
                <option value="" disabled selected >Condition</option>
                <option value="New">New</option>
                <option value="Used-Like New">Used-Like New</option>
                <option value="Used-Good">Used-Good</option>
                <option value="Used-Fair">Used-Fair</option>
            </select><br></br><br></br>

            <label for="location" > </label> 
                <select name="location" id="location" style={{ color: 'grey'}}> 
                <option value="" disabled selected >Location</option>
                <option value="East Campus">East Campus</option> 
                <option value="West Campus">West Campus</option> 
                <option value="Off Campus">Off Campus</option> 
            </select><br></br>
        </FilterOptions>
    );
}