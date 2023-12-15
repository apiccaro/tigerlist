import { NextResponse } from 'next/server';
export async function PUT(request) {

    const listing = await request.json()
    console.log("\n\nlisting: ",listing)
    console.log("\n\nlisting.title: ",listing.title)
    console.log("\n\nlisting.listing.title: ",listing.listing.title)

    //console.log("\n\nlisting['title']: ",listing['title'])
    console.log("\n\nlisting.body: ",listing.body)


    const postDict = await request.json()
    console.log("\n\n\nJSON.stringify(postDict): ",JSON.stringify(postDict))
    console.log("\n\n\npostDict: ",request)
    console.log("\n\n\npostDict.title: ",request.title)
    console.log("\n\n\npostDict['title']: ",request['title'])

    //console.log("type of 'request.json()': ",typeof(request.json()))
    //console.log("type of 'postDict': ",typeof(postDict))

    //console.log("Attempting to add a listing with content:\n"+postDict+"\n")
    //console.log("\nStringified:\n"+JSON.stringify(postDict)+"\n")
    //console.log("\nTitle with '.': "+postDict.title+"\n")
    //console.log("\nTitle with '[]': "+postDict['title']+"\n")

    //console.log("postDict instanceof Dictionary: ",postDict instanceof Dictionary); 
    //console.log("postDict instanceof Dictionary: ",postDict instanceof Dictionary);

    const test_title = "PUT";
    const test_message = "test text";
    //const queryText = "INSERT INTO TestTable (title, text1) VALUES ($1, $2)";

    const queryText = "INSERT INTO PostTable (title) VALUES ('Hardcoded'); "


    const { Client } = require('pg');
    const client = new Client({
        user: 'postgres',
        host: '10.3.0.49',
        port: 5432,
//        database: 'tigerlistDB',
//        password: 'postgres',
    });

    let query_succeeded = false;

    try {
        await client.connect();

        const result = await client.query(queryText);
        console.log('Query result:', result);

        query_succeeded = true;
    } catch (error) {
        console.error('Error executing query:', error);
        return NextResponse.error('Error executing query: ' + error.message);
    } finally {
        await client.end();
    }

    if (query_succeeded) {
        return NextResponse.ok('Query seemed successful');
    } else {
        return NextResponse.error('Query failed');
    }
}
