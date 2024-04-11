//dbTools provides a set of methods that simplify the database querying process.
//
//queryDB() is the method with the main querying functionality
//reportOutcome() takes the return of queryDB and prints based on boolean consts and query outcome
//getClient() is currently exported, ideally we phase that out and have every api method do it all with queryDB 

//Instantiate database client instance
const { Client } = require('pg');

//booleans to decide how much debug printing happens. 
const DO_API_SUCCESS_PRINT = true; //Never a big deal, but useful to see when the frontend is querying cause sometimes its odd.
const DO_API_ERROR_PRINT = true; //Should pretty much always be on. 
const DO_API_RESULT_PRINT = false; //Usually excessive.


/** getClient creates a basic client instance for accessing database
 * 
 * @returns client instance, primarily to be used in queryDB
 */
function getClient(){
    return new Client({
        user: 'postgres',
        host: '10.3.0.49',
        port: 5432,
    });
}

/** queryDB takes both elements neccesary for a query string, gets a client, and performs the query before closing the client.
 * 
 * @param {string} queryText - Main text of query with placeholders
 * @param {Array<string>} queryValues - values to fill placeholders
 * @param {*} callerName - name of api route that called queryDB, used in debug prints.
 * @returns queryOutcome - object with fields error_status and result to convey the outcome of the query.
 */
async function queryDB(queryText,queryValues,callerName){

    //get client for db query
    const client = getClient();

    //Define status query variables
    var error_status;
    var result;
    
    //Try to connect to database and query.
    try {
        await client.connect();
        result = await client.query(queryText,queryValues);
    } 
    catch (error) {
        console.log("Something went wrong in "+callerName)
        error_status = error
    } 
    await client.end();

    //Define returned object using query status variables
    var queryOutcome = {
        error_status:error_status,
        result:result
    }
    return queryOutcome
}


/**reportOutcome prints query outcome to terminal based on outcome of query and const booleans deciding what gets printed
 * 
 * @param {*} queryText - main text used in query, useful for checking why a query went wrong
 * @param {*} queryValues - values used in query, useful for checking why a query went wrong
 * @param {*} queryOutcome - object representing the result of the query, used for conditional logic and reporting
 */
async function reportOutcome(queryText,queryValues,queryOutcome) {
if (queryOutcome.error_status!=undefined){
    if (DO_API_ERROR_PRINT){
        console.error('Error executing query:', queryOutcome.error_status);
        console.log("Attempted Query: ",(queryText,queryValues))
    } 
}
else {
    if (DO_API_SUCCESS_PRINT){
        console.log("Database successfully queried with api/flagListing")
    }
    if (DO_API_RESULT_PRINT){
        console.log("Query result:\n",queryOutcome.result)
    }
}}


    module.exports = { queryDB, reportOutcome, getClient}