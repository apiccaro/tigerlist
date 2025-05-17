//Early database test and proof of concept
async function sendTestMessage() {

    test_title = "Test Title"
    test_message = "Test Message"
    queryText = "INSERT INTO TestTable (title, text1) VALUES ('"+test_title+"', '"+test_message+"');"

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
        console.log('Query Seemed successful');
        //const currentData = await client.query("SELECT * FROM TestTable")
	//console.table(currentData.rows)
    return 'Query Seemed successful'

    } 
    catch (error) {
        console.error('Error executing query:', error);
        query_suceeded = false
    } 
    finally {
        await client.end();
    }

}

sendTestMessage()
