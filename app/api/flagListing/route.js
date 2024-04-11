import { NextResponse } from 'next/server';
import {emailNotifyFlag} from './../../moderation/sendMail';
import {queryDB,reportOutcome} from '../dbTools/dbTools'

/** api/flagListing takes a listing data object, flags the corresponding post in DB, and notifies a moderator via SMTP
 * @param {*} request given by fetch
 * @returns true or false depending on success of query
 */
export async function POST(request){
    
    //Convert given request from json response into a javascript object
    const reqObject = await request.json()


    //Assemble string components for database query text
    const queryText =
        "UPDATE PostTable SET " +
        "flagged = $1 " +
        "WHERE post_key = $2;";

    //Assemble string components for database query values
    const queryValues = [
        reqObject['flagged'],
        reqObject['post_key']
    ];

    //query database
    const queryOutcome = queryDB(queryText,queryValues,"flagListing/route.js")

    //report outcome
    reportOutcome(queryText,queryValues,queryOutcome)

    //return true or false based on outcome
    if (queryOutcome.error_status==undefined){
        emailNotifyFlag(reqObject) // send moderation an email notification of post flagging
        return NextResponse.json('true')
    }
    else{
        return NextResponse.json('false')
    }
}