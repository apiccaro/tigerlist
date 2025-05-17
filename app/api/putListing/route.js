import { NextResponse } from 'next/server';
import {emailNotifyPost} from './../../moderation/sendMail';
import {queryDB,reportOutcome} from '../dbTools'

/** api/putListing takes a listing data object, flags the corresponding post in DB, and notifies a moderator via SMTP
 * @param {object} request given by fetch
 * @returns true or false depending on success of query
 */
export async function POST(request){
    
    //Convert given request from json response into a javascript object
    const reqObject = await request.json()

    //Assemble string components for database query text
    const queryText = "INSERT INTO PostTable" 
    + " (title, price, description, category, condition, location, email, phoneValue, active, flagged, moderator_ban, images)" 
    + " VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12 )";

    //Assemble string structure for database query values
    const queryValues = [
        reqObject.title,
        reqObject.price,
        reqObject.description,
        reqObject.category,
        reqObject.condition,
        reqObject.location,
        reqObject.email,
        reqObject.phoneValue,
        reqObject.active,
        reqObject.flagged,
        reqObject.moderator_ban,
        reqObject.images
    ];
    

    //Query database with assembled text and values
    const queryOutcome = await queryDB(queryText,queryValues,"putListing/route.js")

    //Report outcome of query
    reportOutcome(queryText,queryValues,queryOutcome,"putListing/route.js")

    //Return true or false based on query success
    if (queryOutcome.error_status==undefined){
        emailNotifyPost(reqObject) // send moderation an email notification of post flagging
        return NextResponse.json('true')
    }
    else{
        return NextResponse.json('false')
    }
}


