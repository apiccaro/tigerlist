const sql = require('mssql');
const getConfig = require('./azureAuth.js');


const useDB = false

function dummyMethod_read(code){
    console.log("Hello from read.js - code:",code)
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

async function getAllPosts() {
    try {
        const connection = await sql.connect(getConfig());
        const request = connection.request();

        const result = await request.query('SELECT * FROM Posts');
        await connection.close();

        return result.recordset;

    } catch (err) {
        console.error('Error selecting all posts', err);
        return [];
    }
}

async function getAllUsers() {
    try {
        const connection = await sql.connect(getConfig());
        const request = connection.request();

        const result = await request.query('SELECT * FROM Users');
        await connection.close();

        return result.recordset;

    } catch (err) {
        console.error('Error selecting all users', err);
        return [];
    }
}

async function DBreadPost(postID) {
    try {
        const connection = await sql.connect(getConfig());
        const request = connection.request();

        const result = await request
            .input('postID', sql.Int, postID)
            .query('SELECT * FROM Posts WHERE postID = @postID');

        await connection.close();

        return result.recordset;
    } catch (err) {
        console.error('Error: selecting post with ID '+postID, err);
        return null;
    }
}

async function getAllUsers() {
    try {
        const connection = await sql.connect(getConfig());
        const request = connection.request();

        const result = await request.query('SELECT * FROM Users');
        await connection.close();

        return result.recordset;

    } catch (err) {
        console.error('Error selecting all users', err);
        return [];
    }
}

function sampleUserDict(){
    userDict = {
        userID: "123",
        email: "jayM@cc.edu",
        name: "Jay M"
    }
    return userDict
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

// async function DBinsertForm2() {
    //     try {
    //       const result = await sql.query`INSERT INTO Listings (Column1, Column2) VALUES ('Value1', 'Value2')`;
    //       console.log(result.rowsAffected);
    //     } catch (err) {
    //       console.error('Error:', err);
    //     }
    //   }
    
    // async function DBinsertUser2(userDict) {
    //     try {
    //       const result = await sql.query`INSERT INTO Users (Column1, Column2) VALUES ('Value1', 'Value2')`;
    //       console.log(result.rowsAffected);
    //     } catch (err) {
    //       console.error('Error:', err);
    //     }
    //   }
  
module.exports = {readPost, getAllPosts, getAllUsers, dummyMethod_read};