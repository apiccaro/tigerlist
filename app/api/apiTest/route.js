//This file has some useful tests, api methods that dont rely on the database or anything likely to break ever.

import { NextResponse } from 'next/server';
import sendMail from './../../moderation/sendMail';




/**
 * Simple GET, nothing passed either direction
 */
export async function GET(request){
    console.log("Using apiTest/route.js (GET) to test basic API functionality")    
    return NextResponse.json('sample response text (GET method)')
}


/**
 * PUT method, get a message and print it
 * @returns message
 */
export async function PUT(request){
    console.log("Using apiTest/route.js (PUT) to test basic API functionality")

    var reqParsed = await request.json()

    if (reqParsed.message){
        console.log(reqParsed.message)
    }
    console.log("recieved: "+reqParsed)
    emailNotify(reqParsed)
    
    return NextResponse.json('Got and returned "'+(reqParsed.message+'"'||'a PUT request with no message field'))
}


/**
 * Trigger a simple email send
 * @param {*} request - not used
 * @returns confirmation of success or error
 */
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




