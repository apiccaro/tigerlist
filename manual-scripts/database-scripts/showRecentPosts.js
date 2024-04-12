//to be called by scripts in j_moran. 
//Shows recent posts as table and dictionary

const { Client } = require('pg');

const client = new Client({
  user: 'postgres',
  host: '10.3.0.49',
  port: 5432,
});

async function showPosts() {

  try {
    await client.connect();
    const queryText = "SELECT * FROM PostTable WHERE post_timestamp >= NOW() - INTERVAL '10 minutes';"
    const result = await client.query(queryText);

    console.log('Posts from the last 10 Minutes as table:');
    console.table(result.rows);
    console.log('Posts from the last 10 Minutes as dictionaries:');
    console.log(result.rows);
  } 
  
  catch (error) {
    console.error('Error executing search:', error);
  } 

  finally {
    await client.end();
  }
}

showPosts()
