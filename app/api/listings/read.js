const sql = require('mssql');
const useDB = false
const {getValidRequest,testMethod_access} = require('./access.js');


//For external use. Will return sample data until the new database methods are added. 
export default async function handle(req, res) {
    res.status(200).json({ message: "Hello World" });
}
