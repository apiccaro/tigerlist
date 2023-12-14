import firebase from '../firebaseComponents/firebase'
//import 'firebase/firestore'

const sql = require('mssql');


class DatabaseHandler {
    constructor(config) {
      this.config = config;
    }
  
    async connect() {
      try {
        this.pool = await sql.connect(this.config);
        console.log('Connected to the database');
      } catch (error) {
        console.error('Error connecting to the database:', error);
      }
    }
  
    async insertData(data) {
      try {
        const result = await this.pool.request()
          .input('key1', sql.VarChar, data.key1)
          .input('key2', sql.VarChar, data.key2)
          // Add inputs for other fields
  
          .query('INSERT INTO yourTable (key1, key2) VALUES (@key1, @key2)'); // Adjust the SQL query accordingly
  
        console.log(`Inserted ${result.rowsAffected} row(s)`);
      } catch (error) {
        console.error('Error inserting data:', error);
      }
    }
  
    async closeConnection() {
      await this.pool.close();
      console.log('Connection to the database closed');
    }
  }
  

// const WriteUserData = () => { 
    const sendData = () => {
        try {
            firebase 
                .firestore() 
                .collection('users_collection')
                .doc('single_entry?') 
                .set ({
                    userEmail: 'j_moran@coloradocollege.edu',
                    password: 'ilovejavascript'
                }) 
                .then(alert('Data sent properly'))
        } 
        catch (error) {
            console.log(error) 
            alert(error)
        }

        

    }

    return (
        <button onClick={sendData}>Send to Firestore</button>
    )
