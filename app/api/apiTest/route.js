import { NextResponse } from 'next/server';

export async function GET(request){

    //const req = await request.json()
    console.log("Using apiTest/route.js to test basic API functionality") //debug print
    //console.log("request content: \n",req)

    return NextResponse.json('response text')

}




