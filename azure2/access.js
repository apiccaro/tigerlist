const sql = require('mssql');
//const config = require('./configFile'); // REPLACE WITH CONFIG FILE

const config = {
    user: 'tigerAdmin@tigerlinkserver.database.windows.net',
    password: 'tigerTSP24',
    server: 'tigerlinkserver.database.windows.net',
    database: 'tigerlinkserver/TigerListAzure',
    options: {
      encrypt: true,
    },
  };

async function getValidRequest() {
  try {
    const connection = await sql.connect(config);
    const request = connection.request();
    return request;
  } catch (error) {
    console.error('Failed to connect to database:', error.message,"\nReturning Null instead");
    //throw error;
    return null
  }
}

async function getValidRequest() {
    try {
      const connection = await sql.connect(config);
      const request = connection.request();
      return request;
    } catch (error) {
      console.error('Failed to connect to database:', error.message);
      return null; // You can return null or any other default value.
    }
  }

function testMethod_access(code){
    console.log("Hello from access.js - code:",code)
}


module.exports = { getValidRequest,testMethod_access};