import { NextResponse } from 'next/server';
export async function PUT(request){

    const postDict = await request.json()

    //Build query. Will make this cleaner with $ once this works.
    const queryText = (
            "UPDATE PostTable SET"
            + "title = '" + postDict['title'] + "', "
            + "price = '" + postDict['price'] + "', "
            + "description = '" + postDict['description'] + "', "
            + "category = '" + postDict['category'] + "', "
            + "condition = '" + postDict['condition'] + "', "
            + "location = '" + postDict['location'] + "', "
            + "email = '" + postDict['email'] + "', "
            + "phone = '" + postDict['phone'] + "', "
            + "active = '" + postDict['active'] + "', "
            + "flagged = " + postDict['flagged'] + ", "
            + "moderator_ban = " + postDict['moderator_ban'] + " "
            + "WHERE post_key = '" + postDict['post_key'] + "';"
        )

    //From here down should be pretty much the same for every route.js (unless we're getting something)

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
        //query_suceeded = false
    } 
    finally {
        await client.end();
    }

    //Declare success or send error back
    if (query_suceeded){
        //console.log("Seems like the query worked!")
        //console.log("Result:\n\n",result)
        return  NextResponse.json('true')
    }
    else{
        return NextResponse.error('false');
    }
}