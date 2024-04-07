const readline = require("readline");

const { Client } = require('pg');

function getClient(){
    return new Client({
        user: 'postgres',
        host: '10.3.0.49',
        port: 5432,
    });
} 

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

async function getNewArray(array){
    const newArray = [];
    for (let i = 0; i < array.length; i++) { 
        console.log(array[i]); 
        const choice = await rename(i, array[i]);
        newArray.push(choice);
    }
    return newArray;
}

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
    console.log("result: " + result);
    console.log()

    const queryResult = {
        queryFailed: errorStatus === undefined,
        queryResponse: result,
        queryRows: result.rows
    };

    return queryResult;
}

async function step1(){
    const postKeyValue = await getPostID();
    const query1Text = "SELECT images FROM posttable WHERE post_key = " + postKeyValue + ";";
    const query1 = await queryClient(query1Text);
    console.log("query1.queryRows: "+query1.queryRows);

}

async function step2(){
    const postKeyValue = await getPostID();
    const imagesValue = await getNewArray(oldArray);
    const query2Text = "UPDATE posttable SET images = '" + imagesValue + "' WHERE post_key = '" + postKeyValue + "';";
    const query2 = await queryClient(query2Text);
    console.log(query2.rows);
}
async function main(){
    await step1();
}

main();
