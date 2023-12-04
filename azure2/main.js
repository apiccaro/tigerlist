//import SQL
const sql = require('mssql');

//import azureAuth, handles credentials / configuration
const getConfig = require('./azureAuth.js');
//import write.js,  handles writing to database
const {writeUser, writePost, sampleUserDict, samplePostDict, dummyMethod_write} = require('./write.js');
// const writeUser = require('./write.js');
// const writePost = require('./write.js');
// const sampleUserDict = require('./write.js');
// const samplePostDict = require('./write.js');
// const dummyMethod_write = require('./write.js');
//From write.js: module.exports = writeUser, writePost, sampleUserDict, samplePostDict, dummyMethod_write;
const {readPost, getAllPosts, getAllUsers, dummyMethod_read} = require('./read.js');

const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('3005 Started successfully\n');
});

function testServer() {
    console.log('Testing through a port');
    server.listen(3005, () => {
    console.log('Main server running at http://localhost:3005/');
  });
  }

async function connectToDatabase() {
  try {
    await sql.connect(getConfig());
    console.log('Connected to the database');
  } catch (err) {
    console.error('Error connecting to the database:', err);
  }
}


function dummyMethod(code){
    console.log("Hello from main.js - code:",code)
}



function testExchanges(){
    console.log("Starting test")
    dummyMethod(101)
    dummyMethod_write(102)

    userData = sampleUserDict(2)
    writeUser(userData)

    postData0 = samplePostDict(0)
    writePost(postData0)

    postData1 = samplePostDict(1)
    writePost(postData1)

    postData2 = samplePostDict(2)
    writePost(postData2)

    console.log("Ending test")
}

testExchanges()

