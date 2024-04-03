import { NextResponse } from 'next/server';

const { getClient } = require('./dbTools/dbTools');

export async function DELETE(post_key){



    //Assemble string for database query
    const queryText = "DELETE FROM PostTable WHERE post_key = '$1';"
    const queryValues = [postDict['post_key']];


    //Instantiate database client instance
    const client = getClient();
      

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
        console.log("Database successfully queried with api/deleteListing") //comment out once everything is properly tested.
        return  NextResponse.json('true')
    }
    else{
        console.error('Error executing query:', "somehow the try block didnt finish yet no error was caught");
        console.log("Attempted Query: ",(queryText,queryValues))
        return  NextResponse.json('false')
    }
    
}
      

    