import { NextResponse } from 'next/server';
export async function PUT(request){
    
    //Convert given request from json response into a javascript object
    const postDict = await request.json()


    //Assemble string components for database query text
    const queryText =
        "UPDATE PostTable SET " +
        "title = $1, " +
        "price = $2, " +
        "description = $3, " +
        "category = $4, " +
        "condition = $5, " +
        "location = $6, " +
        "email = $7, " +
        "phoneValue = $8, " +
        "active = $9, " +
        "flagged = $10, " +
        "moderator_ban = $11 " +
        "images = $12 " +
        "WHERE post_key = $13;";


    const queryValues = [
        postDict['title'],
        postDict['price'],
        postDict['description'],
        postDict['category'],
        postDict['condition'],
        postDict['location'],
        postDict['email'],
        postDict['phoneValue'],
        postDict['active'],
        postDict['flagged'],
        postDict['moderator_ban'],
        postDict['images'],
        postDict['post_key']
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
        return  NextResponse.json(result.rows)
        //return NextResponse.json('true') //(previous version) Not sure what annika actually wanted to be returned here. will test.
    }
    else{
        console.error('Error executing query:', "somehow the try block didnt finish yet no error was caught");
        console.log("Attempted Query: ",(queryText,queryValues))
        return  NextResponse.json('false')
    }

}