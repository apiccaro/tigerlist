
async function test_db() {

    message = "Test Message"
    queryText = "INSERT INTO TestTable (title, text1) VALUES ('Second Test', 'More text');"

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
        console.log('Query Seemed successful:');
        console.table(await client.query("SELECT * FROM TestTable"))
    } 
    catch (error) {
        console.error('Error executing query:', error);
        query_suceeded = false
    } 
    finally {
        await client.end();
    }

}

async function printTests() {

    queryText = "SELECT * FROM TestTable"

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
        console.table(result)
        query_suceeded = true
    } 
    catch (error) {
        console.error('Error executing query:', error);
        query_suceeded = false
    } 
    finally {
        await client.end();
    }
    return result
}

test_db()
printTests()





const listing = await request.json()
console.log("listing:",listing)
console.log("listing.title",listing.title)
console.log("listing['title']",listing['title'])
console.log("listing.body",listing.body)


const postDict = await request.json()
console.log("\n\n\nJSON.stringify(postDict): ",JSON.stringify(postDict))
console.log("\n\n\npostDict: ",request)
console.log("\n\n\npostDict.title: ",request.title)
console.log("\n\n\npostDict['title']: ",request['title'])