import { NextResponse } from 'next/server';
const { queryDB,reportOutcome } = require('./../dbTools');


/** api/getAllModeratedUsers returns all moderated users
 * 
 * @returns set of all moderated users
 */
export async function GET() {
    
    //Assemble string structure for database query text
    const queryText = "SELECT * FROM UserTable WHERE moderator = true;"
    
    //Set queryValues to null so queryDB gets consistent arguments but wont break
    const queryValues = null;

    //Query database with assembled text and values
    const queryOutcome = await queryDB(queryText,queryValues,"getAllModeratedUsers/route.js")

    //Report outcome of query
    reportOutcome(queryText,queryValues,queryOutcome,"getAllModeratedUsers/route.js")

    //Return set of users if no error occurred.
    if (queryOutcome.error_status==undefined){
        return NextResponse.json(queryOutcome.result)
    }
    else{
        return NextResponse.json([])
    }
        
}


