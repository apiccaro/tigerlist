//const sql = require('mssql');
//const connectionString = 'Driver={ODBC Driver 18 for SQL Server};Server=tcp:tigerlist.database.windows.net,1433;Database=TigerBase;Uid=TigerAdmin;Pwd=TeamSoftwareProject1;Encrypt=yes;TrustServerCertificate=no;Connection Timeout=30;'

// const config = {
//     user: 'TigerAdmin@tigerlist.database.windows.net',
//     password: 'TeamSoftwareProject1',
//     server: 'tigerlist.database.windows.net',
//     database: 'tigerlist/TigerBase',
//     options: {
//       encrypt: true,
//     },
//   };

// From annika
// Import trace for requested module:
// ./node_modules/tedious/lib/tedious.js
// ./node_modules/mssql/lib/tedious/connection-pool.js
// ./node_modules/mssql/lib/tedious/index.js
// ./node_modules/mssql/index.js
// ./azure2/read.js
// ./app/editlisting/page.js

// function getConfig(){
//     return config
// }  

// async function getValidRequest() {
//   try {
//     const connection = await sql.connect(config);
//     const request = connection.request();
//     return request;
//   } catch (error) {
//     console.error('Failed to connect to database:', error.message,"\nReturning Null instead");
//     //throw error;
//     return null
//   }
// }

// async function getValidRequest() {
//     try {
//       const connection = await sql.connect(config);
//       const request = connection.request();
//       return request;
//     } catch (error) {
//       console.error('Failed to connect to database:', error.message);
//       return null; // You can return null or any other default value.
//     }
//   }

// function testMethod_access(code){
//     console.log("Hello from access.js - code:",code)
// }
//module.exports = {connectionString};