import { NextResponse } from 'next/server';
<<<<<<< HEAD
export async function GET(user_email) {
=======
var dict1={ title: "couch",
price: "2000",
description: "black and leather",
category: "Textbook",
condition: 'Used-Like New',
location: 'East Campus',
email: 'annika@coloradocollege.edu',
phoneValue: '9878907890',
images: (['ticket.jpeg','bomb.jpeg','ticket.jpeg',null,null]),
active: "true"};
var dict2={ title: "chem textbook",
price: "25",
description: "gen chem1",
category: "Textbook",
condition: 'Used-Like New',
location: 'East Campus',
email: 'annika@coloradocollege.edu',
phoneValue: '9878907890',
images: (['ticket.jpeg','bomb.jpeg','ticket.jpeg',null,null]),
active: "false"}

export async function POST() {
    return NextResponse.json({dict1,dict2});
  }
>>>>>>> 789a115d4563edeabc9328fd25d9b035f65d9750

    //Assemble string for database query
    const queryText = "SELECT * FROM PostTable WHERE email = '$1';"
    const queryValues = [user_email];


    //Instantiate database client instance
    const { Client } = require('pg');
    const client = new Client({
        user: 'postgres',
        host: '10.3.0.49',
        port: 5432,
    });
    

    //Try to connect to database and query.
    let query_status = -1
    let error_status = null

    try {
        await client.connect();
        const result = await client.query(queryText,queryValues);
        query_status = 1
    } 
    catch (error) {
        query_status = 0
        error_status = error
    } 
    finally {
        await client.end();
    }


    //Log result to console
    if (query_status = 0){
        console.error('Error executing query:', error_status);
        console.log("Attempted Query: ",(queryText,queryValues))
        return  NextResponse.json('false')
    }
    else if (query_status = 1){
        console.log("Database successfully queried") //comment out once everything is properly tested.
        return  NextResponse.json(result.rows)
    }
    else{
        console.error('Error executing query:', "somehow the try block didnt finish yet no error was caught");
        console.log("Attempted Query: ",(queryText,queryValues))
        return  NextResponse.json('false')
    }

}

