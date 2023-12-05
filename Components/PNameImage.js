// The product name and image layout that are placed in the product grid
'use client'

import Image from "next/image";
import { useState } from 'react';

const readInData = () => {
    originalImage = "/ticket.jpeg"
    originalImage1 = "/ticket.jpeg"
    originalImage2="/ticket.jpeg"
    //originalImage3="/ticket.jpeg"

    originalTitle = "couch"
    originalPrice = "2000"
    originalDescription = "black and leather"
    originalCategory = "textbook"
    originalCondition = "new"
    originalLocation = "offcampus"
    originalEmail = "ap@coloradocollege.edu"
    originalPhone = "9787657788"
  }

export default function PNI() {
    const [previewImage, setPreviewImage] = useState();
    const [previewImage1, setPreviewImage1] = useState();
    const [previewImage2, setPreviewImage2] = useState();
    const [previewImage3, setPreviewImage3] = useState();
    const [previewImage4, setPreviewImage4] = useState();
    var originalImage = '/testimage1.jpeg';
    var originalImage1 = '/testimage2.jpeg';
    var originalImage2 = '/testimage3.jpeg';
    var originalImage3 = '/testimage4.jpeg';
    var originalImage4 = '/testimage5.jpeg';
    //var originalImage4 = null;

    // Need catches for when any of the images are null
    return(
        <aside className="flex flex-col text-white p-4">

            <h2 className="flex pl-10 mt-5 text-black text-4xl font-semibold"> Product Name </h2>
            <h2 className="flex pl-10 mt-5 text-white text-3xl font-semibold"> $100 </h2>

            <div style={{ float: "left", margin: "10px 40px 0 30px"}}>
                <img
                id="imagePreview"
                //if no previewImage- load in the original image
                src={previewImage ? previewImage : setPreviewImage(originalImage)}
                //if not original image- do not show image component at all
                style={{
                    borderRadius: '10px',
                    objectFit: 'cover',
                    width: originalImage || previewImage ? '630px' : 0,
                    height: originalImage || previewImage ? '400px' : 0,
                }}
                />
                <div style={{ display: 'inline-block' }}>
                <div style={{ width: '22%', margin: '0 15.5px 0px 0px', float: 'left'}}>
                    <img
                    id="imagePreview1"
                    //if no previewImage- load in the original image
                    src={previewImage1 ? previewImage1 : setPreviewImage1(originalImage1)}
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
                        var replace = previewImage;
                        setPreviewImage(previewImage1)
                        setPreviewImage1(replace)
                    }
                    }
                    />
                </div>
                <div style={{ width: '22%', margin: '0 15.5px 0px 0px', float: 'left'}}>
                    <img
                    id="imagePreview2"
                    //if no previewImage- load in the original image
                    src={previewImage2 ? previewImage2 : setPreviewImage2(originalImage2)}
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
                        var replace = previewImage;
                        setPreviewImage(previewImage2)
                        setPreviewImage2(replace)
                    }
                    }
                    />
                </div>
                <div style={{ width: '22%', margin: '0 15.5px 0px 0px', float: 'left'}}>
                    <img
                    id="imagePreview3"
                    //if no previewImage- load in the original image
                    src={previewImage3 ? previewImage3 : setPreviewImage3(originalImage3)}
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
                        var replace = previewImage;
                        setPreviewImage(previewImage3)
                        setPreviewImage3(replace)
                    }
                    }
                    />
                </div>
                <div style={{ width: '22%', margin: '0 15.5px 0px 0px', float: 'left'}}>
                    <img
                    id="imagePreview4"
                    //if no previewImage- load in the original image
                    src={previewImage4 ? previewImage4 : setPreviewImage4(originalImage4)}
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
                        var replace = previewImage;
                        setPreviewImage(previewImage4)
                        setPreviewImage4(replace)
                    }
                    }
                    />
                </div>


                </div>

            </div>
                
        </aside>
    );
}