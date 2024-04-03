import { NextResponse } from 'next/server';

const {sendDefault} = require ('./../../moderation/sendMail');


export async function GET(request){
    console.log("Using apiTest/route.js (GET) to test basic API functionality")
    return NextResponse.json('sample response text (GET method)')
}

// export async function POST(request){
//     console.log("Using apiTest/route.js (POST) to test basic API functionality") 
//     return NextResponse.json('sample response text (POST method)')
// }


export async function POST(request){
    console.log("Using apiTest to try and send an email") 
    sendDefault();
    return NextResponse.json('response text')
}




