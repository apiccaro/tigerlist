import { NextResponse } from 'next/server';
const { queryDB,reportOutcome } = require(''./../dbTools');

/** api/getAllListings returns all active listings
 * 
 * @returns set of all active listings 
 */
export async function GET() {
    
    //Assemble string structure for database query text
    const queryText = "SELECT * FROM PostTable WHERE active = true ORDER BY post_timestamp DESC NULLS LAST;"

    //Set queryValues to null so queryDB gets consistent arguments but wont break
    const queryValues = null;

    //Query database with assembled text and values
    const queryOutcome = queryDB(queryText,queryValues,"getAllListings/route.js")

    //Report outcome of query
    reportOutcome(queryText,queryValues,queryOutcome)

    //Return set of listings if no error occurred.
    if (queryOutcome.error_status==undefined){
        return NextResponse.json(reportOutcome.result)
    }
    else{
        return NextResponse.json([])
    }
        
}
