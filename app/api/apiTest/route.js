import { NextResponse } from 'next/server';
import sendMail from './../../moderation/sendMail';

export async function GET(request){
    console.log("Using apiTest/route.js (GET) to test basic API functionality")    
    return NextResponse.json('sample response text (GET method)')
}

export async function PUT(request){
    console.log("Using apiTest/route.js (PUT) to test basic API functionality")

    var reqParsed = await request.json()

    if (reqParsed.message){
        console.log(reqParsed.message)
    }
    return NextResponse.json('Got and returned "'+(reqParsed.message+'"'||'a PUT request with no message field'))
}



async function emailNotify(listingData){

    //Determine email title and content based on post data
    var emailTitle = 
    "Flagged Listing from " + listingData.email.split('@')[0] 
    + ": " + listingData.title

    // var emailBody =
    // "User email: " + listingData.email
    // + "\n\nTitle: " + listingData.title
    // + "\nprice: " + listingData.price 
    // + "\ndescription: " + listingData.description

    var emailBody = "Thats all for now"


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

    var emailTitle = "apiTest confirmation"
    var emailBody = "This email was triggered by an apiTest POST request"

    console.log("Using apiTest to try and send an email") 
    try {
        await sendMail(emailTitle,emailBody); 
        console.log("Email sent");
        return NextResponse.json("Email sent");
    } catch (error) {
        console.error("Error sending email:", error);
        return NextResponse.error(error.message, { status: 500 });
    }
}




