// The product name and image layout that are placed in the product grid
'use client'

import { useState } from 'react';
import Image from 'next/image';

  const PNI = ({post_key, title, price, description, category, condition, location, email, phone, images, flagged}) => {


    const [previewImage, setPreviewImage] = useState();
    const [previewImage1, setPreviewImage1] = useState();
    const [previewImage2, setPreviewImage2] = useState();
    const [previewImage3, setPreviewImage3] = useState();
    const [previewImage4, setPreviewImage4] = useState();



    //image sizing logic 

    var width = 100
    var height = 500

    var maxwidth = 100
    var maxheight = 100

    var yscale = maxheight / height
    var xscale = maxwidth / width

    var scale = xscale;
    if (yscale<xscale){
        scale = yscale
    }



    function getDims(){

    }







    //debug print. Cant for the life of me tell why ID always comes undefined, but everything else is fine
    // var argstring = 
    // "\nID: "+ID+"\ntitle: "+title+ "\nprice: "+price
    // +"\ndescription: "+description+ "\ncategory: "+category
    // + "\ncondition: "+condition+"\nlocation: "+location
    // + "\nemail: "+email+ "\nphone: "+phone
    // + "\nimages: "+images+"\nflagged: "+flagged

    // console.log("Whole given object: ",argstring)




    //Get a better image array by replacing a first null image with default, and other nulls with blank image.

    const { getCategoryImage} = require('./imageTools');
    const defaultUrl = getCategoryImage(category)
    const nullUrl = '/empty100x100.png'

    // console.log("images: ",images)
    images.forEach((image, index) => {
        if (image == null || image == "") {
            // console.log("null image triggered:")
            if (index === 0) {
                // console.log("first image was null")
                // console.log("true null: ",images[0]==null)
                // console.log("empty string: ",images[0]=="")
                images[0] = defaultUrl;
            } else {
                images[index] = nullUrl;
            }
        }
    });
    
    //overwriting with predetermined arrays
    //images = [defaultUrl,nullUrl,nullUrl,nullUrl,nullUrl,nullUrl]
    //images = customImageArray(ID,category)

    //set images to values from array
    var originalImage = images[0];
    var originalImage1 = images[1];
    var originalImage2 = images[2];
    var originalImage3 = images[3];
    var originalImage4 = images[4];

    // Need catches for when any of the images are null
    return(
        <aside className="flex flex-col text-white p-4">
            <h2 className="flex pl-10 mt-5 text-black text-4xl font-semibold"> {title} </h2>
            <h2 className="flex pl-10 mt-5 text-white text-3xl font-semibold"> {price} </h2>

            <div style={{ float: "left", margin: "10px 40px 0 30px"}}>
                <img
                id="imagePreview"
                //if no previewImage- load in the original image
                src={previewImage ? previewImage : originalImage? setPreviewImage(originalImage):"/photo.svg"}
                //if not original image- do not show image component at all
                //style={{ width: `${dimensions.width}px`, height: `${dimensions.height}px` }}

                style={{
                    borderRadius: '10px',
                    objectFit: 'scale-down',

                    width: originalImage || previewImage ? '630px' : 0,
                    height: originalImage || previewImage ? '400px' : 0,
                    //sorry this is ugly for now
                    //basically im getting the dimensions of whichever image ends up being used. If the replacement was more straightforward we could tie dimensions to each image before handing off.
                    // width: (originalImage ? `${originalImage.width}px` : (previewImage ? `${previewImage.width}px` : 0)),
                    // height: (originalImage ? `${originalImage.height}px` : (previewImage ? `${previewImage.height}px` : 0)),
                    


                }}
                

                />
                <div style={{ display: 'inline-block' }}>
                <div style={{ width: '22%', margin: '0 15.5px 0px 0px', float: 'left'}}>
                    <img
                    id="imagePreview1"
                    //if no previewImage- load in the original image
                    src={previewImage1 ? previewImage1 : originalImage1? setPreviewImage1(originalImage1):"/photo.svg"}
                    //if not original image- do not show image component at all
                    style={{
                        borderRadius: '10px',
                        objectFit: 'cover',
                        cursor: 'pointer',
                        width: originalImage || previewImage ? '150px' : 0,
                        height: originalImage || previewImage ? '100px' : 0,
                    }}
                    /**
                     * When you click the image it swaps with the main big image
                     * @param {event} event
                     */
                    onClick={(event) => {
                        // if (originalImage1 = '/empty100x100.png'){console.log("clicked on empty image")}
                        // else{
                            var replace = previewImage;
                            setPreviewImage(previewImage1)
                            setPreviewImage1(replace)
                        // }
                    }
                    }
                    />
                </div>
                <div style={{ width: '22%', margin: '0 15.5px 0px 0px', float: 'left'}}>
                    <img
                    id="imagePreview2"
                    //if no previewImage- load in the original image
                    //src={previewImage2 ? previewImage2 : setPreviewImage2(originalImage2)}
                    src={previewImage2 ? previewImage2 : originalImage2? setPreviewImage2(originalImage2):"/photo.svg"}
                    //if not original image- do not show image component at all
                    style={{
                        borderRadius: '10px',
                        objectFit: 'cover',
                        cursor: 'pointer',
                        width: originalImage || previewImage ? '150px' : 0,
                        height: originalImage || previewImage ? '100px' : 0,
                    }}
                    /**
                    * When you click the image it swaps with the main big image
                    * @param {event} event
                    */
                    onClick={(event) => {
                        // if (originalImage2 = '/empty100x100.png'){console.log("originalimage2 is empty!!!")}
                        // else{
                            var replace = previewImage;
                            setPreviewImage(previewImage2)
                            setPreviewImage2(replace)
                        // }
                    }
                    }
                    />
                </div>
                <div style={{ width: '22%', margin: '0 15.5px 0px 0px', float: 'left'}}>
                    <img
                    id="imagePreview3"
                    //if no previewImage- load in the original image
                    //src={previewImage3 ? previewImage3 : setPreviewImage3(originalImage3)}
                    src={previewImage3 ? previewImage3 : originalImage3? setPreviewImage3(originalImage3):"/photo.svg"}
                    //if not original image- do not show image component at all
                    style={{
                        borderRadius: '10px',
                        objectFit: 'cover',
                        cursor: 'pointer',
                        width: originalImage || previewImage ? '150px' : 0,
                        height: originalImage || previewImage ? '100px' : 0,
                    }}
                    /**
                    * When you click the image it swaps with the main big image
                    * @param {event} event
                    */
                    onClick={(event) => {
                        // if (originalImage3 = '/empty100x100.png'){console.log("clicked on empty image")}
                        // else{
                            var replace = previewImage;
                            setPreviewImage(previewImage3)
                            setPreviewImage3(replace)
                        // }    
                    }
                    }
                    />
                </div>
                <div style={{ width: '22%', margin: '0 15.5px 0px 0px', float: 'left'}}>
                    <img
                    id="imagePreview4"
                    //if no previewImage- load in the original image
                    //src={previewImage4 ? previewImage4 : setPreviewImage4(originalImage4)}
                    src={previewImage4 ? previewImage4 : originalImage4? setPreviewImage4(originalImage4):"/photo.svg"}
                    //if not original image- do not show image component at all
                    style={{
                        borderRadius: '10px',
                        objectFit: 'cover',
                        cursor: 'pointer',
                        width: originalImage || previewImage ? '150px' : 0,
                        height: originalImage || previewImage ? '100px' : 0,
                    }}
                    /**
                    * When you click the image it swaps with the main big image
                    * @param {event} event
                    */
                    onClick={(event) => {
                        // if (originalImage4 = '/empty100x100.png'){console.log("clicked on empty image")}
                        // else{
                            var replace = previewImage;
                            setPreviewImage(previewImage4)
                            setPreviewImage4(replace)
                        // }
                        
                    }
                    }
                    />
                </div>


                </div>

            </div>
                
        </aside>
    );
}

export default PNI;