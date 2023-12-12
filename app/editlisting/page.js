'use client'
import { useState,useEffect  } from 'react';
import React from 'react';
import { useForm } from "react-hook-form";
export const user  = "@coloradocollege.edu";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//USING A LOT OF NEXT.JS DOCUMENTATION EXAMPLES -WILL CITE THE ONE THAT EVENTUALLY WORKS
const getListing = async () => {
  const response = await fetch("/api/getListing",{
    method:"GET",
    });
  const data = await response.json();
  return data;
};
const makeListing = async (listingDict) => {
  const response = await fetch("/api/putListing",{
    method:"PUT",
    body : JSON.stringify({
    listing:(listingDict)
    })
    },
    );
  await response;
};
const getAllListings = async () => {
  const response = await fetch("/api/getAllListings",{
    method:"GET",
    });
  const data = await response.json();
  return data;
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

    const { productID} = searchParams;
    const {testPrice} = searchParams;
    const {testDescription} = searchParams;
    const {testCategory} = searchParams;
    const {testCondition} = searchParams;
    const {testLocation} = searchParams;
    const {testEmail} = searchParams;
    const {testPhone} = searchParams;
    const {testImages} = searchParams;

    var originalImage = testImages[0];
    var originalImage1 = testImages[1];
    var originalImage2 = testImages[2];
    var originalImage3 = testImages[3];
    var originalImage4 = testImages[4];


    // var testTitle = testDict["testTitle"];
    // var testPrice = testDict["testPrice"];
    const getData =async () => {
      const data = await getListing();
      originalTitle=data.title;
      setDescription(data.description);
      setPrice(data.price);
      setCat(data.category);
      setCond(data.condition);
      setLoc(data.location);
      setEmail(data.email);
      setPhoneNumber(data.phoneValue);
      console.log(data.images)
      setPreviewImage(data.images[0])
      setPreviewImage1(data.images[1])
      setPreviewImage2(data.images[2])
      setPreviewImage3(data.images[3])
      setPreviewImage4(data.images[4])
}
/**
/**
   * Handles the onSubmit action of the form
   */
  const { register, handleSubmit, formState: { errors } } = useForm();
   /**
   * Takes in data from the form and builds a dictionary to be 
   * write into the database.
   * Place holder as of now
   * @param {*} data 
   */
    /*const updateListing = async (id, updatedListing) => {
      await fetch(`/api/todos/update/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedListing),
      });
    };*/

  const handleRegistration = (data) => {
    /**const handleUpdate = async (id, completed) => {
      const updatedListing= listings.find((listing) => listing.id === id);
      await updateListing(id, updatedListing);
    };**/
  
    const titleValue = data.title;
    const priceValue = data.price;
    const descriptionValue = data.description;
    const catValue = data.category;
    const condValue = data.condition;
    const locValue = data.location;
    const emailValue = data.email;
    const phoneValue = data.phonenumber;
    const imageValue = [previewImage,previewImage1,previewImage2,previewImage3,previewImage4];
    var dict = {
      title: titleValue,
      price: priceValue,
      description: descriptionValue,
      category: catValue,
      condition: condValue,
      location: locValue,
      email: emailValue,
      phoneValue: phoneValue,
      image: imageValue,
      active: "true",
      flagged: "false"
    }
    if(makeListing(dict)){
      toast("Your listing has been edited!");
    }
    
  }
  

 
  /**
   * Takes in a list of error messages and applies them when necessary 
   * when input checking.
   * @param {list} errors 
   */
  const handleError = (errors) => { };
  return (
    <main style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor:'#D09B2C',
      color: 'black'
    }}>
      <ToastContainer 
      position="top-center"
      autoClose={3000}
      hideProgressBar={true}
      color='black'
      newestOnTop={false}
      closeOnClick
      rtl={false}
      theme="dark" />
      <div >
        <div>
          <h1 style={{fontWeight: 'bold'}}>Edit Your Listing</h1>
        </div>
        <div >
          <form onSubmit={handleSubmit(handleRegistration, handleError)} >
            <div style={{ float: "left", margin: "60px 100px 0 30px" }}>
              <label
                htmlFor="image"
                style={{
                  width: '500px',
                  borderRadius:'10px',
                  fontWeight: '600',
                  //if there is not an original image or an uploaded 
                  //image default to "add image" setting
                  
                  height: originalImage || previewImage ? '40px' : '280px',
                  border: originalImage || previewImage ? '4px solid black' : '4px dashed black',
                  cursor: 'pointer',
                  display: 'inline-block',
                }}
              >
                {originalImage || previewImage ? 'Change Image' : 'Add Image'}
                <input
                  id="image"
                  name="image"
                  type="file"
                  accept="image/*"
                  style={{
                    display: "none",
                    float: 'left'
                  }}
                  //Author: Leigh Halliday -> https://github.com/leighhalliday/house-course/commit/eaee0e8b3292a4127beadf19dec399fa260150b5
                  /**
                   * When there is a change of uploading photo, show the photo 
                   * and change the label
                   * 
                   * @param {event} event 
                   */
                  onChange={(event) => {
                    if (event?.target?.files?.[0]) {
                      //gets the first file and uploads it
                      const file = event.target.files[0];
                      const reader = new FileReader();
                      reader.onloadend = () => {
                        //sets all imagePreview fields
                        setPreviewImage(reader.result);
                        setWidth(400);
                        setHeight(200);
                        setBorderStyle('4px solid black');
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
                //if no previewImage- load in the original image
                src={previewImage ? previewImage : originalImage? setPreviewImage(originalImage):originalImage}
                style={{
                  objectFit: 'cover',
                  width: originalImage || previewImage ? '500px' : 0,
                  height: originalImage || previewImage ? '350px' : 0,
                }}
                //if not original image- do not show image component at all
              />
              <div style={{ display: 'inline-block' }}>
                <div style={{ width: '22%', margin: '0 15.5px 0px 0px', float: 'left' }}>
                  <label
                    htmlFor="image1"
                    style={{
                      width: '115px',
                      borderRadius:'10px',
                      fontWeight: '600',
                      //if there is not an original image or an uploaded 
                      //image default to "add image" setting
                      height: originalImage1 || previewImage1 ? '0px' : '115px',
                      border: originalImage1 || previewImage1 ? '' : '4px dashed black',
                      cursor: 'pointer',
                      display: 'inline-block',
                    }}
                  >
                    {originalImage1 || previewImage1 ? '' : 'Add Image'}
                    <input
                      id="image1"
                      name="image1"
                      type="file"
                      accept="image/*"
                      style={{
                        display: "none",
                        float: 'left'
                      }}
                      //Author: Leigh Halliday -> https://github.com/leighhalliday/house-course/commit/eaee0e8b3292a4127beadf19dec399fa260150b5
                      /**
                   * When there is a change of uploading photo, show the photo 
                   * and change the label
                   * 
                   * @param {event} event 
                   */
                      onChange={(event) => {
                        if (event?.target?.files?.[0]) {
                          const file = event.target.files[0];
                          const reader = new FileReader();
                          reader.onloadend = () => {
                            setPreviewImage1(reader.result);
                            setWidth1(SMALLIMAGE);
                            setHeight1(SMALLIMAGE);
                            setBorderStyle1('');
                            setLabelText1('');
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
                    id="imagePreview1"
                    //if no previewImage- load in the original image
                    src={previewImage1 ? previewImage1 : originalImage1? setPreviewImage1(originalImage1):originalImage1}
                    style={{
                      cursor: 'pointer',
                      objectFit: 'cover',
                      //if not original image- do not show image component at all
                    width:originalImage1 || previewImage1 ? '100px' : 0,
                    height:originalImage1 || previewImage1 ? '100px' : 0,
                    }}
                    
                    /**
                     * When you click the image it swaps with the main big image
                     * @param {event} event
                     */
                     onClick={(event) => {
                      var replace = previewImage;
                      setPreviewImage(previewImage1)
                      setPreviewImage1(replace)
                    }
                    }
                  />
                </div>
                <div style={{ width: '22%', margin: '0 15.5px 0px 0px', float: 'left' }}>
                  <label
                    htmlFor="image2"
                    style={{
                      width: '115px',
                      borderRadius:'10px',
                      fontWeight: '600',
                       //if there is not an original image or an uploaded 
                      //image default to "add image" setting
                      height: originalImage2 || previewImage2 ? '0px' : '115px',
                      border: originalImage2 || previewImage2 ? '' : '4px dashed black',
                      cursor: 'pointer',
                      display: 'inline-block',
                    }}
                  >
                    {originalImage2 || previewImage2 ? '' : 'Add Image'}
                    <input
                      id="image2"
                      name="image2"
                      type="file"
                      accept="image/*"
                      style={{
                        display: "none",
                        float: 'left'
                      }}
                      //Author: Leigh Halliday -> https://github.com/leighhalliday/house-course/commit/eaee0e8b3292a4127beadf19dec399fa260150b5
                       /**
                        * When there is a change of uploading photo, show the photo 
                        * and change the label
                        * 
                        * @param {event} event 
                        */
                      onChange={(event) => {
                        if (event?.target?.files?.[0]) {
                          const file = event.target.files[0];
                          const reader = new FileReader();
                          reader.onloadend = () => {
                            setPreviewImage2(reader.result);
                            setWidt2(SMALLIMAGE);
                            setHeight2(SMALLIMAGE);
                            setBorderStyle2('');
                            setLabelText2('');
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
                    id="imagePreview2"
                    //if no previewImage- load in the original image
                    src={previewImage2 ? previewImage2 : originalImage2? setPreviewImage2(originalImage2):originalImage2}
                    style={{
                      cursor: 'pointer',
                      objectFit: 'cover',
                      width:originalImage2 || previewImage2 ? 100 : 0,
                      height:originalImage2 || previewImage2 ? 100 : 0,
                    }}
                    //if not original image- do not show image component at all
                    
                    /**
                     * When you click the image it swaps with the main big image
                     * @param {event} event
                     */
                     onClick={(event) => {
                      var replace = previewImage;
                      setPreviewImage(previewImage2)
                      setPreviewImage2(replace)
                    }
                    }
                  />
                </div>
                <div style={{ width: '22%', margin: '0 15.5px 0px 0px', float: 'left' }}>
                  <label
                    htmlFor="image3"
                    style={{
                      width: '115px',
                      borderRadius:'10px',
                      fontWeight: '600',
                      //if there is not an original image or an uploaded 
                      //image default to "add image" setting
                      height: originalImage3 || previewImage3 ? '0px' : '115px',
                      border: originalImage3 || previewImage3 ? '' : '4px dashed black',
                      cursor: 'pointer',
                      display: 'inline-block',
                    }}
                  >
                    {originalImage3 || previewImage3 ? '' : 'Add Image'}
                    <input
                      id="image3"
                      name="image3"
                      type="file"
                      accept="image/*"
                      style={{
                        display: "none",
                        float: 'left'
                      }}
                      //Author: Leigh Halliday -> https://github.com/leighhalliday/house-course/commit/eaee0e8b3292a4127beadf19dec399fa260150b5
                       /**
                        * When there is a change of uploading photo, show the photo 
                        * and change the label
                        * 
                        * @param {event} event 
                        */
                      onChange={(event) => {
                        if (event?.target?.files?.[0]) {
                          const file = event.target.files[0];
                          const reader = new FileReader();
                          reader.onloadend = () => {
                            setPreviewImage3(reader.result);
                            setWidth3(SMALLIMAGE);
                            setHeight3(SMALLIMAGE);
                            setBorderStyle3('');
                            setLabelText3('');
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
                    id="imagePreview3"
                    //if no previewImage- load in the original image
                    src={previewImage3 ? previewImage3 : originalImage3? setPreviewImage3(originalImage3):originalImage3}
                    //src={previewImage1 ? previewImage1 : setPreviewImage1(originalImage1)}
                    style={{
                      cursor: 'pointer',
                      objectFit: 'cover',
                       //if not original image- do not show image component at all
                    width:originalImage3 || previewImage3 ? 100 : 0,
                    height:originalImage3 || previewImage3 ? 100 : 0,
                    }}
                   
                    /**
                     * When you click the image it swaps with the main big image
                     * @param {event} event
                     */
                     onClick={(event) => {
                      var replace = previewImage;
                      setPreviewImage(previewImage3)
                      setPreviewImage3(replace)
                    }
                    }
                  />
                </div>
                <div style={{ width: '22%', margin: '0 15.5px 0px 0px', float: 'left' }}>
                  <label
                    htmlFor="image4"
                    style={{
                      width: '115px',
                      borderRadius:'10px',
                      fontWeight: '600',
                      //if there is not an original image or an uploaded 
                      //image default to "add image" setting
                      height: originalImage4 || previewImage4 ? '0px' : '115px',
                      border: originalImage4 || previewImage4 ? '' : '4px dashed black',
                      cursor: 'pointer',
                      display: 'inline-block',
                    }}
                  >
                    {originalImage4 || previewImage4 ? '' : 'Add Image'}
                    <input
                      id="image4"
                      name="image4"
                      type="file"
                      accept="image/*"
                      style={{
                        display: "none",
                        float: 'left'
                      }}
                      //Author: Leigh Halliday -> https://github.com/leighhalliday/house-course/commit/eaee0e8b3292a4127beadf19dec399fa260150b5
                       /**
                        * When there is a change of uploading photo, show the photo 
                        * and change the label
                        * 
                        * @param {event} event 
                        */
                      onChange={(event) => {
                        if (event?.target?.files?.[0]) {
                          const file = event.target.files[0];
                          const reader = new FileReader();
                          reader.onloadend = () => {
                            setPreviewImage4(reader.result);
                            setWidth4(SMALLIMAGE);
                            setHeight4(SMALLIMAGE);
                            setBorderStyle4('');
                            setLabelText4('');
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
                    id="imagePreview4"
                    //if no previewImage- load in the original image
                    src={previewImage4 ? previewImage4 : originalImage4? setPreviewImage4(originalImage4):originalImage4}
                    style={{
                      cursor: 'pointer',
                      objectFit: 'cover',
                       //if not original image- do not show image component at all
                    width:originalImage4 || previewImage4 ? 100 : 0,
                    height:originalImage4 || previewImage4 ? 100 : 0,
                    }}
                   
                    /**
                     * When you click the image it swaps with the main big image
                     * @param {event} event
                     */
                     onClick={(event) => {
                      var replace = previewImage;
                      setPreviewImage(previewImage4)
                      setPreviewImage4(replace)
                    }
                    }
                  />
                </div>
              </div>
            </div>
            <div style={{
              float: "right",
              margin: "60px 100px 0 0",
            }}>
              <label><span className='formOption'>
                Edit Title: <br></br>
                </span>
                <input
                  id="title"
                  type="text"
                  style={{ color: 'black' }}
                  defaultValue={productID}
                  value={title}
                  placeholder='Title'
                   //confirms that users submit a title under 50 characters
                  onChange={e => setTitle(e.target.value)}
                  {...register("title", {
                    required: 'Please enter a title with less than 50 characters', maxLength: { value: 50, message: "Please enter a title with less than 50 characters" }
                  })}
                />
                <small style={{ color: 'red' }}>
                  <br></br>
                  {errors?.title && errors.title.message}
                </small>
              </label><br></br>
              <span></span>
              <label><span className='formOption'>
                Edit Price: <br></br>
                </span>
                <input type="text"
                  style={{ color: 'black' }}
                  defaultValue={testPrice}
                  value={price}
                  placeholder='Price'
                  onChange={e => setPrice(e.target.value)}
                  {//confirms that users submit a price under 10 digits
                    ...register("price", {
                    required: 'Please enter a number', maxLength: { value: 10, message: "We cannot support purchases over $999,999,999" },
                    pattern: {
                      value: /^[0-9]+$/,
                      message: 'Please enter a number',
                    },
                  })}
                />
                <small style={{ color: 'red' }}>
                  <br></br>
                  {errors?.price && errors.price.message}
                </small>
              </label><br></br>
              <label>
                <span className='formOption'>
                Edit Description: <br></br>
                </span>
                <input type="text"
                  style={{ color: 'black' }}
                  value={description}
                  defaultValue={testDescription}
                  placeholder='Description'
                  onChange={e => setDescription(e.target.value)}
                  //confirms that users submit a description under 500 characters
                  {...register("description", {
                    required: 'Please enter a description with less than 500 characters', maxLength: { value: 500, message: "Please enter a description with less than 500 characters" },
                  })}
                />
                <small style={{ color: 'red' }}>
                  <br></br>
                  {errors?.description && errors.description.message}
                </small>
              </label><br></br>
              <label
                for="category"
              > </label>
              <span className='formOption'>
                Edit Category: <br></br>
                </span>
              <select name="category"
                id="category"
                defaultValue={testCategory}
                value={cat}
                onChange={e => setCat(e.target.value)}
                //confirms that users submit a category
                {...register("category", {
                  required: 'Please choose one'
                })}
              >
                <option value="" disabled selected>Category</option>
                <option value="Textbook" >Textbook </option>
                <option value="Furniture">Furniture</option>
                <option value="Appliances">Appliance</option>
                <option value="Clothing">Clothing</option>
                <option value="Service">Service</option>
                <option value="Carpool">Carpool</option>
              </select>
              <small style={{ color: 'red' }}>
                <br></br>
                {errors?.category && errors.category.message}
              </small><br></br>
              <label for="condition" > </label>
              <span className='formOption'>
                Edit Category: <br></br>
                </span>
              <select name="condition"
                id="condition"
                defaultValue={testCondition}
                value={cond}
                onChange={e => setCond(e.target.value)}
                //confirms that users submit a condition
                {...register("condition", {
                  required: 'Please choose one'
                })}
              >
                <option value="" disabled selected >Condition</option>
                <option value="New">New</option>
                <option value="Used-Like New">Used-Like New</option>
                <option value="Used-Good">Used-Good</option>
                <option value="Used-Fair">Used-Fair</option>
              </select>
              <small style={{ color: 'red' }}>
                <br></br>
                {errors?.condition && errors.condition.message}
              </small>
              <br></br>
              <label for="location" > </label>
              <span className='formOption'>
                Edit Location: <br></br>
                </span>
              <select name="location"
                id="location"
                value={loc}
                defaultValue={testLocation}
                onChange={e => setLoc(e.target.value)}
                //confirms that users submit a location
                {...register("location", {
                  required: 'Please choose one'
                })}
              >
                <option value="" disabled selected >Location</option>
                <option value="East Campus">East Campus</option>
                <option value="West Campus">West Campus</option>
                <option value="Off Campus">Off Campus</option>
              </select>
              <br></br>
              <small style={{ color: 'red' }}>
                {errors?.location && errors.location.message}
              </small>
              <br></br>
              <label>  
                <span className='formOption'>
                Edit Email: <br></br>
                </span>
                <input
                  id="email"
                  type="email"
                  style={{ color: 'black' }}
                  value={email}
                  placeholder='Email'
                  defaultValue={testEmail}
                  onChange={e => setEmail(e.target.value)}
                  //confirms that users submit an email that matches a CC email.
                  {...register("email", {
                    required: 'Please enter your CC email', maxLength: { value: 50, message: "Please enter your CC email" },
                    pattern: {
                      value: /\S+@coloradocollege+\.edu+/,
                      message: "Please enter your CC email",
                    },
                  })}
                />
                <small style={{ color: 'red' }}>
                  <br></br>
                  {errors?.email && errors.email.message}
                </small>
              </label><br></br>
              <label><span className='formOption'>
                Edit Phone Number: <br></br>
                </span>
                <input
                  id="phonenumber"
                  type="tel"
                  style={{ color: 'black' }}
                  value={phonenumber}
                  placeholder='Phone Number'
                  defaultValue={testPhone}
                  onChange={e => setPhoneNumber(e.target.value)}
                  //confirms that users submit a 10 digit phone number
                  {...register("phonenumber", {
                    required: 'Please enter a number', maxLength: { value: 10, message: "Please enter a 10 digit number" },
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
                <small style={{ color: 'red' }}>
                  <br></br>
                  {errors?.phonenumber && errors.phonenumber.message}
                </small>
              </label><br></br>
              <div >
                <button style={{ width: '100px',
                 height: '50px',
                  alignItems: 'center',
                   margin: "0 0 15px 135px" }}>
                    Submit
                    </button>
              </div>
            </div>
          </form>
         
        </div>
      </div>
    </main>
  )
                
}