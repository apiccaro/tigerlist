const sql = require('mssql');

// Configure database connection

//REPLACE WITH a .env.local REFERENCE ONCE WE HAVE SOMETHING UNIVERSAL
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

module.exports = getConfig;