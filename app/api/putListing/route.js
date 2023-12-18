import { NextResponse } from 'next/server';

export async function PUT(request){
<<<<<<< HEAD

    //Convert given request from json response into a javascript object
    const postDict = await request.json()

    //Build query string - Need to change format so certain input characters don't break it. 
    const queryText = "INSERT INTO PostTable" 
    + " (title, price, description, category, condition, location, email, phone, active, flagged, moderator_ban)" 
    + " VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)";
  
    const queryValues = [
        postDict.title,
        postDict.price,
        postDict.description,
        postDict.category,
        postDict.condition,
        postDict.location,
        postDict.email,
        postDict.phone,
        postDict.active,
        postDict.flagged,
        postDict.moderator_ban
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
        return  NextResponse.json('true')
    }
    else{
        console.error('Error executing query:', "somehow the try block didnt finish yet no error was caught");
        console.log("Attempted Query: ",(queryText,queryValues))
        return  NextResponse.json('false')
    }

}

=======
const listing= await request.json()
console.log(listing.title);
return  NextResponse.json("true")
}
>>>>>>> 789a115d4563edeabc9328fd25d9b035f65d9750
