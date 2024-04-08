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
    let query_status = -1
    let error_status = null

    try {
        await client.connect();
        const result = await client.query(queryText,queryValues);
        query_status = 1
    } 
    catch (error) {
        query_status = 0
        error_status = error
    } 
    finally {
        await client.end();
    }


    //Log result to console
    if (query_status == 0){
        console.error('Error executing query:', error_status);
        console.log("Attempted Query: ",(queryText,queryValues))
        return  NextResponse.json('false')
    }
    else if (query_status == 1){
        console.log("Database successfully queried with api/editListing") //comment out once everything is properly tested.
        if(reqObject.flagged){
            emailNotify(reqObject)
        }
        return  NextResponse.json(result.rows)
        //return NextResponse.json('true') //(previous version) Not sure what annika actually wanted to be returned here. will test.
    }
    else{
        console.error('Error executing query:', "somehow the try block didnt finish yet no error was caught");
        console.log("Attempted Query: ",(queryText,queryValues))
        return  NextResponse.json('false')
    }

}