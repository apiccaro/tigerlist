import { NextResponse } from 'next/server';

//var modUsers=["a_piccaro@coloradocollege.edu","j_moran@coloradocollege.edu","j_dresser@coloradocollege.edu","l_flanagan@coloradocollege.edu"];
// export async function GET() {
//     return NextResponse.json({ title: (modUsers)});
//   }



export async function GET() {

    queryText = "SELECT * FROM UserTable WHERE moderator = true;"
  
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



