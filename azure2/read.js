const sql = require('mssql');
const useDB = true
const {connectionString} = require('./access.js');

// Should be safe to delete next line, keeping in case login fails again after I switch over
//const connectionString = 'Driver={ODBC Driver 18 for SQL Server};Server=tcp:tigerlist.database.windows.net,1433;Database=TigerBase;Uid=TigerAdmin;Pwd=TeamSoftwareProject1;Encrypt=yes;TrustServerCertificate=no;Connection Timeout=30;'

//For external use. Will return sample data until the new database methods are added. 
function getUser(key){
    if (useDB){
        //console.log("Functionality not added to this method yet")
        return readUser(key)
    }
    else {
        return sampleUserDict(key)
    }
}
//For external use. Will return sample data until the new database methods are added. 
async function getAllUsers(){
    if (useDB){

        query = "SELECT * FROM UserTable"
        allusers = await doQuery(query)
        console.log("allUsers",allusers)
        return allusers

    }
    else {
        allPosts = [samplePostDict(0),samplePostDict(1),samplePostDict(2)]
        return allPosts
    }
}
//For external use. Will return sample data until the new database methods are added. 
function getPost(key){
    if (useDB){
        console.log("Functionality not added to this method yet")
        //post = new_readPost(key)
        //return post
    }
    else {
        return samplePostDict(key)
    }
}
//For external use. Will return sample data until the new database methods are added. 
function getAllPosts(){
    if (useDB){
        //console.log("Functionality not added to this method yet")
        //console.log("Functionality being tested")
        //allPosts = readAllPosts()
        query = "SELECT * FROM PostTable"
        console.log("querying")

        allPosts = doQuery(query,false)

        console.log("before")
        console.log(allPosts)
        console.log("after")
        return allPosts

    }
    else {
        allPosts = [samplePostDict(0),samplePostDict(1),samplePostDict(2)]
        return allPosts
    }
}
//Returns sample user data in place of database access. Feel free to change or add presets if you want to test a certain result.
function sampleUserDict(id){
    //Default 
    userDict = {
        email: "roccy@coloradocollege.edu",
        name: "Roccy"
    }
    //Check for valid preset number to replace default
    if (id==1){
        userDict = {
            email: "jaym@coloradocollege.edu",
            name: "Jay M"
        }
    }
    else if (id==2){
        userDict = {
            email: "annikap@coloradocollege.edu",
            name: "Annika P"
        }
    }
    else if (id==3){
        userDict = {
            email: "lucyf@coloradocollege.edu",
            name: "Lucy F"
        }
    }
    else if (id==4){
        userDict = {
            email: "jackd@coloradocollege.edu",
            name: "Jack D"
        }
    }
    
    return userDict
}
//Returns sample post data in place of database access. Feel free to change or add presets if you want to test a certain result.
function samplePostDict(id){
    //Default 
    postDict = {
        post_key: "(defaultKey)",
        title: "Listing",
        price: 0,
        description: "listing description",
        category: "Appliance",
        condition: "New",
        location: "Off Campus",
        email: "tiger0@coloradocollege.edu",
        phone: "(719)-123-4567",
        is_active: "true"
    }
    //Check for valid preset number. Can always fall back to default
    if (id==1){
        postDict = {
            post_key: "(unique key placeholder 1)",
            title: "Used road bike",
            price: 100,
            description: "its a bike",
            category: "Appliance",
            condition: "Used-Good",
            location: "East Campus",
            email: "tiger1@coloradocollege.edu",
            phone: "(719)-123-4568",
            is_active: "true"
        }
    }
    else if (id==2){
        postDict = {
            post_key: "(unique key placeholder 2)",
            title: "Introductory Modern Physics",
            price: 20,
            description: "its a book",
            category: "Textbook",
            condition: "Used-Like New",
            location: "West Campus",
            email: "tiger0@coloradocollege.edu",
            phone: "(719)-123-4569",
            is_active: "true"
        }
    }
    
    return postDict
}
//Confirms this file was imported and is running where and when you think it is.
function testMethod_read(code){
    console.log("Hello from read.js - code:",code)
}

 /**
  * Actual Database code is below. 
  * Ideally everything above this point is outsider friendly, and changes minimally so pages can call them and expect a consistent result. 
  * When more methods match our standards I'll move them (or an access method) up and comment appropriately
  */ 

//This one makes things easier. Boolean version optionally prints query result
async function doQuery(queryText){doQuery(queryText,false)}
async function doQuery(queryText,printOutput) {
    let output = []
    let pool

    try {
        // Create connection pool
        pool = await sql.connect(connectionString)
        console.log('Connected to the database with a connection pool')

        // Do SQL Stuff
        const result = await pool.request().query(queryText)
        output = result.recordset
        if (printOutput){console.log("doQuery:",output)}

    } catch (err) {
        console.error('Database Error:', err)
    } finally {
        // Close connection pool
        if (pool) {
            await pool.close()
            console.log('Connection pool closed')
        }
    }

    return output
}

