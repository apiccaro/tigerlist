//import SQL
const sql = require('mssql');

//import azureAuth, handles credentials / configuration
//const getConfig = require('./azureAuth.js');
//import write.js,  handles writing to database
const {writePost, sampleUserDict, samplePostDict, testMethod_write, printDict,getPostQuery,addUser,createPostTable,deletePostTable,createUserTable,deleteUserTable,writeSampleUser,writeUser,clearPosts,clearUsers} = require('./write.js');
const {getUser,getPost,getAllPosts,getAllUsers,testMethod_read} = require('./read.js');

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

async function connectToDatabaseWithPool() {
  let pool;
  try {
    // Create a connection pool
    pool = await sql.connect(connectionString);
    console.log('Connected to the database');

    // Now you can execute your SQL queries or perform database operations here

  } catch (err) {
    console.error('Error connecting to the database:', err);
  } finally {
    // Close the connection pool when done
    if (pool) {
      await pool.close();
      console.log('Connection pool closed');
    }
  }
}

function testMethod_main(code){
    console.log("Hello from main.js - code:",code)
}



function testExchanges(){
    console.log("Starting test")
    testMethod_main(101)
    testMethod_main(102)

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


function testWrappers(){
  console.log("Starting test from main.js")
  testMethod_main(101)//not neccessary, just a print statement and sanity check
  console.log("")

  testMethod_read(1)//not neccessary, just a print statement and sanity check
  post1 = getPost(1)
  printDict(post1) 
  console.log("")


  testMethod_read(2)//not neccessary, just a print statement and sanity check
  post2 = getPost(2)
  printDict(post2) 
  console.log("")


  console.log("Ending test")
}

function test5(){

  createPostTable()
  createUserTable()

  // deletePostTable()
  // deleteUserTable()


}
function Main(){

  console.log("Starting test from main.js")
  testMethod_main(101)
  testMethod_read(102)
  testMethod_write(103)

  writeUser(sampleUserDict(0))
  writeUser(sampleUserDict(1))
  writeUser(sampleUserDict(2))
  writeUser(sampleUserDict(4))
  writeUser(sampleUserDict(4))

  console.log("Ending test")
}


function testRead(){

  ///user = getUser("roccy@coloradocollege.edu")
  ///console.log(user)
  getAllUsers()
  
}
function testWrite(){

  clearPosts()
  writePost(samplePostDict(1))
  // writePost(samplePostDict(0))

  // post1 = samplePostDict(1)
  // post2 = samplePostDict(2)
  console.log("done I guess")
}


//Main()
testWrite()