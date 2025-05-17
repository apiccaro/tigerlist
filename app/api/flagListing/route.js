import { NextResponse } from 'next/server';
import {emailNotifyFlag} from './../../moderation/sendMail';
import {queryDB,reportOutcome} from '../dbTools'

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

    //Assemble string structure for database query values
    const queryValues = [
        reqObject['flagged'],
        reqObject['post_key']
    ];

    //Query database with assembled text and values
    const queryOutcome = await queryDB(queryText,queryValues,"flagListing/route.js")

    //Report outcome of query
    reportOutcome(queryText,queryValues,queryOutcome,"flagListing/route.js")

    //Return true or false based on query success
    if (queryOutcome.error_status==undefined){
        emailNotifyFlag(reqObject) // send moderation an email notification of post flagging
        return NextResponse.json(true)
    }
    else{
        return NextResponse.json(false)
    }
}