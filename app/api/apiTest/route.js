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

    var title = "Sample Title"
    var price = "10"
    var description = "Sample Description"

    var emailBody = "Post Contents:"
    + "\nTitle: " + title
    + "\nprice: " + price 
    + "\ndescription: " + description

    console.log("Using apiTest to try and send an email") 
    try {
        await sendMail(emailBody); 
        console.log("Email sent");
        return NextResponse.json("Email sent");
    } catch (error) {
        console.error("Error sending email:", error);
        return NextResponse.error(error.message, { status: 500 });
    }
}




