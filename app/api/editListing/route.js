import { NextResponse } from 'next/server';
const { queryDB,reportOutcome } = require('./../dbTools');

/** api/editListing takes a listing data object and sets fields of each field in the row corresponding to the post_key
 * 
* @param {object} request given by fetch
* @returns true or false depending on success of query
*/
export async function POST(request){
    
    //Convert given request from json response into a javascript object
    const reqObject = await request.json()

    //Assemble string structure for database query text
    const queryText =
        "UPDATE PostTable SET " +
        "title = $1, " +
        "price = $2, " +
        "description = $3, " +
        "category = $4, " +
        "condition = $5, " +
        "location = $6, " +
        "email = $7, " +
        "phoneValue = $8, " +
        "active = $9, " +
        "flagged = $10, " +
        "moderator_ban = $11 " +
        "images = $12 " +
        "WHERE post_key = $13;";

    //Assemble string array for database query values
    const queryValues = [
        reqObject['title'],
        reqObject['price'],
        reqObject['description'],
        reqObject['category'],
        reqObject['condition'],
        reqObject['location'],
        reqObject['email'],
        reqObject['phoneValue'],
        reqObject['active'],
        reqObject['flagged'],
        reqObject['moderator_ban'],
        reqObject['images'],
        reqObject['post_key']
    ];

    //Query database with assembled text and values
    const queryOutcome = await queryDB(queryText,queryValues,"editListing/route.js")

    //Report outcome of query
    reportOutcome(queryText,queryValues,queryOutcome,"editListing/route.js")

    //Return true or false based on query success
    if (queryOutcome.error_status==undefined){
        return NextResponse.json('true')
    }
    else{
        return NextResponse.json('false')
    }
    

}