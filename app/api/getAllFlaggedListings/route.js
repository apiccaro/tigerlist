import { NextResponse } from 'next/server';
const { queryDB,reportOutcome } = require('./../dbTools');

/** api/getAllFlaggedListings returns all active listings marked flagged.
 * 
 * @returns set of all flagged active listings 
 */
export async function GET() {
    
    //Assemble string structure for database query text
    const queryText = "SELECT * FROM PostTable WHERE active = true AND flagged = true ORDER BY post_timestamp DESC NULLS LAST;";
    //Set queryValues to null so queryDB gets consistent arguments but wont break
    const queryValues = null;

    //Query database with assembled text and values
    const queryOutcome = await queryDB(queryText,queryValues,"getAllFlaggedListings/route.js")

    //Report outcome of query
    reportOutcome(queryText,queryValues,queryOutcome,"getAllFlaggedListings/route.js")

    //Return set of listings if no error occurred.
    if (queryOutcome.error_status==undefined){
        return NextResponse.json(queryOutcome.result.rows)
    }
    else{
        return NextResponse.json([])
    }
        
}

