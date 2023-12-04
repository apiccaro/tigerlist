const sql = require('mssql');

// Configure database connection

//REPLACE WITH A .env.local REFERENCE ONCE WE HAVE SOMETHING UNIVERSAL
const config = {
    user: 'tigerAdmin@tigerlinkserver.database.windows.net',
    //user: 'j_moran@ColoradoCollege.edu',
    password: 'tigerTSP24',
    server: 'tigerlinkserver.database.windows.net',
    database: 'tigerlinkserver/TigerListAzure',
    options: {
      encrypt: true,
    },
  };


function getConfig(){
    return config
}

// async function getValidRequest(){
//   const connection = await sql.connect(config);
//   const request = connection.request();
//   return request
// }

module.exports = getConfig;