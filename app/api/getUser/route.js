
import { NextResponse } from 'next/server';
const { queryDB,reportOutcome } = require('./../dbTools');

/** api/getUser takes a given email and returns the user corresponding to it
 * 
 * @returns user corresponding to email
 */
export async function POST(request){
    
    //Convert given request from json response into a javascript object
    const reqObject = await request.json()
    
    //Assemble string structure for database query text
    const queryText = "SELECT * FROM UserTable WHERE email = $1;"

    //Assemble string array for database query text
    const queryValues = [reqObject.email]; 

    //Query database with assembled text and values
    const queryOutcome = queryDB(queryText,queryValues,"getUser/route.js")

    //Report outcome of query
    reportOutcome(queryText,queryValues,queryOutcome)

    //Return user data object if no error occurred, false if one did
    if (queryOutcome.error_status==undefined){
        return NextResponse.json(reportOutcome.result)
    }
    else{
        return NextResponse.json('false')
    }
    
  
}



