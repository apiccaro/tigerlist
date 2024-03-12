import { NextResponse } from 'next/server';
export async function GET() {

    //Assemble string for database query
    const queryText = "SELECT * FROM PostTable WHERE active = true AND flagged = true;";


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
    finally {
        //console.log("api/getAllListings: Completing try/catch")
    }
    await client.end();
    console.log("api/getAllListings: Database client closed")



    
    //Log result to console
    if (error_status === undefined){
        console.log("Database successfully queried with api/getAllFlaggedListings") //comment out once everything is properly tested.
        return  NextResponse.json(result.rows)
    }
    else{
        console.error('api/getAllFlaggedListings: Error executing query - ', error_status);
        console.log("Attempted Query: ",queryText)
        return  NextResponse.json('false')
    } 



}

