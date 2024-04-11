import { NextResponse } from 'next/server';
const { queryDB,reportOutcome } = require('./../dbTools');

/** api/getListing takes a given post_key and returns the post corresponding to it
 * 
 * @returns listing corresponding to post_key
 */
export async function POST(request){
    
    //Convert given request from json response into a javascript object
    const reqObject = await request.json()
    const post_key = reqObject.post_key
    
    //Assemble string structure for database query text
    const queryText = "SELECT * FROM PostTable WHERE post_key = $1;";

    //Assemble string array for database query text
    const queryValues = [post_key]; 

    //Query database with assembled text and values
    const queryOutcome = await queryDB(queryText,queryValues,"getListing/route.js")

    //Report outcome of query
    reportOutcome(queryText,queryValues,queryOutcome,"getListing/route.js")

    //Return set of listings if no error occurred, false if one did
    if (queryOutcome.error_status==undefined){
        return NextResponse.json(queryOutcome.result.rows)
    }
    else{
        return NextResponse.json('false')
    }
    
  
}


