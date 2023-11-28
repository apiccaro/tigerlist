'use client'

import {useState} from 'react';
import React from 'react';
import Image from 'next/image';


export default function MakeListing(){
    const [title, setTitle] = useState();
    const [price, setPrice] = useState();
    const [description, setDescription] = useState();
    const [previewImage, setPreviewImage] = useState();
    const [imgWidth, setWidth] = useState();
    const [imgHeight, setHeight] = useState();
    const [borderStyle, setBorderStyle] = useState();
    const [labelHeight, setLabelHeight] = useState();
    const [labelText, setLabelText] = useState();
    function validateForm(){
        if(title==''){
            
        }
    }


    return(
        <main className="flex min-h-screen flex-col items-center justify-between p-24">

 
            <div>
                <div>
                    <h1>Item For Sale</h1>
                </div>  
                <div>
                    <form>
                        <label  
                            htmlFor="image"
                           
                            style={{width: '400px', height: labelHeight ?? 280, border: borderStyle??'2px dashed white', cursor:'pointer',display: 'inline-block'}}
                            > 
                            {labelText?? 'Add Image'}
                            <input
                            id="image"
                            name="image"
                            type="file"
                            accept="image/*"
                            style={{ display: "none" }}
                            //Author: Leigh Halliday ->https://github.com/leighhalliday/house-course/commit/eaee0e8b3292a4127beadf19dec399fa260150b5

                            onChange={(event) => {
                                if (event?.target?.files?.[0]) {
                                  const file = event.target.files[0];
                                  const reader = new FileReader();
                                  reader.onloadend = () => {
                                    setPreviewImage(reader.result);
                                    setWidth(400);
                                    setHeight(200);
                                    setLabelHeight(40);
                                    setBorderStyle('2px solid white');
                                    setLabelText('Change Image');
                                  };
                                  reader.readAsDataURL(file);
                                }
                              }}
                              //end citation
                            />
                        </label><br></br>
                        
                            <img
                            
                            id="imagePreview"
                            src={previewImage ? previewImage:''}
                            width={imgWidth? imgWidth:0}
                            height={imgHeight? imgHeight:0}
                            />
                    
                    <label>
                        
                        <input 
                        id="title"
                        name="title"
                        type="text"

                        style={{ color: 'black' }}

                        value={title} 
                        placeholder='Title'
                        onChange={e => setTitle(e.target.value)}
                          /> 
                     </label><br></br>
                     <span id="errorTitle" class="error"></span>
                     <br></br>
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
                     <label 
                     for="category"
                    
                      > </label> 
                        
                        <select name="category" id="category" style={{ color: 'grey' }}> 
                        <option value="" disabled selected>Category</option>
                        <option value="textbook" >Textbook </option> 
                        <option value="furniture">Furniture</option> 
                        <option value="appliances">Appliance</option> 
                        <option value="clothing">Clothing</option> 
                        <option value="service">Service</option> 
                        <option value="sarpool">Carpool</option>
                    </select> <br></br>
                    <label for="condition" > </label> 
                        
                        <select name="condition" id="condition" style={{ color: 'grey'}}> 
                        <option value="" disabled selected >Condition</option>
                        <option value="furniture">New</option> 
                        <option value="appliances">Used-Like New</option> 
                        <option value="clothing">Used-Good</option> 
                        <option value="service">Used-Fair</option>
                    </select><br></br>
                    <label for="location" > </label> 
                        
                        <select name="location" id="location" style={{ color: 'grey'}}> 
                        <option value="" disabled selected >Location</option>
                        <option value="eastcampus">East Campus</option> 
                        <option value="westcampus">West Campus</option> 
                        <option value="offcampus">Off Campus</option> 
                    </select><br></br>
                    
                    
                    </form>
                    
                    </div>         
                    
            </div>
            <button onClick={validateForm}>Submit</button>
            </main>
            

    )
}