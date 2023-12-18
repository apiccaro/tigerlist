import { NextResponse } from 'next/server';
export async function PUT(request){
    
    //Convert given request from json response into a javascript object
    const postDict = await request.json()


    //Assemble string components for database query text
    const queryText =
        "UPDATE UserTable SET " +
        "moderator = false " +
        "WHERE email = $1;";

    const queryValues = [
        postDict['email']
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
    if (query_status = 0){
        console.error('Error executing query:', error_status);
        console.log("Attempted Query: ",(queryText,queryValues))
        return  NextResponse.json('false')
    }
    else if (query_status = 1){
        console.log("Database successfully queried") //comment out once everything is properly tested.
        return  NextResponse.json(result.rows)
    }
    else{
        console.error('Error executing query:', "somehow the try block didnt finish yet no error was caught");
        console.log("Attempted Query: ",(queryText,queryValues))
        return  NextResponse.json('false')
    }

}