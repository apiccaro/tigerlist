//to be called by scripts in j_moran. 
//Shows all messages sent to testtable

async function showTestMessages(){
    const { Client } = require('pg');
    const client = new Client({
        user: 'postgres',
        host: '10.3.0.49',
        port: 5432,
    });

    //Try to connect to database and query.
    try {
	await client.connect();
	const currentData = await client.query("SELECT * FROM TestTable;") 
        console.table(currentData.rows)
    } 
    catch (error) {
        console.error('Error executing query:', error);
    } 
    finally {
        await client.end();
    }

}
showTestMessages()
