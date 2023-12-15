import { NextResponse } from 'next/server';

export async function GET(listing_key) {

  queryText = "SELECT * FROM PostTable WHERE post_key = '"+listing_key+"';"

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
        return  NextResponse.json(result.rows)
    }
    else{
        return NextResponse.error('false');
    }
    //return NextResponse.json({dict1,dict2});
  }

