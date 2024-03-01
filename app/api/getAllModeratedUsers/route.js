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
    let query_status = -1
    let error_status = null

    try {
        await client.connect();
        const result = await client.query(queryText);
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
        console.log("Attempted Query: ",queryText)
        return  NextResponse.json('false')
    }
    else if (query_status == 1){
        console.log("Database successfully queried with api/getAllModeratedUsers") //comment out once everything is properly tested.
        return  NextResponse.json(result.rows)
        //return NextResponse.json('true') //(previous version) Not sure what annika actually wanted to be returned here. will test.
    }
    else{
        console.error('Error executing query:', "somehow the try block didnt finish yet no error was caught");
        console.log("Attempted Query: ",queryText)
        return  NextResponse.json('false')
    }

}


