const sql = require('mssql');
const getConfig = require('./azureAuth.js');


const useDB = true

function dummyMethod_write(code){
    console.log("Hello from write.js - code:",code)
  }

function writeUser(userDict){
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

function writePost(postDict){
    console.log("\nwrite.js Received post write request:")
    printDict(postDict)
    console.log("\n")

    if (useDB){
        DBinsertPost(postDict)
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
  
module.exports = {writeUser, writePost, sampleUserDict, samplePostDict, dummyMethod_write};