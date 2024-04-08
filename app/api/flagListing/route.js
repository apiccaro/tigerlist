import { NextResponse } from 'next/server';
import sendMail from './../../moderation/sendMail';

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



    const queryValues = [
        reqObject['flagged'],
        reqObject['post_key']
    ];


    //Instantiate database client instance
    const { Client } = require('pg');
    const client = new Client({
        user: 'postgres',
        host: '10.3.0.49',
        port: 5432,
    });
    

    //Try to connect to database and query.
    var error_status;
    var result;
    
    try {
        await client.connect();
        result = await client.query(queryText,queryValues);
    } 
    catch (error) {
        console.log("Caught error in putListing/route.js") //debug print
        error_status = error
    } 
    await client.end();


    //Log result to console
    if (error_status){
        console.error('Error executing query:', error_status);
        console.log("Attempted Query: ",(queryText,queryValues))
        return  NextResponse.json('false')
    }
    else {
        console.log("Database successfully queried with api/flagListing") //comment out once everything is properly tested.
        console.log("Query result:\n",result) //debug print
        emailNotify(reqObject)
        return  NextResponse.json(true)
    }



}