import { NextResponse } from 'next/server';
export async function POST(request) {


    //console.log("Using getUserListings/route.js to get a set of listings") //debug print
    
    const requestObject = await request.json()
    var userEmail = requestObject.email;


    //Assemble string for database query
    const queryText = "SELECT * FROM PostTable WHERE email = $1 ORDER BY post_timestamp DESC NULLS LAST;;"
    const queryValues = [userEmail];

    //Instantiate database client instance
    const { getClient } = require('./../dbTools/dbTools');
    const client = getClient();


    //Try to connect to database and query.
    let error_status;
    let result;

    try {
        await client.connect();
        result = await client.query(queryText,queryValues);
    } 
    catch (error) {
        error_status = error
    } 

    await client.end();
    console.log("api/getUserListings: Database client closed")


    //Debug print to verify successful query 
    //console.log("api/getAllListings: printing a row from the result: ")
    //console.log(result.rows[68])

    //Log result to console
    if (error_status === undefined){
        console.log("Database successfully queried with api/getUserListings")
        return  NextResponse.json(result.rows)
    }
    else{
        console.error('api/getUserListings: Error executing query - ', error_status);
        console.log("Attempted Query: ",queryText)
        return  NextResponse.json('false')
    } 
}

