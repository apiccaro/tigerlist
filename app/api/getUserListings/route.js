import { NextResponse } from 'next/server';
const { queryDB,reportOutcome } = require(''./../dbTools');

/** api/getUserListings takes a given email and returns the user corresponding to it
 * 
 * @returns user corresponding to email
 */
export async function POST(request){
    
    //Convert given request from json response into a javascript object
    const reqObject = await request.json()
    
    //Assemble string structure for database query text
    const queryText = "SELECT * FROM PostTable WHERE email = $1 ORDER BY post_timestamp DESC NULLS LAST;;"
    //Assemble string array for database query text
    const queryValues = [reqObject.userEmail];

    //Query database with assembled text and values
    const queryOutcome = queryDB(queryText,queryValues,"getUserListings/route.js")

    //Report outcome of query
    reportOutcome(queryText,queryValues,queryOutcome)

    //Return user's listings object if no error occurred, false if one did
    if (queryOutcome.error_status==undefined){
        return NextResponse.json(reportOutcome.result)
    }
    else{
        return NextResponse.json('false')
    }
    
  
}

