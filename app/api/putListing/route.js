import { NextResponse } from 'next/server';

export async function PUT(request){

    console.log("Using putListing/route.js to add a listing") //debug print

    //Convert given request from json response into a javascript object
    const postDict = await request.json()
    console.log("Title: ",postDict.title)

    //Build query string - Need to change format so certain input characters don't break it. 
    const queryText = "INSERT INTO PostTable" 
    + " (title, price, description, category, condition, location, email, phoneValue, active, flagged, moderator_ban, images)" 
    + " VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12 )";
  
    const queryValues = [
        postDict.title,
        postDict.price,
        postDict.description,
        postDict.category,
        postDict.condition,
        postDict.location,
        postDict.email,
        postDict.phoneValue,
        postDict.active,
        postDict.flagged,
        postDict.moderator_ban,
        postDict.images
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
        return  NextResponse.json('true')
    }
    else{
        console.error('Error executing query:', "somehow the try block didnt finish yet no error was caught");
        console.log("Attempted Query: ",(queryText,queryValues))
        return  NextResponse.json('false')
    }

}

