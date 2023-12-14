// The filters that appear on the browse page
'use client'

import React, { useState, useEffect } from 'react';

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

export default function Filter(){
    const [listings, setListings] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedCondition, setSelectedCondition] = useState('');
    const [selectedLocation, setSelectedLocation] = useState('');

    const getAllFilteredListings = async (category, condition, location) => {
        const response = await fetch("http://localhost:3000/api/getFilteredListings",{
          method:"GET",
          });
        const data = await response.json();
        return data;
    };

    useEffect(() => {
        // Fetch filtered listings when any filter changes
        getAllFilteredListings(selectedCategory, selectedCondition, selectedLocation).then((data) => setListings(data));
      }, [selectedCategory, selectedCondition, selectedLocation]);
      
    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    const handleConditionChange = (condition) => {
        setSelectedCondition(condition);
    };

    const handleLocationChange = (location) => {
        setSelectedLocation(location);
    };

    const filteredListings = listings.filter((listing) => {
        return (
          (selectedCategory === '' || listing.category === selectedCategory) &&
          (selectedCondition === '' || listing.condition === selectedCondition) &&
          (selectedLocation === '' || listing.location === selectedLocation)
        );
      });

    return(
        <div style={FilterOptions}>
            <div style={{ fontWeight: 'bold', fontSize: '1.75rem', color: 'black', }}>Filter Options</div><br></br>
            <label for="category"> </label> 
                <select name="category" id="category" style={{ color: 'grey' }} onChange={(e) => handleCategoryChange(e.target.value)}> 
                <option value="" disabled selected>Category</option>
                <option value="Textbook" onClick={getAllFilteredListings("Textbook")}>Textbook </option>
                {/* <option value="Textbook">Textbook </option>  */}
                <option value="Furniture" onClick={getAllFilteredListings("Furniture")}>Furniture</option> 
                {/* <option value="Furniture">Furniture</option>  */}
                <option value="Appliances" onClick={getAllFilteredListings("Appliances")}>Appliance</option> 
                {/* <option value="Appliances">Appliance</option> */}
                <option value="Clothing" onClick={getAllFilteredListings("Clothing")}>Clothing</option> 
                {/* <option value="Clothing">Clothing</option>  */}
                <option value="Service" onClick={getAllFilteredListings("Service")}>Service</option> 
                {/* <option value="Service">Service</option> */}
                <option value="Carpool" onClick={getAllFilteredListings("Carpool")}>Carpool</option>
                {/* <option value="Carpool">Carpool</option> */}
            </select> <br></br><br></br>

            <label for="condition" className=""> </label> 
                <select name="condition" id="condition" style={{ color: 'grey'}} onChange={(e) => handleConditionChange(e.target.value)}> 
                {/* <option value="" disabled selected >Condition</option> */}
                <option value="New" onClick={getAllFilteredListings("New")}>New</option>
                {/* <option value="New">New</option> */}
                <option value="Used-Like New" onClick={getAllFilteredListings("Used-Like New")}>Used-Like New</option>
                {/* <option value="Used-Like New">Used-Like New</option> */}
                <option value="Used-Good" onClick={getAllFilteredListings("Used-Good")}>Used-Good</option>
                {/* <option value="Used-Good">Used-Good</option> */}
                <option value="Used-Fair" onClick={getAllFilteredListings("Used-Fair")}>Used-Fair</option>
                {/* <option value="Used-Fair">Used-Fair</option> */}
            </select><br></br><br></br>

            <label for="location" > </label> 
                <select name="location" id="location" style={{ color: 'grey'}} onChange={(e) => handleLocationChange(e.target.value)}> 
                <option value="" disabled selected >Location</option>
                <option value="East Campus" onClick={getAllFilteredListings("East Campus")}>East Campus</option> 
                {/* <option value="East Campus">East Campus</option>  */}
                <option value="West Campus" onClick={getAllFilteredListings("West Campus")}>West Campus</option> 
                {/* <option value="West Campus">West Campus</option>  */}
                <option value="Off Campus" onClick={getAllFilteredListings("Off Campus")}>Off Campus</option> 
                {/* <option value="Off Campus">Off Campus</option>  */}
            </select><br></br>

            <div style={ProductsGridStyle} className="flex flex-grow">
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
                    flagged={listing.flagged}
                    />
                ))}
            </div>
        </div>
    );
}