import { NextResponse } from 'next/server';
import sendMail from './../../moderation/sendMail';
import {queryDB,reportOutcome} from '../dbTools/dbTools'

async function emailNotify(listingData){

    //Determine email title and content based on post data
    var emailTitle = "Flagged Listing: "+(listingData.title||"couldn't get title")

    var emailBody =
    "User email: " + listingData.email
    + "\n\nTitle: " + listingData.title
    + "\nprice: " + listingData.price 
    + "\ndescription: " + listingData.description

    //Try sending the email
    //Maybe makes sense to log failures in a db table or text file, since errors wont neccesarrily happen when youre sitting at the computer
    try {
        await sendMail(emailTitle,emailBody); 
        console.log("Email sent");
        return NextResponse.json("Email sent");
    } catch (error) {
        console.error("Error sending email:", error);
        return NextResponse.error(error.message, { status: 500 });
    }
}




export async function POST(request){
    
    //Convert given request from json response into a javascript object
    const reqObject = await request.json()


    //Assemble string components for database query text
    const queryText =
        "UPDATE PostTable SET " +
        "flagged = $1 " +
        "WHERE post_key = $2;";

    //Assemble string components for database query values
    const queryValues = [
        reqObject['flagged'],
        reqObject['post_key']
    ];

    //query database
    const queryOutcome = queryDB(queryText,queryValues,"flagListing/route.js")

    //report outcome
    reportOutcome(queryText,queryValues,queryOutcome)

    //return true or false based on outcome
    if (queryOutcome.error_status==undefined){
        return NextResponse.json('true')
    }
    else{
        return NextResponse.json('false')
    }
}