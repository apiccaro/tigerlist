const sql = require('mssql');

const azure_config = {
    DB_USER: 'tigerAdmin@tigerlinkserver.database.windows.net',
    DB_PASSWORD: 'TigerData24',
    DB_SERVER: 'tcp:tigerlinkserver.database.windows.net',
    DB_PORT: 1433,
    DB_NAME: 'TigerListAzure',
    authentication: {
        type: 'default'
    },
    options: {
        encrypt: true
    }
}
/*
const old_config = {
    Driver: "ODBC Driver 18 for SQL Server";
    Database:"TigerListAzure",
    TrustServerCertificate:false,
    ConnectionTimeout:30,
    server: 'tcp:tigerlinkserver.database.windows.net',
    UserID: "tigerAdmin@tigerlinkserver.database.windows.net",
    Password: "TigerData24",
    Encrypt: true,
    ConnectionTimeout: 30,} 
    */

/*
    //Use Azure VM Managed Identity to connect to the SQL database
    const azure_config = {
        server: process.env["db_server"],
        port: process.env["db_port"],
        database: process.env["db_database"],
        authentication: {
            type: 'azure-active-directory-msi-vm'
        },
        options: {
            encrypt: true
        }
    }

    //Use Azure App Service Managed Identity to connect to the SQL database
    const azure_config = {
        server: process.env["db_server"],
        port: process.env["db_port"],
        database: process.env["db_database"],
        authentication: {
            type: 'azure-active-directory-msi-app-service'
        },
        options: {
            encrypt: true
        }
    }
*/

console.log("Test: Starting testSQL.connectAndQuery()");
connectAndQuery();

async function connectAndQuery() {
    try {
        var poolConnection = await sql.connect(azure_config);
        console.log("Test: sql.connect(azure_config) seemed to be successful");

        var resultSet = await poolConnection.request().query(`SELECT ALL`);
        console.log("Test: poolConnection.request().query() seemed to be successful");
        console.log(`${resultSet.recordset.length} rows returned.`);

        // output column headers
        var columns = "";
        for (var column in resultSet.recordset.columns) {
            columns += column + ", ";
        }
        console.log("Column Headers:\n%s\t", columns.substring(0, columns.length - 2));

        // ouput row contents from default record set
        resultSet.recordset.forEach(row => {
            console.log("Row Contents:\n%s\t%s", row.CategoryName, row.ProductName);
        });

        poolConnection.close();
        console.log("Test: poolConnection.close(); seemed to be successful");

    } catch (err) {
        console.error("Test: An error occured",err.message);
    }
}