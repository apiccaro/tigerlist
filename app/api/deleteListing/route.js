import { NextResponse } from 'next/server';
const { queryDB,reportOutcome } = require('./../dbTools');


/** api/deletelisting takes a given post and deletes the post corresponding to its post_key
 * 
 * @param {number} post_key - unique key of post to be deleted
 * @returns 'true' or 'false' based on query success
 */
export async function DELETE(request){

    //Convert given request from json response into a javascript object
    const reqObject = await request.json()

    //Assemble string structure for database query text
    const queryText = "DELETE FROM PostTable WHERE post_key = '$1';"
    //Assemble string array for database query value
    const queryValues = [reqObject.post_key];

    //Query database with assembled text and values
    const queryOutcome = queryDB(queryText,queryValues,"deleteListing/route.js")

    //Report outcome of query
    reportOutcome(queryText,queryValues,queryOutcome,"deleteListing/route.js")

    //Return true or false based on query success
    if (queryOutcome.error_status==undefined){
        return NextResponse.json('true')
    }
    else{
        return NextResponse.json('false')
    }
    
}
      

    