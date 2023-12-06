const sql = require('mssql');
const useDB = false
const {getValidRequest,testMethod_access} = require('./access.js');


//For external use. Will return sample data until the new database methods are added. 
function getPost(key){
    if (useDB){
        //console.log("Functionality not added to this method yet")
        post = new_readPost(key)
        return post
    }
    else {
        return samplePostDict(key)
    }
}
//For external use. Will return sample data until the new database methods are added. 
function getUser(key){
    if (useDB){
        console.log("Functionality not added to this method yet")
    }
    else {
        return sampleUserDict(key)
    }
}
//For external use. Will return sample data until the new database methods are added. 
function getAllPosts(){
    if (useDB){
        console.log("Functionality not added to this method yet")
    }
    else {
        allPosts = [samplePostDict(0),samplePostDict(1),samplePostDict(2)]
        return allPosts
    }
}
//Returns sample user data in place of database access. Feel free to change or add presets if you want to test a certain result.
function sampleUserDict(number){
    //Default 
    userDict = {
        email: "roccy@coloradocollege.edu",
        name: "Roccy"
    }
    //Check for valid preset number to replace default
    if (number==1){
        userDict = userDict = {
            email: "JayM@coloradocollege.edu",
            name: "Jay M"
        }
    }
    else if (number==2){
        userDict = userDict = {
            email: "AnnikaP@coloradocollege.edu",
            name: "Annika P"
        }
    }
    else if (number==3){
        userDict = userDict = {
            email: "LucyF@coloradocollege.edu",
            name: "Lucy F"
        }
    }
    else if (number==4){
        userDict = userDict = {
            email: "JackD@coloradocollege.edu",
            name: "Jack D"
        }
    }
    
    return userDict
}
//Returns sample post data in place of database access. Feel free to change or add presets if you want to test a certain result.
function samplePostDict(number){
    //Default 
    postDict = {
        key: "(unique key placeholder 0)",
        title: "(Listing)",
        price: 0,
        description: "listing description",
        category: "Appliance",
        condition: "New",
        location: "Off Campus",
        email: "tiger0@cc.edu",
        phone: "(719)-123-4567",
        active: "true"
    }
    //Check for valid preset number. Can always fall back to default
    if (number==1){
        postDict = {
            key: "(unique key placeholder 1)",
            title: "(Used road bike)",
            price: 100,
            description: "its a bike description",
            category: "Appliance",
            condition: "Used-Good",
            location: "East Campus",
            email: "tiger1@cc.edu",
            phone: "(719)-123-4568",
            active: "true"
        }
    }
    else if (number==2){
        postDict = postDict = {
            key: "(unique key placeholder 2)",
            title: "(Introductory Modern Physics)",
            price: 20,
            description: "its a book",
            category: "Textbook",
            condition: "Used-Like New",
            location: "West Campus",
            email: "tiger0@cc.edu",
            phone: "(719)-123-4569",
            active: "true"
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

// async function new_readPost(postID) {
//     const newRequest = getValidRequest();

//     if (!newRequest) {
//         console.log("Failed to obtain a valid database request. Returning null");
//         return null;
//     }

//     try {
//         const result = await newRequest
//             .input('postID', sql.Int, postID)
//             .query('SELECT * FROM Posts WHERE postID = @postID');
        
//         return result.recordset;
//     } catch (err) {
//         console.error('Failed to select post with ID ' + postID, err);
//         return null //does this work for us?
//         throw err; // Do we need to rethrow the error?
//     } finally {
//         if (connection) {
//             await connection.close();
//         }
//     }
// }

// function readPost(id){
//     if (useDB){
//         console.log("Attempting to use database")
//         return DBreadPost(id)
//     }
//     else{
//         console.log("Returning Simulated placeholder post")
//         return samplePostDict(id)
//     }
// }

// async function getAllPosts() {
//     try {
//         const connection = await sql.connect(getConfig());
//         const request = connection.request();

//         const result = await request.query('SELECT * FROM Posts');
//         await connection.close();

//         return result.recordset;

//     } catch (err) {
//         console.error('Error selecting all posts', err);
//         return [];
//     }
// }

// async function getAllUsers() {
//     try {
//         const connection = await sql.connect(getConfig());
//         const request = connection.request();

//         const result = await request.query('SELECT * FROM Users');
//         await connection.close();

//         return result.recordset;

//     } catch (err) {
//         console.error('Error selecting all users', err);
//         return [];
//     }
// }

// async function DBreadPost(postID) {
//     try {
//         const connection = await sql.connect(getConfig());
//         const request = connection.request();

//         const result = await request
//             .input('postID', sql.Int, postID)
//             .query('SELECT * FROM Posts WHERE postID = @postID');

//         await connection.close();

//         return result.recordset;
//     } catch (err) {
//         console.error('Error: selecting post with ID '+postID, err);
//         return null;
//     }
// }

// async function getAllUsers() {
//     try {
//         const connection = await sql.connect(getConfig());
//         const request = connection.request();

//         const result = await request.query('SELECT * FROM Users');
//         await connection.close();

//         return result.recordset;

//     } catch (err) {
//         console.error('Error selecting all users', err);
//         return [];
//     }
// }

// function printDict(dict){
//     for ( d in dict){
//         console.log(d,":",dict[d])
//     }
// }



// /*
// WriteUserDataStr (userID,Str email,Str preferredname)
// WritePostData(Str (userID,Int category,Str title,Str description,null 

// async function DBinsertForm2() {
//         try {
//           const result = await sql.query`INSERT INTO Listings (Column1, Column2) VALUES ('Value1', 'Value2')`;
//           console.log(result.rowsAffected);
//         } catch (err) {
//           console.error('Error:', err);
//         }
//       }
    
//     async function DBinsertUser2(userDict) {
//         try {
//           const result = await sql.query`INSERT INTO Users (Column1, Column2) VALUES ('Value1', 'Value2')`;
//           console.log(result.rowsAffected);
//         } catch (err) {
//           console.error('Error:', err);
//         }
//       }
//   */
// module.exports = {getUser,getPost,getAllPosts,testMethod_read};