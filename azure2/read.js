const sql = require('mssql');
const useDB = true
const {connectionString} = require('./access.js');

// Should be safe to delete next line, keeping in case login fails again after I switch over
//const connectionString = 'Driver={ODBC Driver 18 for SQL Server};Server=tcp:tigerlist.database.windows.net,1433;Database=TigerBase;Uid=TigerAdmin;Pwd=TeamSoftwareProject1;Encrypt=yes;TrustServerCertificate=no;Connection Timeout=30;'

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
function getUser(key){
    if (useDB){
        //console.log("Functionality not added to this method yet")
        readUser(key)
    }
    else {
        return sampleUserDict(key)
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

        allPosts = doQuery(query)

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
//For external use. Will return sample data until the new database methods are added. 
function getAllUsers(){
    if (useDB){
        //console.log("Functionality not added to this method yet")
        //console.log("Functionality being tested")
        //allPosts = readAllPosts()
        query = "SELECT * FROM UserTable"
        allusers = doQuery(query)

        console.log("before")
        console.log(allusers)
        console.log("after")

        return allusers

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
            email: "JayM@coloradocollege.edu",
            name: "Jay M"
        }
    }
    else if (id==2){
        userDict = {
            email: "AnnikaP@coloradocollege.edu",
            name: "Annika P"
        }
    }
    else if (id==3){
        userDict = {
            email: "LucyF@coloradocollege.edu",
            name: "Lucy F"
        }
    }
    else if (id==4){
        userDict = {
            email: "JackD@coloradocollege.edu",
            name: "Jack D"
        }
    }
    
    return userDict
}
//Returns sample post data in place of database access. Feel free to change or add presets if you want to test a certain result.
function samplePostDict(id){
    //Default 
    postDict = {
        post_key: "(unique key placeholder 0)",
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
        postDict = postDict = {
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

 //Currently passes a null through if we get a connection error. What logic makes sense for the frontend?

 async function doQuery(queryText) {
    output = []
    let pool;
    try {
        // Creates connection pool
        pool = await sql.connect(connectionString);
        console.log('Connected to the database with a connection pool');

        //Do SQL Stuff Here
        output = await pool.request().query(queryText);

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

function readUser(key){
    query = "SELECT * FROM UserTable WHERE email = '"+key+"'"
    console.log(query)
    result = doQuery(key)
    return result
}





 async function connectToDatabase() {
    try {
      await sql.connect(connectionString);
      console.log('Connected to the database!');
    } catch (err) {
        console.error('Database Error:', err);
    }
    return output
}

async function connectToDatabaseWithPool() {
    const output = []
    let pool;
    try {
        // Creates connection pool
        pool = await sql.connect(connectionString);
        console.log('Connected to the database with a connection pool');

        //Do SQL Stuff Here!!!
        output = await pool.request().query('SELECT * FROM YourTableName');


 async function connectToDatabase() {
    try {
      await sql.connect(connectionString);
      console.log('Connected to the database!');
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

async function new_allPosts(id) {
    console.log("welcome to newreadpost. not currently doing anything")
    //return connectToDatabaseWithPool()
}



function readPost(id){
    if (useDB){
        console.log("Attempting to use database")
        return DBreadPost(id)
    }
    else{
        console.log("Returning Simulated placeholder post")
        return samplePostDict(id)
    }
}
async function getAllUsers_old() {
    try {
        const connection = await sql.connect(getConfig())
        const request = connection.request();

        const result = await request.query('SELECT * FROM Users')
        await connection.close();


    } catch (err) {
        console.error('Error selecting all users', err)
        return [];
    }
    }
    return output
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
}

async function new_allPosts(id) {
    console.log("welcome to newreadpost. not currently doing anything")
    //return connectToDatabaseWithPool()
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
function printDict(dict){
    for ( d in dict){
        console.log(d,":",dict[d])
    }
}


module.exports = {getUser,getPost,getAllPosts,getAllUsers,testMethod_read};