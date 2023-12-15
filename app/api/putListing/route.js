import { NextResponse } from 'next/server';

export async function PUT(request){
    //converts listing from string to json
    const postDict = await request.json()

    //Debug prints
    // console.log("\npostDict.title: "+postDict.title+"\n")
    // console.log("\npostDict.phone: "+postDict.phone+"\n")
    //console.log("\npostDict.price: "+postDict.price+"\n")
    //console.log("\npostDict.category: "+postDict.category+"\n")

    //Build query string - Need to change format so certain input characters don't break it. 
   const queryText = "INSERT INTO PostTable "
    +"(title, price, description, "
    +"category, condition, location, "
    +"email, phone, active, "
    +"flagged, moderator_ban) "
    +"VALUES ('"+postDict.title+"', '"+postDict.price+"', '"+postDict.description+"', "
    +"'"+postDict.category+"', '"+postDict.condition+"', '"+postDict.location+"', "
    +"'"+postDict.email+"', '"+postDict.phone+"', '"+postDict.active+"', "
    +postDict.flagged+", "+postDict.flagged+");"

    
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