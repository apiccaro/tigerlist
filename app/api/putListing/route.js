import { NextResponse } from 'next/server';

export async function PUT(request){
    //Get request as json. Might need to cast something or ensure postDict is a dictionary  
    const postDict = await request.json()

    //Debug prints
    console.log("Attempting to add a listing with content:\n"+postDict+"\n")
    console.log("\nAs string:\n"+JSON.stringified(postDict)+"\n")
    console.log("\nTitle with '.': "+postDict.title+"\n")
    console.log("\nTitle with '[]': "+postDict['title']+"\n")


    //Build query. Will make this cleaner with $ once this works.
    const queryText = "INSERT INTO PostTable "
    +"(title, price, description, "
    +"category, condition, location, "
    +"email, phone, active,"
    +" flagged, moderator_ban) "

    +"VALUES ('"+postDict['title']+"', '"+postDict['title']+"', '"+postDict['title']+"', "
    +"'"+postDict['title']+"', '"+postDict['title']+"', '"+postDict['title']+"', "
    +"'"+postDict['title']+"', '"+postDict['title']+"', "
    +postDict['flagged']+", "+postDict['flagged']+", "+postDict['flagged']+");"


    //From here down should be pretty much the same for every route.js

    //Make client with credentials
    const { Client } = require('pg');
    const client = new Client({
        user: 'postgres',
        host: '10.3.0.49',
        port: 5432,
    });
    
    //Try to connect to database and query.
    let query_suceeded = false
    try {
        await client.connect();
        const result = await client.query(queryText);
        query_suceeded = true
    } 
    catch (error) {
        console.error('Error executing query:', error);
        query_suceeded = false
    } 
    finally {
        await client.end();
    }

    //Declare success or send error back
    if (query_suceeded){
        console.log("Seems like the query worked!")
        console.log("Result:\n\n",result)

        return  NextResponse.json('true')
    }
    return NextResponse.error('false');
}