const sql = require('mssql');
const {connectionString} = require('./access.js');

const useDB = true

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function testMethod_write(code){
    console.log("Hello from write.js - code:",code)
  }

function addPost(postDict){
}

function writeSampleUser(){
    query = "INSERT INTO UserTable (email, name) VALUES ('jm@cc.edu','ya boi');"
    doQuery(query)
}

function writeUser(userDict){
    name = userDict['name']
    email = userDict['email']
    query = "INSERT INTO UserTable (email, name) VALUES ('"+email+"','"+name+"');"
    doQuery(query)
}
function writePost(postDict){
    console.log(postDict)

    post_key = postDict['post_key']
    title = postDict['title']
    price = postDict['price']
    description = postDict['description']
    category = postDict['category']
    condition = postDict['condition']
    location = postDict['location']
    email = postDict['email']
    phone = postDict['phone']
    active = postDict['active']

    // query = "INSERT INTO PostTable (post_key, title, price, description, category, condition, location, phone, active) "
    // +"VALUES ('" + post_key + "','" + title + "','" + price + "','" + description + "','"
    // + category + "','" + condition + "','" + location + "','"+ email + "','"+ phone + "','"+ active +")"


    query = "INSERT INTO PostTable (post_key, title, price) VALUES ('"+post_key+"','"+title+"',"+price+")"

    doQuery(query)
}

function createPostTable(){
    query = "CREATE TABLE PostTable ("+
        "post_key VARCHAR(255) PRIMARY KEY,"+
        "title VARCHAR(255),"+
        "price INT,"+
        "description VARCHAR(255),"+
        "category VARCHAR(255),"+
        "condition VARCHAR(255),"+
        "location VARCHAR(255),"+
        "email VARCHAR(255),"+
        "phone VARCHAR(255),"+
        "active VARCHAR(5)"+
    ");"
    doQuery(query)
}
function clearPosts(){
    doQuery("DELETE FROM PostTable")
}

function clearUsers(){
    doQuery("DELETE FROM UserTable")
}

function deletePostTable(){
    doQuery("DROP TABLE PostTable")
}

function createUserTable(){
    query = "CREATE TABLE UserTable ("+
        "email VARCHAR(255) PRIMARY KEY,"+
        "name VARCHAR(255),"+
        ");"
    doQuery(query)
}

function deleteUserTable(){
    doQuery("DROP TABLE UserTable")
}
function addUser(userDict){
    query = getUserQuery(userDict)
    doQuery(query)
}
    
function getUserQuery(userDict){
    "INSERT INTO PostTable (email, name) VALUES ("+userDict['email']+","+userDict['name']+")";
    
}

function old_getPostQuery(postDict) {
    var query = "INSERT INTO PostTable";
    query += " (post_key, title, price, description, category, condition, location, email, phone, is_active)";
    query += " VALUES ('" + postDict['post_key'] + "', '" + postDict['title'] + "', '" + postDict['price'] + "', '";
    query += postDict['description'] + "', '" + postDict['category'] + "', '" + postDict['condition'] + "', '";
    query += postDict['location'] + "', '" + postDict['email'] + "', '";
    query += postDict['phone'] + "', '" + postDict['is_active'] + "')";
    return query;
}

function getPostQuery(postDict){
    const columns = Object.keys(postDict).join(', ');
    const values = Object.values(postDict)
        .map(value => formatValue(value))
        .join(', ');

    return `INSERT INTO PostTable (${columns}) VALUES (${values});`;
}



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
        console.error('Database Error:', err);
    } finally {
        // Closes connection pool
        if (pool) {
            await pool.close();
            console.log('Connection pool closed');
        }
    }
    return output
}

function writeUser_old(userDict){
    console.log("\nwrite.js Received user write request:")
    //console.log("\nwrite.js Received user write request for",userDict.name+":")
    //console.log("user ID:",userDict.geuserID)
    //console.log("user name:",userDict.name)
    //console.log("request contents:")
    printDict(userDict)
    console.log("\n")
    //clprintDict(userDict.userID)

    if (useDB){
        DBinsertUser(userDict)
    }
    

}



async function DBinsertPost(postDict) {

    // const pool = new sql.ConnectionPool(getConfig());

    try {
        const connection = await sql.connect(getConfig());
        const request = connection.request();
    
        await request
        .input('userID', sql.VarChar(50), postDict.userID)
        .input('category', sql.Int, postDict.category)
        .input('price', sql.Float, postDict.price)
        .input('title', sql.VarChar(255), postDict.title)
        .input('description', sql.VarChar(255), postDict.description)
        .input('image', sql.VarChar(255), postDict.image)
        .query('INSERT INTO Posts (userID, category, price, title, description, image) VALUES (@userID, @category, @price, @title, @description, @image)');
        await connection.close();
    } catch (err) {
      console.error('Error: couldnt insert post', err);
    } finally {
    //   pool.close();
    }
}

async function DBinsertUser(userDict) {
        // const pool = new sql.ConnectionPool(getConfig);

    try {
        const connection = await sql.connect(getConfig());
        const request = connection.request();
    
        await request
        .input('userID', sql.VarChar(50), userDict.userID)
        .input('email', sql.VarChar(255), userDict.email)
        .input('name', sql.VarChar(255), userDict.name)
        .query('INSERT INTO Users (userID, email, name) VALUES (@userID, @email, @name)');

        await connection.close();
    } catch (err) {
      console.error('Error: coudlnt insert user', err);
    } finally {
    //   pool.close();
    }
}


function samplePostDict(number){
    //Default 
    postDict = {
        userID: "0",
        category: 0,
        price: 0,
        title: "Cheap Bike",
        description: "Default Sample Listing condition",
        image: null
    }
    //Check for valid preset number. Can always fall back to default
    if (number==1){
        postDict = {
            userID: "123",
            category: 0,
            price: 10.01,
            title: "Medium skillet",
            description: "Nonstick. Light scratches",
            image: null
        }
    }
    if (number==2){
        postDict = {
            userID: "222",
            category: 2,
            price: 25.00,
            title: "Introductory Modern Physics, 5th Edition",
            description: "Asking half of retail price. ",
            image: null
        }
    }
    
    return postDict
}

function printDict(dict){
    for ( d in dict){
        console.log(d,":",dict[d])
    }
}

// WriteUserDataStr (userID,Str email,Str preferredname)
// WritePostData(Str (userID,Int category,Str title,Str description,null 

/*
    async function DBinsertForm2() {
        try {
          const result = await sql.query`INSERT INTO Listings (Column1, Column2) VALUES ('Value1', 'Value2')`;
          console.log(result.rowsAffected);
        } catch (err) {
          console.error('Error:', err);
        }
      }
    
    async function DBinsertUser2(userDict) {
        try {
          const result = await sql.query`INSERT INTO Users (Column1, Column2) VALUES ('Value1', 'Value2')`;
          console.log(result.rowsAffected);
        } catch (err) {
          console.error('Error:', err);
        }
      }
      */
  
module.exports = {writePost, testMethod_write,printDict, getPostQuery,addUser,createPostTable,deletePostTable,createUserTable,deleteUserTable,writeSampleUser,writeUser,clearPosts,clearUsers};