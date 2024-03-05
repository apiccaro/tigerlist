import { NextResponse } from 'next/server';

export async function GET(request){
    // co?nsole.log(await request.json())


    const req = await request.json()


    console.log("Using apiTest/route.js to test basic API functionality") //debug print
    console.log("request content: \n",req)
    console.log("request body: \n",req.body)


    //Convert given request from json response into a javascript object

    const requestJson = await request.json()

    //Return 'true'

    return NextResponse.json('true')

}

