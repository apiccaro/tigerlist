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

    module.exports = { getClient }