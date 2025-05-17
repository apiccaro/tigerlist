//Not tested in a while, use with caution. (and db display scripts to verify results)

const readline = require("readline");
const { Client } = require('pg');


/** Get client instance
 * 
 * @returns client instance
 */
function getClient(){
    return new Client({
        user: 'postgres',
        host: '10.3.0.49',
        port: 5432,
    });
} 

/** User enters a new filename for input, empty string returns original
 * 
 * @param {number} index - index of entry. Just used for print context
 * @param {string} prior - prior value at current index
 * @returns user's entered response, or prior if response is an empty string.
 */
function rename(index, prior){
    return new Promise((resolve, reject) => {
        console.log("Index " + index + ": ");
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        rl.question("Type new file to replace '" + prior + "' (press enter to skip): ", (response) => {
            rl.close();
            if (response === "") {
                resolve(prior);
            } else {
                resolve(response);
            }
        });
    });
}


/** Iterates through an array calling rename() on each item
 * 
 * @param {Array<string>} array - set of file names
 * @returns newArray - array with updated file names
 */
async function getNewArray(array){
    const newArray = [];
    for (let i = 0; i < array.length; i++) { 
        console.log(array[i]); 
        const choice = await rename(i, array[i]);
        newArray.push(choice);
    }
    return newArray;
}

/** Requests a post_key from the user.
 * 
 * @returns key indicating which post to modify
 */
async function getPostID(){
    return new Promise((resolve, reject) => {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        rl.question("Enter post's post_key: ", (postKey) => {
            rl.close();
            resolve(postKey);
        });
    });
}


/** Execures a given query 
 * includes debug prints
 * @param {*} queryText 
 * @returns 
 */
async function queryClient(queryText){
    const client = getClient();
    let errorStatus;
    let result;

    try {
        await client.connect();
        result = await client.query(queryText);
    } catch (error) {
        errorStatus = error;
    } finally {
        await client.end();
    }

    console.log("\nqueryText: " + queryText);
    console.log("result: " + result.rows); // Access result.rows directly

    const queryResult = {
        queryFailed: errorStatus !== undefined, // Update condition
        queryResponse: result.rows, // Update to store result.rows
    };

    return queryResult;
}

/** Ask for post id, search db for image value of corresponding key
 * 
 * @returns db response
 */
async function step1(){
    const postKeyValue = await getPostID();
    const query1Text = "SELECT images FROM posttable WHERE post_key = '" + postKeyValue + "';";
    const query1 = await queryClient(query1Text);
    console.log("query1.queryResponse: ", query1.queryResponse);
    return query1.queryResponse
}

/** Takes original array, replaces with user entered file names.
 * 
 * @param {*} oldArray original array
 */
async function step2(oldArray){
    const postKeyValue = await getPostID();
    const imagesValue = await getNewArray(oldArray); // oldArray is not defined, assuming you meant to pass a parameter here
    const query2Text = "UPDATE posttable SET images = $1 WHERE post_key = $2;"; // Use parameterized query
    const query2 = await queryClient(query2Text, [imagesValue, postKeyValue]); // Pass values as an array
    console.log("query2.queryResponse: ", query2.queryResponse);
}

/**
 * Use both steps to update a listing's image file names
 */
async function main(){
    try{
        var currentImages = await step1();
        await step2(currentImages);
    }
    catch (error){
        console.log(error)
    }
}

main();