'use client'

import { useState } from 'react';
import React from 'react';
import { useForm } from "react-hook-form";


export default function MakeListing() {
  const SMALLIMAGE = '100px';
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
  const [borderStyle, setBorderStyle] = useState();
  const [borderStyle1, setBorderStyle1] = useState();
  const [borderStyle2, setBorderStyle2] = useState();
  const [borderStyle3, setBorderStyle3] = useState();
  const [borderStyle4, setBorderStyle4] = useState();
  const [labelHeight, setLabelHeight] = useState();
  const [labelHeight1, setLabelHeight1] = useState();
  const [labelHeight2, setLabelHeight2] = useState();
  const [labelHeight3, setLabelHeight3] = useState();
  const [labelHeight4, setLabelHeight4] = useState();
  const [labelText, setLabelText] = useState();
  const [labelText1, setLabelText1] = useState();
  const [labelText2, setLabelText2] = useState();
  const [labelText3, setLabelText3] = useState();
  const [labelText4, setLabelText4] = useState();
  const [readinTitle2, setReadinTitle2] = useState();
  const [readinTitle, setReadinTitle] = useState("");

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
  const handleRegistration = (data) => {
    console.log(data);
    const titleValue = data.title;
    const priceValue = data.price;
    const descriptionValue = data.description;
    const catValue = data.category;
    const condValue = data.condition;
    const locValue = data.location;
    const emailValue = data.email;
    const phoneValue = data.phonenumber;
    const imageValue = [previewImage, previewImage1, previewImage2, previewImage3, previewImage4];
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
    }

    setReadinTitle("Title: " + titleValue + "\nPrice: " + priceValue + "\nDescription: " + descriptionValue + "\nCategory: " + catValue + "\nCondition: " + condValue);
    setReadinTitle2("\nLocation: " + locValue + "\nEmail: " + emailValue + "\nPhone" + phoneValue + "\nImage" + imageValue);
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
    }}>
      <div >
        <div>
          <h1>Create Listing</h1>
        </div>
        <div >
          <form onSubmit={handleSubmit(handleRegistration, handleError)} >
            <div style={{ float: "left", margin: "60px 100px 0 30px" }}>

              <label
                htmlFor="image"
                style={{ width: '500px', height: labelHeight ?? 480, border: borderStyle ?? '2px dashed white', cursor: 'pointer', display: 'inline-block' }}
              >
                {labelText ?? 'Add Image'}
                <input
                  id="image"
                  name="image"
                  type="file"
                  accept="image/*"
                  style={{ display: "none" }}

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
                        setHeight('400px');
                        setWidth('500px');
                        setPreviewImage(reader.result);
                        setLabelHeight(40);
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
                src={previewImage ? previewImage : ''}
                width={imgWidth ? imgWidth : 0}
                height={imgHeight ? imgHeight : 0}
              />
              <div style={{ display: 'inline-block' }}>
                <div style={{ width: '22%', margin: '0 15.5px 0px 0px', float: 'left' }}>
                  <label
                    htmlFor="image1"
                    style={{ width: '115px', height: labelHeight1 ?? 115, border: borderStyle1 ?? '2px dashed white', cursor: 'pointer', display: 'inline-block' }}
                  >
                    {labelText1 ?? 'Add Image'}
                    <input
                      id="image1"
                      name="image1"
                      type="file"
                      accept="image/*"
                      style={{ display: "none" }}
                      //Author: Leigh Halliday -> https://github.com/leighhalliday/house-course/commit/eaee0e8b3292a4127beadf19dec399fa260150b5
                      /**
                        * When there is a change of uploading photo, show the photo 
                        * and change the label
                        * 
                        * @param {event} event 
                        */
                      onChange={(event) => {
                        if (event?.target?.files?.[0]) {
                          //reads in first file for small image
                          var file1 = event.target.files[0];
                          var reader1 = new FileReader();
                          reader1.onloadend = () => {
                            //sets all small image fields
                            setPreviewImage1(reader1.result);
                            setWidth1(SMALLIMAGE);
                            setHeight1(SMALLIMAGE);
                            setLabelHeight1(0);
                            setBorderStyle1('');
                            setLabelText1('');
                          };
                          reader1.readAsDataURL(file1);
                        }
                      }

                      }
                    //end citation
                    />
                  </label>
                  <img
                    id="imagePreview1"
                    src={previewImage1 ? previewImage1 : ''}
                    style={{
                      width: imgWidth1,
                      height: imgHeight1,
                      cursor: 'pointer',
                      objectFit: 'cover',
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
                    style={{ width: '115px', height: labelHeight2 ?? 115, border: borderStyle2 ?? '2px dashed white', cursor: 'pointer', display: 'inline-block' }}
                  >
                    {labelText2 ?? 'Add Image'}
                    <input
                      id="image2"
                      name="image2"
                      type="file"
                      accept="image/*"
                      style={{ display: "none" }}
                      //Author: Leigh Halliday -> https://github.com/leighhalliday/house-course/commit/eaee0e8b3292a4127beadf19dec399fa260150b5
                      /**
                  * When there is a change of uploading photo, show the photo 
                  * and change the label
                  * 
                  * @param {event} event 
                  */
                      onChange={(event) => {
                        if (event?.target?.files?.[0]) {
                          //reads in first file from upload
                          var file = event.target.files[0];
                          var reader = new FileReader();
                          reader.onloadend = () => {
                            //sets all small image fields
                            setPreviewImage2(reader.result);
                            setWidth2(SMALLIMAGE);
                            setHeight2(SMALLIMAGE);
                            setLabelHeight2(0);
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
                    src={previewImage2 ? previewImage2 : ''}
                    style={{
                      width: imgWidth2,
                      height: imgHeight2,
                      cursor: 'pointer',
                      objectFit: 'cover',
                    }}
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
                    style={{ width: '115px', height: labelHeight3 ?? 115, border: borderStyle3 ?? '2px dashed white', cursor: 'pointer', display: 'inline-block' }}
                  >
                    {labelText3 ?? 'Add Image'}
                    <input
                      id="image3"
                      name="image3"
                      type="file"
                      accept="image/*"
                      style={{ display: "none" }}
                      //Author: Leigh Halliday -> https://github.com/leighhalliday/house-course/commit/eaee0e8b3292a4127beadf19dec399fa260150b5
                      /**
                  * When there is a change of uploading photo, show the photo 
                  * and change the label
                  * 
                  * @param {event} event 
                  */
                      onChange={(event) => {
                        if (event?.target?.files?.[0]) {
                          //reads in first file from upload
                          var file = event.target.files[0];
                          var reader = new FileReader();
                          reader.onloadend = () => {
                            //sets all small image fields
                            setPreviewImage3(reader.result);
                            setWidth3(SMALLIMAGE);
                            setHeight3(SMALLIMAGE);
                            setLabelHeight3(0);
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
                    style={{
                      width: imgWidth3,
                      height: imgHeight3,
                      cursor: 'pointer',
                      objectFit: 'cover',
                    }}
                    src={previewImage3 ? previewImage3 : ''}
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
                <div style={{ width: '22%', margin: '0 0px 0px 0px', float: 'left' }}>
                  <label
                    htmlFor="image4"
                    style={{ width: '115px', height: labelHeight4 ?? 115, border: borderStyle4 ?? '2px dashed white', cursor: 'pointer', display: 'inline-block' }}
                  >
                    {labelText4 ?? 'Add Image'}
                    <input
                      id="image4"
                      name="image4"
                      type="file"
                      accept="image/*"
                      style={{ display: "none" }}
                      //Author: Leigh Halliday -> https://github.com/leighhalliday/house-course/commit/eaee0e8b3292a4127beadf19dec399fa260150b5
                      //Author: Leigh Halliday -> https://github.com/leighhalliday/house-course/commit/eaee0e8b3292a4127beadf19dec399fa260150b5
                      /**
                  * When there is a change of uploading photo, show the photo 
                  * and change the label
                  * 
                  * @param {event} event 
                  */
                      onChange={(event) => {
                        if (event?.target?.files?.[0]) {
                          //reads in first uploaded file
                          var file = event.target.files[0];
                          var reader = new FileReader();
                          reader.onloadend = () => {
                            //sets all small image fields
                            setPreviewImage4(reader.result);
                            setWidth4(SMALLIMAGE);
                            setHeight4(SMALLIMAGE);
                            setLabelHeight4(0);
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
                    style={{
                      width: imgWidth4,
                      height: imgHeight4,
                      cursor: 'pointer',
                      objectFit: 'cover',
                    }}
                    src={previewImage4 ? previewImage4 : ''}
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
              <label>
                <input
                  id="title"
                  type="text"
                  style={{ color: 'black' }}
                  value={title}
                  placeholder='Title'
                  onChange={e => setTitle(e.target.value)}
                  //confirms that users submit a title under 50 characters
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
              <label>

                <input type="text"
                  style={{ color: 'black' }}
                  value={price}
                  placeholder='Price'
                  onChange={e => setPrice(e.target.value)}
                  //confirms that users submit a price under 10 digits
                  {...register("price", {
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

                <input type="text"
                  style={{ color: 'black' }}
                  value={description}
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

              <select name="category"
                id="category"
                style={{ color: 'black' }}
                defaultValue=""
                value={cat}
                onChange={e => setCat(e.target.value)}
                //confirms that users submit a category
                {...register("category", {
                  required: 'Please choose one'
                })}

              >
                <option value=""
                  disabled selected>Category</option>
                <option value="textbook" >Textbook </option>
                <option value="furniture">Furniture</option>
                <option value="appliances">Appliance</option>
                <option value="clothing">Clothing</option>
                <option value="service">Service</option>
                <option value="carpool">Carpool</option>
              </select>
              <small style={{ color: 'red' }}>
                <br></br>
                {errors?.category && errors.category.message}
              </small><br></br>
              <label for="condition" > </label>

              <select name="condition"
                id="condition"

                value={cond}
                onChange={e => setCond(e.target.value)}
                //confirms that users submit a condition
                {...register("condition", {
                  required: 'Please choose one'
                })}

              >
                <option value="" disabled selected >Condition</option>
                <option value="new">New</option>
                <option value="used-like new">Used-Like New</option>
                <option value="used-good">Used-Good</option>
                <option value="used-fair">Used-Fair</option>
              </select>
              <small style={{ color: 'red' }}>
                <br></br>
                {errors?.condition && errors.condition.message}
              </small>
              <br></br>
              <label for="location" > </label>

              <select name="location"
                id="location"

                value={loc}
                onChange={e => setLoc(e.target.value)}
                //confirms that users submit a location
                {...register("location", {
                  required: 'Please choose one'
                })}

              >
                <option value="" disabled selected >Location</option>
                <option value="eastcampus">East Campus</option>
                <option value="westcampus">West Campus</option>
                <option value="offcampus">Off Campus</option>
              </select>
              <br></br>
              <small style={{ color: 'red' }}>
                {errors?.location && errors.location.message}
              </small>
              <br></br>
              <label>
                <input
                  id="email"
                  type="email"
                  style={{ color: 'black' }}
                  value={email}
                  placeholder='Email'
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
              <label>
                <input
                  id="phonenumber"
                  type="tel"
                  style={{ color: 'black' }}
                  value={phonenumber}
                  placeholder='Phone Number'
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


              <button style={{ width: '100px', height: '50px', alignItems: 'center', margin: "0 0 0 135px" }}>Submit</button>
            </div>
          </form>
          <p id="readIn">
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