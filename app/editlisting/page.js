'use client'

import {useState} from 'react';
import React from 'react';
import Image from 'next/image';
import { useForm } from "react-hook-form";
<<<<<<< HEAD
import { getPost } from '@/azure2/read';
=======
export const user  = "@coloradocollege.edu";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


//USING A LOT OF NEXT.JS DOCUMENTATION EXAMPLES -WILL CITE THE ONE THAT EVENTUALLY WORKS
const getListing = async () => {
  const response = await fetch(process.env.NEXT_PUBLIC_API_CONNECTION_URL+"getListing", {
    method:"GET",
    });
  const data = await response.json();
  return data;
};

const makeListing = async (listingDict) => {
  const response = await fetch(process.env.NEXT_PUBLIC_API_CONNECTION_URL+"putListing", {
    method:"PUT",
    body : JSON.stringify({
    listing:(listingDict)
    })
    },
    );
  await response;
};

export default function EditListing({searchParams}) {
  //var id=listingID.id;
  
  const SMALLIMAGE='100px';
  const [title, setTitle] = useState();
  const [price, setPrice] = useState();
  const [cat, setCat] = useState();
  const [cond, setCond] = useState();
  const [loc, setLoc] = useState();
  const [description, setDescription] = useState();
  const [previewImage, setPreviewImage] = useState();
  const [previewImage1, setPreviewImage1] = useState();
  const [previewImage2, setPreviewImage2] = useState();
  const [previewImage3, setPreviewImage3] = useState();
  const [previewImage4, setPreviewImage4] = useState();
  const [email, setEmail] = useState();
  const [phonenumber, setPhoneNumber] = useState();
  const [borderStyle, setBorderStyle] = useState();
  const [borderStyle1, setBorderStyle1] = useState();
  const [borderStyle2, setBorderStyle2] = useState();
  const [borderStyle3, setBorderStyle3] = useState();
  const [borderStyle4, setBorderStyle4] = useState();
  const [imgWidth, setWidth] = useState();
  const [imgHeight, setHeight] = useState();
  const [imgWidth1, setWidth1] = useState();
  const [imgHeight1, setHeight1] = useState();
  const [imgWidth2, setWidth2] = useState();
  const [imgHeight2, setHeight2] = useState();
  const [imgWidth3, setWidth3] = useState();
  const [imgHeight3, setHeight3] = useState();
  const [imgWidth4, setWidth4] = useState();
  const [imgHeight4, setHeight4] = useState();
  const [labelText, setLabelText] = useState();
  const [labelText1, setLabelText1] = useState();
  const [labelText2, setLabelText2] = useState();
  const [labelText3, setLabelText3] = useState();
  const [labelText4, setLabelText4] = useState();
  const [readinTitle2, setReadinTitle2] = useState();
  const [readinTitle, setReadinTitle] = useState("");


    /*const updateListing = async (id, updatedListing) => {
      await fetch(`/api/todos/update/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedTodo),
      });
    };*/
>>>>>>> 4b9d3364e39965bdb019021541f97b94d59b296d


export default function MakeListing(){
    const [title, setTitle] = useState();
    const [price, setPrice] = useState();
    const [cat, setCat] = useState();
    const [cond, setCond] = useState();
    const [loc, setLoc] = useState();
    const [description, setDescription] = useState();
    const [previewImage, setPreviewImage] = useState();
    const [email, setEmail] = useState();
    const [phonenumber, setPhoneNumber] = useState();
    const [imgWidth, setWidth] = useState();
    const [imgHeight, setHeight] = useState();
    const [borderStyle, setBorderStyle] = useState();
    const [labelHeight, setLabelHeight] = useState();
    const [labelText, setLabelText] = useState();
    const [readinTitle2, setReadinTitle2] = useState();
    const [readinTitle, setReadinTitle] = useState("");
    var originalImage=null;
    var originalTitle;
    var originalPrice;
    var originalDescription;
    var originalCategory;
    var originalCondition;
    var originalLocation;
    var originalEmail;
    var originalLocation;
    var originalEmail;
    var originalPhone;

    const { register,  handleSubmit,formState: { errors } } = useForm();
    const handleRegistration = (data) => {
        console.log(data);
        const titleValue = data.title;
        const priceValue= data.price;
        const descriptionValue = data.description;
        const catValue= data.category;
        const condValue = data.condition;
        const locValue =data.location;
        const emailValue = data.email;
        const phoneValue = data.phonenumber;
        const imageValue= previewImage? previewImage:originalImage;
        
        setReadinTitle("Title: "+titleValue+"\nPrice: "+priceValue+"\nDescription: "+descriptionValue+"\nCategory: "+catValue+"\nCondition: "+condValue);
        setReadinTitle2("\nLocation: "+locValue+"\nEmail: "+emailValue+"\nPhone"+phoneValue+"\nImage"+imageValue);
    }
    const readInData=()=>{
       originalImage="/ticket.jpeg"
        originalTitle="couch"
        originalPrice="2000"
        originalDescription="black and leather"
        originalCategory="textbook"
        originalCondition="new"
        originalLocation="offcampus"
        originalEmail="ap@coloradocollege.edu"
        originalPhone="9787657788"
    }
    /**
     * 
     * style={{float: "left" margin: "60px 100px 0 30px",}}
     * style={{float: "right",
                    margin: "60px 100px 0 0",
                    }}
     */
    const handleError = (errors) => {};
    readInData();
    return(
        <main style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <div >
                <div>
                    <h1>Edit Your Listing</h1>
                </div>  
                <div >
                    <form onSubmit={handleSubmit(handleRegistration, handleError)} >
                        <div  >
                        
                        
                        <label  
                            htmlFor="image"
                            style={{width: '400px', 
                            height: originalImage||previewImage? '40px': '280px' , 
                            border: originalImage||previewImage? '2px solid white': '2px dashed white', 
                            cursor:'pointer',
                            display: 'inline-block',
                           }}
                            > 
                            {originalImage||previewImage? 'Change Image':'Add Image'}
                            <input  
                            id="image"
                            name="image"
                            type="file"
                            accept="image/*"
                            style={{ display: "none",
                            float:'left' }}
                            //Author: Leigh Halliday -> https://github.com/leighhalliday/house-course/commit/eaee0e8b3292a4127beadf19dec399fa260150b5
                            onChange={(event) => {
                                if (event?.target?.files?.[0]) {
                                alert(event.target.files[0])    
                                  const file = event.target.files[0];
                                  const reader = new FileReader();
                                  reader.onloadend = () => {
                                    setPreviewImage(reader.result);
                                    alert(event.target.files[0])   
                                    setWidth(400);
                                    setHeight(200);
                                    
                                    setBorderStyle('2px solid white');
                                    setLabelText('Change Image');
                                  };
                                  reader.readAsDataURL(file);
                                }
                              }
                             
                            }
                              //end citation
                            />
                            <br></br>
      
                        </label>
                            
                            <img
                            
                            id="imagePreview"
                            src={previewImage ? previewImage: originalImage}
                            width={originalImage||previewImage? 400:0}
                            height={originalImage||previewImage? 200:0}
                            />
                  
                    </div>
                    <div  >

                   
                    <label>
                        Edit Title: <br></br>
                        <input 
                        id="title"
                        type="text"
                        style={{ color: 'black'}}
                        defaultValue={originalTitle}
                        value={title}
                        placeholder='Title'
                        onChange={e => setTitle(e.target.value)}
                        {...register("title",{required: 'Please enter a title with less than 50 characters', maxLength:{ value: 50, message: "Please enter a title with less than 50 characters"}
                        })}
                        
                          /> 
                          
                          <small style={{color:'red'}}>
                            <br></br>
                                {errors?.title && errors.title.message}
                             </small>
                     </label><br></br>
                     <span></span>
                     <label>
                        Edit Price: <br></br>
                        <input type="text"
                        style={{ color: 'black' }}
                        defaultValue={originalPrice}
                        value={price}
                        placeholder='Price'
                        onChange={e => setPrice(e.target.value)}
                        {...register("price",{required: 'Please enter a number',maxLength:{value: 10, message: "We cannot support purchases over $999,999,999"}, 
                        pattern: {
                            value: /^[0-9]+$/,
                            message: 'Please enter a number',
                        },
                    })}
                      /> 
                     
                      <small style={{color:'red'}}>
                      <br></br>
                      {errors?.price && errors.price.message}
                      </small>
                      
                     </label><br></br>
                     <label>
                        Edit Description:<br></br>
                        <input type="text"
                        style={{ color: 'black' }}
                        value={description} 
                        defaultValue={originalDescription}
                        placeholder='Description'
                        onChange={e => setDescription(e.target.value)}

                        {...register("description",{required: 'Please enter a description with less than 500 characters', maxLength: { value: 500, message: "Please enter a description with less than 500 characters" }, 
                        })}
                          /> 
                          
                          <small style={{color:'red'}}>
                          <br></br>
                          {errors?.description && errors.description.message}
                          </small>
                          
                     </label><br></br>
                     
                     <label 
                     for="category"
                    
                      > </label> 
                        Edit Category:<br></br>
                        <select name="category" 
                        id="category" 
                        
                        defaultValue={originalCategory}
                        value={cat}
                        onChange={e => setCat(e.target.value)}
                         {...register("category",{required: 'Please choose one'
                        })}
                         
                     > 
                        <option value="" disabled selected>Category</option>
                        <option value="textbook" >Textbook </option> 
                        <option value="furniture">Furniture</option> 
                        <option value="appliances">Appliance</option> 
                        <option value="clothing">Clothing</option> 
                        <option value="service">Service</option> 
                        <option value="carpool">Carpool</option>
                    </select> 
                        <small style={{color:'red'}}>
                          <br></br>
                          {errors?.category && errors.category.message}
                          </small><br></br>
                    <label for="condition" > </label> 
                        Edit Condition: <br></br>
                        <select name="condition" 
                        id="condition" 
                        
                        defaultValue={originalCondition}
                        value={cond}
                        onChange={e => setCond(e.target.value)}
                        {...register("condition",{required: 'Please choose one'
                        })}
                        
                        > 
                        <option value="" disabled selected >Condition</option>
                        <option value="new">New</option> 
                        <option value="used-like new">Used-Like New</option> 
                        <option value="used-good">Used-Good</option> 
                        <option value="used-fair">Used-Fair</option>
                    </select>
                        <small style={{color:'red'}}>
                          <br></br>
                          {errors?.condition && errors.condition.message}
                          </small>
                          <br></br>
                    <label for="location" > </label> 
                        Edit Location: <br></br>
                        <select name="location"
                        id="location" 
                        
                        value={loc}
                        defaultValue={originalLocation}
                        onChange={e => setLoc(e.target.value)}
                        {...register("location",{required: 'Please choose one'
                        })}
                        
                        > 
                        <option value="" disabled selected >Location</option>
                        <option value="eastcampus">East Campus</option> 
                        <option value="westcampus">West Campus</option> 
                        <option value="offcampus">Off Campus</option> 
                    </select> 
                          <br></br>
                          <small style={{color:'red'}}>
                          {errors?.location && errors.location.message}
                          </small>
                          <br></br>
                    <label>
                        Edit Email:<br></br>
                        <input 
                        id="email"
                        type="email"
                        style={{ color: 'black'}}
                        value={email} 
                        placeholder='Email'
                        defaultValue={originalEmail}
                        onChange={e => setEmail(e.target.value)}
                        {...register("email",{required: 'Please enter your CC email',maxLength: { value: 50, message: "Please enter your CC email" }, 
                        pattern: {
                            value: /\S+@coloradocollege+\.edu+/,
                            message: "Please enter your CC email",
                          },
                        })}
                          /> 
                          
                          <small style={{color:'red'}}>
                            <br></br>
                                {errors?.email && errors.email.message}
                             </small>
                     </label><br></br>
                     <label>
                        Edit Phone Number: <br></br>
                        <input 
                        id="phonenumber"
                        type="tel"
                        style={{ color: 'black'}}
                        value={phonenumber} 
                        
                        placeholder='Phone Number'
                        defaultValue={originalPhone}
                        onChange={e => setPhoneNumber(e.target.value)}
                        {...register("phonenumber",{required: 'Please enter a number', maxLength: { value: 10, message: "Please enter a 10 digit number" } ,
                        pattern: {
                            value: /^[0-9]{10}$/,
                            message: 'Please enter a phone number',
                        },
                       /* pattern: {
                            value: /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/,
                            message: 'Please enter a phone number',
                        },*/
                    })}
                          /> 
                          
                          <small style={{color:'red'}}>
                            <br></br>
                                {errors?.phonenumber && errors.phonenumber.message}
                             </small>
                     </label><br></br>
                     <div >
                        <button style={{width: '100px', height: '50px',alignItems: 'center',margin: "0 0 0 135px"}}>Submit</button>
                     </div>
                     
                     
                     </div>
                     
                    
                    </form>
                    <p id="readin">
                    {readinTitle}
                    </p>
                    <p id="readin2">
                    {readinTitle2}
                    </p>
                    </div>         
                    
            </div>
            </main>   
    )
}