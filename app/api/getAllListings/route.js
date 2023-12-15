import { NextResponse } from 'next/server';

// var dict1={ title: "couch",
// price: "2000",
// description: "black and leather",
// category: "Textbook",
// condition: 'Used-Like New',
// location: 'East Campus',
// email: 'annika@coloradocollege.edu',
// phoneValue: '9878907890',
// images: (['ticket.jpeg','bomb.jpeg','ticket.jpeg',null,null]),
// active: "true"};
// var dict2={ title: "chem textbook",
// price: "25",
// description: "gen chem1",
// category: "Textbook",
// condition: 'Used-Like New',
// location: 'East Campus',
// email: 'annika@coloradocollege.edu',
// phoneValue: '9878907890',
// images: (['ticket.jpeg','bomb.jpeg','ticket.jpeg',null,null]),
// active: "false"}

export async function GET() {

  queryText = "SELECT * FROM PostTable WHERE active = true;"

  const { Client } = require('pg');
    const client = new Client({
        user: 'postgres',
        host: '10.3.0.49',
        port: 5432,
    });
    
    //Try to connect to database and query.
    let query_suceeded = false
    try {
        await client.connect();
        const result = await client.query(queryText);
        query_suceeded = true
    } 
    catch (error) {
        console.error('Error executing query:', error);
        //query_suceeded = false
    } 
    finally {
        await client.end();
    }

    //Declare success or send error back
    if (query_suceeded){
        //console.log("Seems like the query worked!")
        //console.log("Result:\n\n",result)
        return  NextResponse.json(result.rows)
    }
    else{
        return NextResponse.error('false');
    }
    //return NextResponse.json({dict1,dict2});
  }
