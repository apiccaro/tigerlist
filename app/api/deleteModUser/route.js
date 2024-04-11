import { NextResponse } from 'next/server';
const { queryDB,reportOutcome } = require('./../dbTools');


/** api/deleteModUser takes a user data object, and sets that user to a non-moderator
 * 
 * @param {object} request given by fetch
 * @returns true or false depending on success of query
 */
export async function POST(request){
    
    //Convert given request from json response into a javascript object
    const reqObject = await request.json()

    //Assemble string structure for database query text
    const queryText =
        "UPDATE UserTable SET " +
        "moderator = false " +
        "WHERE email = $1;";
    //Assemble string array for database query values
    const queryValues = [
        reqObject['email']
    ];


    //Query database with assembled text and values
    const queryOutcome = queryDB(queryText,queryValues,"deleteModUser/route.js")

    //Report outcome of query
    reportOutcome(queryText,queryValues,queryOutcome)

    //Return true or false based on query success
    if (queryOutcome.error_status==undefined){
        return NextResponse.json('true')
    }
    else{
        return NextResponse.json('false')
    }
    
}