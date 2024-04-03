import { NextResponse } from 'next/server';
import sendMail from './../../moderation/sendMail';

export async function GET(request){
    console.log("Using apiTest/route.js (GET) to test basic API functionality")
    return NextResponse.json('sample response text (GET method)')
}

// export async function POST(request){
//     console.log("Using apiTest/route.js (POST) to test basic API functionality") 
//     return NextResponse.json('sample response text (POST method)')
// }


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




