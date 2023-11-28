'use client'

import {useState} from 'react';
import React from 'react';
export default function MakeListing(){
    const [title, setTitle] = useState();
    const [price, setPrice] = useState();
    const [description, setDescription] = useState();

    return(
        <main className="flex min-h-screen flex-col items-center justify-between p-24">

 
            <div>
                <div>
                    <h1>Item For Sale</h1>
                </div>  
                <div>
                    <form>
                    <label>
                        
                        <input type="text"
                        style={{ color: 'black' }}

                        value={title} 
                        placeholder='Title'
                        onChange={e => setTitle(e.target.value)}
                          /> 
                     </label><br></br>
                     <label>
                        
                        <input type="text"
                        style={{ color: 'black' }}
                        value={price} 
                        placeholder='Price'
                        onChange={e => setPrice(e.target.value)}
                          /> 
                     </label><br></br>
                     <label>
                        
                        <input type="text"
                        style={{ color: 'black' }}
                        value={description} 
                        placeholder='Description'
                        onChange={e => setDescription(e.target.value)}
                          /> 
                     </label><br></br>
                     <label for="category" > </label> 
                        
                        <select name="category" id="category" style={{ color: 'grey' }}> 
                        <option value="" disabled selected>Category</option>
                        <option value="textbook" style={{ color: 'black' }}>Textbook </option> 
                        <option value="furniture">Furniture</option> 
                        <option value="appliances">Appliance</option> 
                        <option value="clothing">Clothing</option> 
                        <option value="service">Service</option> 
                        <option value="sarpool">Carpool</option>
                    </select> <br></br>
                    <label for="condition" > </label> 
                        
                        <select name="condition" id="condition" style={{ color: 'black' }}> 
                        <option value="" disabled selected style={{ color: 'grey' }}>Condition</option>
                        <option value="textbook" style={{ color: 'black' }}>Textbook </option> 
                        <option value="furniture">New</option> 
                        <option value="appliances">Used-Like New</option> 
                        <option value="clothing">Used-Good</option> 
                        <option value="service">Used-Fair</option>
                    </select>


                    </form>
                    </div>         
            
            </div>
            </main>
            

    )
}