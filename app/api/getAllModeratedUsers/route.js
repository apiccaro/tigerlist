import { NextResponse } from 'next/server';
export async function GET() {

    //Assemble string for database query
    const queryText = "SELECT * FROM UserTable WHERE moderator = true;"


    //Instantiate database client instance
    const { Client } = require('pg');
    const client = new Client({
        user: 'postgres',
        host: '10.3.0.49',
        port: 5432,
    });
    

    //Try to connect to database and query.

    let error_status;
    let result;

    try {
        await client.connect();
        result = await client.query(queryText);
    } 
    catch (error) {
        error_status = error
    } 
    await client.end();
    console.log("api/getAllListings: Database client closed")


    //Debug print to verify successful query 
    //console.log("api/getAllListings: printing a row from the result: ")
    //console.log(result.rows[68])

    //Log result to console
    if (error_status === undefined){
        console.log("Database successfully queried with api/getAllListings") //comment out once everything is properly tested.
        return  NextResponse.json(result.rows)
    }
    else{
        console.error('api/getAllListings: Error executing query - ', error_status);
        console.log("Attempted Query: ",queryText)
        return  NextResponse.json('false')
    } 

}


