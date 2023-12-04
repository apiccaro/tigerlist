const sql = require('mssql');

// Configure database connection

const config = {
    user: 'tigerAdmin@tigerlinkserver.database.windows.net',
    //user: 'j_moran@ColoradoCollege.edu',
    password: 'TigerData24',
    server: 'tigerlinkserver.database.windows.net',
    database: 'tigerlinkserver/TigerListAzure',
    options: {
      encrypt: true,
    },
  };

const config_old = {
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
};

async function connectToDatabase() {
  try {
    await sql.connect(config);
    console.log('Connected to the database');
  } catch (err) {
    console.error('Error connecting to the database:', err);
  }
}

async function insertData() {
  try {
    const result = await sql.query`INSERT INTO YourTable (Column1, Column2) VALUES ('Value1', 'Value2')`;
    console.log('Rows affected:', result.rowsAffected);
  } catch (err) {
    console.error('Error inserting data:', err);
  }
}

(async () => {
  await connectToDatabase();
  await insertData();
  await sql.close();
})();