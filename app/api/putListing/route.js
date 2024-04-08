import { NextResponse } from 'next/server';
import sendMail from './../../moderation/sendMail'

//Format a notification email and send to a moderator
//Later on i'll want to just hand off the reqObject (or something from query response) and format the email elsewhere
async function emailNotify(listingData){

    //Determine email title and content based on post data
    var emailTitle = 
    "New Listing from " + listingData.email.split('@')[0] 
    + ": " + listingData.title

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

    console.log("Using putListing/route.js to add a listing") //debug print

    //Convert given request from json response into a javascript object
    const reqObject = await request.json()
    const post_key = reqObject.id
    console.log("Object given to api/putlisting:")
    console.log(reqObject)


    //Build query string - Need to change format so certain input characters don't break it. 
    const queryText = "INSERT INTO PostTable" 
    + " (title, price, description, category, condition, location, email, phoneValue, active, flagged, moderator_ban, images)" 
    + " VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12 )";
  
    const queryValues = [
        reqObject.title,
        reqObject.price,
        reqObject.description,
        reqObject.category,
        reqObject.condition,
        reqObject.location,
        reqObject.email,
        reqObject.phoneValue,
        reqObject.active,
        reqObject.flagged,
        reqObject.moderator_ban,
        reqObject.images
    ];


    //Instantiate database client instance
    const { Client } = require('pg');
    const client = new Client({
        user: 'postgres',
        host: '10.3.0.49',
        port: 5432,
    });
    

    //Try to connect to database and query.
    let query_status = -1
    let error_status = null
    let result = null

    console.log("api/putListing: Starting try/catch")

    try {
        console.log("Starting try block in putListing/route.js") //debug print

        await client.connect();
        result = await client.query(queryText,queryValues);
        query_status = 1
    } 
    catch (error) {

        console.log("Starting catch block in putListing/route.js") //debug print
        query_status = 0
        error_status = error
            let result = null
    } 
    finally {
        console.log("api/putListing: Completing try/catch")
    }
    await client.end();



    console.log("Wrapping up putListing/route.js") //debug print

    //Log result to console
    if (query_status == 0){
        console.error('Error executing query:', error_status);
        console.log("Attempted Query: ",(queryText,queryValues))
        return  NextResponse.json('false')
    }
    else if (query_status == 1){
        console.log("Database successfully queried with api/putListing") //comment out once everything is properly tested.
        console.log("Query result:\n",result) //debug print
        console.log("Emailing Jay a notification")
        await emailNotify(reqObject)
        return  NextResponse.json('true')
    }
    else{
        console.error('Error executing query:', "somehow the try block didnt finish yet no error was caught");
        console.log("Attempted Query: ",(queryText,queryValues))
        return  NextResponse.json('false')
    }

}

