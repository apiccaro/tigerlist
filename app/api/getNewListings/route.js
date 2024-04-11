import { NextResponse } from 'next/server';
const { queryDB,reportOutcome } = require('./../dbTools');

/** api/getNewListings searches for all posts added within the last 2 hours
 * 
 * @returns all posts added within the last 2 hours
 */
export async function GET(){
    
    //Assemble string structure for database query text
    const queryText = "SELECT * FROM PostTable WHERE post_timestamp >= NOW() - INTERVAL '2 hours' ORDER BY post_timestamp DESC NULLS LAST;;"

    //Set queryValues to null so queryDB gets consistent arguments but wont break
    const queryValues = null;

    //Query database with assembled text and values
    const queryOutcome = await queryDB(queryText,queryValues,"getNewListings/route.js")

    //Report outcome of query
    reportOutcome(queryText,queryValues,queryOutcome,"getNewListings/route.js")

    //Return set of listings if no error occurred
    if (queryOutcome.error_status==undefined){
        return NextResponse.json(queryOutcome.result)
    }
    else{
        return NextResponse.json([])
    }
    
}