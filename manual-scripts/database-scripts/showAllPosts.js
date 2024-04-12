const { Client } = require('pg');

const client = new Client({
  user: 'postgres',
  host: '10.3.0.49',
  port: 5432,
});

async function showPosts() {

  try {
    await client.connect();
    const queryText = "SELECT * FROM PostTable;" 
    const result = await client.query(queryText);
    console.table(result.rows);
  } 
  
  catch (error) {
    console.error('Error executing search:', error);
  } 

  finally {
    await client.end();
  }
}









showPosts()
