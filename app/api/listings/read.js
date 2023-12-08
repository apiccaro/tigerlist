const sql = require('mssql');
const useDB = false
const {getValidRequest,testMethod_access} = require('./access.js');


//For external use. Will return sample data until the new database methods are added. 
export default async function handle(req,res) {
    if (useDB){
        //console.log("Functionality not added to this method yet")
        //post = new_readPost(key)
       // return post
    }
    else {
        return samplePostDict(0)
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






 