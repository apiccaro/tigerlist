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
                <option value="textbook" >Textbook </option> 
                <option value="furniture">Furniture</option> 
                <option value="appliances">Appliance</option> 
                <option value="clothing">Clothing</option> 
                <option value="service">Service</option> 
                <option value="sarpool">Carpool</option>
            </select> <br></br><br></br>

            <label for="condition" className=""> </label> 
                <select name="condition" id="condition" style={{ color: 'grey'}}> 
                <option value="" disabled selected >Condition</option>
                <option value="furniture">New</option> 
                <option value="appliances">Used-Like New</option> 
                <option value="clothing">Used-Good</option> 
                <option value="service">Used-Fair</option>
            </select><br></br><br></br>

            <label for="location" > </label> 
                <select name="location" id="location" style={{ color: 'grey'}}> 
                <option value="" disabled selected >Location</option>
                <option value="eastcampus">East Campus</option> 
                <option value="westcampus">West Campus</option> 
                <option value="offcampus">Off Campus</option> 
            </select><br></br>
        </FilterOptions>
    );
}