async function readUser(key){
    query = "SELECT * FROM UserTable WHERE email='"+key+"';"
    //query = "SELECT * FROM UserTable WHERE email='jaym@coloradocollege.edu';"
    result = await doQuery(query,true)
    return result
}

module.exports = {getUser,getPost,getAllPosts,getAllUsers,sampleUserDict,samplePostDict,testMethod_read}


//OLD METHODS:
//Everything moved here should no longer be relevant
/*

//Method worked, replaced with more universal doQuery(query)
async function connectToDatabaseWithPool() {
    output = []
    let pool;
    try {
        // Creates connection pool
        pool = await sql.connect(connectionString);
        console.log('Connected to the database with a connection pool');

        //Do SQL Stuff Here!!!
        output = await pool.request().query('SELECT * FROM YourTableName');


    } catch (err) {
        console.error('Failed to connect to the database:', err);
    } finally {
        // Closes connection pool
        if (pool) {
            await pool.close();
            console.log('Connection pool closed');
        }
    }
    return output
}


async function getAllUsers_older() {
    try {
        const connection = await sql.connect(getConfig())
        const request = connection.request()

        const result = await request.query('SELECT * FROM Users')
        await connection.close()

        return result.recordset

    } catch (err) {
        console.error('Error selecting all users', err)
        return []
    }
}

async function getAllUsers_old() {
    try {
        const connection = await sql.connect(getConfig())
        const request = connection.request();

        const result = await request.query('SELECT * FROM Users')
        await connection.close();

        return result.recordset;

    } catch (err) {
        console.error('Error selecting all users', err)
        return [];
    }
}




async function DBreadPost(postID) {
    try {
        const connection = await sql.connect(getConfig())
        const request = connection.request();

        const result = await request
            .input('postID', sql.Int, postID)
            .query('SELECT * FROM Posts WHERE postID = @postID')

        await connection.close();

        return result.recordset;
    } catch (err) {
        console.error('Error: selecting post with ID '+postID, err)
        return null;
    }
}

function printDict(dict){
    for ( d in dict){
        console.log(d,":",dict[d])
    }
}

async function new_allPosts(id) {
    console.log("welcome to newreadpost. not currently doing anything")
    //return connectToDatabaseWithPool()
}


 async function connectToDatabase() {
    try {
      await sql.connect(connectionString);
      console.log('Connected to the database!');
    } catch (err) {
        console.error('Database Error:', err);
    }
}



async function doQuery_old(queryText) {
    output = []
    let pool;
    try {
        const pool = await sql.connect(connectionString);
        console.log('Connected to the database with a connection pool');

        //Do SQL Stuff Here
        const output = await pool.request().query(queryText);
        console.log(output.recordset);

    } catch (err) {
        console.error('Failed to connect to the database:', err);
    } finally {
        if (pool) {
            await pool.close();
            console.log('Connection pool closed');
        }
    }
    return output
}


function readUser_old(key){
    key = 'roccy@coloradocollege.edu'

    // query = "SELECT * FROM UserTable WHERE email = '"+key+"'"
    query = "SELECT * FROM UserTable WHERE email = 'annikap@coloradocollege.edu';"
    //console.log(query)
    result = doQuery(key)
    return result
}
//should fix the bug for now
async function readUserWorkAround(key){
    //query = "SELECT * FROM UserTable WHERE 'email'='"+key+"';"
    query = "SELECT * FROM UserTable WHERE email='jaym@coloradocollege.edu';"
    result = await doQuery(query)
    validResult = null

    result.forEach(function (row) {
        if (validResult==null){
            if (row['email']==key){
                console.log("key found!",row)
                return row
            }
        }
    });
    if (validResult = null){
        console.log("key not found, returning null")
    }
    return validResult
}

async function old_readPost(postID) {
    const newRequest = getValidRequest()

    if (newRequest==null) {
        console.log("Failed to obtain a valid database request. Returning null")
        return null;
    }

    try {
        const result = await newRequest
            .input('postID', sql.Int, postID)
            .query('SELECT * FROM Posts WHERE postID = @postID')
        
        return result.recordset;
    } catch (err) {
        console.error('Failed to select post with ID ' + postID+":\n", err)
        return null //does this work for us?
        throw err; // Do we need to rethrow the error?
    } finally {
        if (connection) {
            await connection.close()
        }
    }
}

function postDict_new(){
    newDict = {
        post_key: "(unique key placeholder 2)",
        title: "Introductory Modern Physics",
        price: 20,
        description: "its a book",
        category: "Textbook",
        condition: "Used-Like New",
        location: "West Campus",
        email: "tiger0@coloradocollege.edu",
        phone: "(719)-123-4569",
        is_active: "true"
    }
    return newDict
}








*/

