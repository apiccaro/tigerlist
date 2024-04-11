    //Instantiate database client instance
    const { Client } = require('pg');


    //Return client instance
    function getClient(){
        return new Client({
            user: 'postgres',
            host: '10.3.0.49',
            port: 5432,
        });
    }
    
    async function queryDB(queryTxt,queryVals,callerName){

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
        queryOutcome = {
            error_status:error_status,
            result:result
        }
        return queryOutcome
    }



    async function reportOutcome(queryText,queryValues,queryOutcome) {
    if (queryOutcome.error_status!=undefined){
        console.error('Error executing query:', queryOutcome.error_status);
        console.log("Attempted Query: ",(queryText,queryValues))
    }
    else {
        console.log("Database successfully queried with api/flagListing") //comment out once everything is properly tested.
        console.log("Query result:\n",queryOutcome.result) //debug print
        emailNotify(reqObject)
    }}


    module.exports = { queryDB, reportOutcome}