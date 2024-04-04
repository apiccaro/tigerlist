// The filters that appear on the browse page
'use client'

import React, { useState, useEffect } from 'react';
import BuyProductBox from './BuyProductBox';

const ProductsGridStyle={
    marginTop: '20px',
    marginLeft: '20px',
    marginRight: '20px',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 1fr',
    gap:'20px',
}

const FilterOptions = {
    display: 'col',
    padding: '20px 20px 20px',
    // Add this line for left padding
}

const getAllFilteredListings = async (category, condition, location) => {
    const response = await fetch("http://localhost:3000/api/getAllFilteredListings",{
      method:"GET",
      });
    const data = await response.json();
    return data;
};

export default function Filter(){
    const [listings, setListings] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedCondition, setSelectedCondition] = useState('');
    const [selectedLocation, setSelectedLocation] = useState('');



    useEffect(() => {
        getAllFilteredListings(selectedCategory, selectedCondition, selectedLocation)
          .then((data) => setListings(data))
          .catch((error) => {
            console.error('Error fetching listings:', error);
          });
      }, [selectedCategory, selectedCondition, selectedLocation]);
      
  
    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        getAllFilteredListings(category, selectedCondition, selectedLocation)
          .then((data) => setListings(data))
          .catch((error) => {
            console.error('Error fetching listings:', error);
          });
    };

 
    const handleConditionChange = (condition) => {
        setSelectedCondition(condition);
        getAllFilteredListings(selectedCategory, condition, selectedLocation)
          .then((data) => setListings(data))
          .catch((error) => {
            console.error('Error fetching listings:', error);
          });
    };

   
    const handleLocationChange = (location) => {
        setSelectedLocation(location);
        getAllFilteredListings(selectedCategory, selectedCondition, location)
          .then((data) => setListings(data))
          .catch((error) => {
            console.error('Error fetching listings:', error);
          });
    };

    
    const filteredListings = Array.isArray(listings) ? listings.filter((listing) => {
      return (
        (selectedCategory === '' || listing.category === selectedCategory) &&
        (selectedCondition === '' || listing.condition === selectedCondition) &&
        (selectedLocation === '' || listing.location === selectedLocation)
      );
    }) : [];

    return(
        <div style={FilterOptions}>
            <div style={{ fontWeight: 'bold', fontSize: '1.75rem', color: 'black', }}>Filter Options</div><br></br>
            <label for="category"> </label> 
            <select name="category" id="category" style={{ color: 'grey' }} onChange={(e) => handleCategoryChange(e.target.value)}> 
                <option value="" disabled selected>Category</option>
                <option value="Textbook">Textbook</option>
                <option value="Furniture">Furniture</option>
                <option value="Appliances">Appliance</option>
                <option value="Clothing">Clothing</option>
                <option value="Service">Service</option>
                <option value="Carpool">Carpool</option>
            </select> <br></br><br></br>

            <label for="condition" className=""> </label> 
            <select name="condition" id="condition" style={{ color: 'grey' }} onChange={(e) => handleConditionChange(e.target.value)}> 
                <option value="" disabled selected>Condition</option>
                <option value="New">New</option>
                <option value="Used-Like New">Used-Like New</option>
                <option value="Used-Good">Used-Good</option>
                <option value="Used-Fair">Used-Fair</option>
            </select> <br></br><br></br>

            <label for="location" > </label> 
            <select name="location" id="location" style={{ color: 'grey' }} onChange={(e) => handleLocationChange(e.target.value)}> 
                <option value="" disabled selected>Location</option>
                <option value="East Campus">East Campus</option>
                <option value="West Campus">West Campus</option>
                <option value="Off Campus">Off Campus</option>
            </select> <br></br><br></br>
                {/* <select name="location" id="location" style={{ color: 'grey'}} onChange={(e) => handleLocationChange(e.target.value)}>  */}
                {/* <option value="" disabled selected >Location</option> */}
                {/* <option value="East Campus" onClick={getAllFilteredListings("East Campus")}>East Campus</option>  */}
                {/* <option value="East Campus">East Campus</option>  */}
                {/* <option value="West Campus" onClick={getAllFilteredListings("West Campus")}>West Campus</option>  */}
                {/* <option value="West Campus">West Campus</option>  */}
                {/* <option value="Off Campus" onClick={getAllFilteredListings("Off Campus")}>Off Campus</option>  */}
                {/* <option value="Off Campus">Off Campus</option>  */}
            {/* </select><br></br> */}

            {/* <div style={ProductsGridStyle} className="flex flex-grow">
                {filteredListings.map((listing, index) => (
                    <BuyProductBox
                    key={index}
                    listingID={listing.listingID}
                    title={listing.title}
                    price={listing.price}
                    description={listing.description}
                    category={listing.category}
                    condition={listing.condition}
                    location={listing.location}
                    email={listing.email}
                    phone={listing.phone}
                    images={listing.images}
                    active={listing.active}
                    flagged={listing.flagged}
                    banned={listing.banned}
                    />
                ))}
            </div> */}
        </div>
    );
}