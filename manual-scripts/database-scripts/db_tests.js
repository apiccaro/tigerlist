//Old set of tests when I was making first database methods.

const { Client } = require('pg');

const client = new Client({
  user: 'postgres',
  host: '10.3.0.49',
  port: 5432,
});

async function searchUser(key) {

  try {
//    await client.connect();

    const queryText = "SELECT * FROM UserTable WHERE email = '"+key+"';"
    const result = await client.query(queryText);

    console.log('Search Results:');
    console.table(result.rows);
  } 
  
  catch (error) {
    console.error('Error executing search:', error);
  } 

  finally {
//    await client.end();
  }

}

async function getAllUsers() {

  try {
    //await client.connect();

    const queryText = "SELECT * FROM UserTable"
    //const queryText = "SELECT table_name FROM information_schema.tables WHERE table_type = 'BASE TABLE';"
    const result = await client.query(queryText);

    console.log('Search Results:');
    console.table(result.rows);
  }

  catch (error) {
    console.error('Error executing search:', error);
  }

  finally {
  //  await client.end();
  }

}

async function getAllPosts() {

  try {
    //await client.connect();

    const queryText = "SELECT * FROM PostTable"
    //const queryText = "SELECT table_name FROM information_schema.tables WHERE table_type = 'BASE TABLE';"
    const result = await client.query(queryText);

    console.log('Search Results:');
    console.log(result.rows);
  }

  catch (error) {
    console.error('Error executing search:', error);
  }

  finally {
  //  await client.end();
  }

}


async function addBasicPost() {

  try {
    //await client.connect();

    const queryText = "INSERT INTO PostTable (title, price, description, category, condition, location, email, phone, active, flagged, moderator_ban) VALUES ('Sample Post', '10', 'This is a sample description.', 'Textbook', 'New', 'West Campus', 'jaym@cc.edu', '7192223333', true, false, false);"
    const result = await client.query(queryText);

  
//    console.log('Search Results:');
  //  console.table(result.rows);
  }

  catch (error) {
    console.error('Error executing addBasicPost:', error);
  }

  finally {
  //  await client.end();
  }

}

async function test1(){
	console.log("\nTEST 1: requests users from UserTable\n")

	console.log("Getting all users:")
	await getAllUsers()

	const keyString1 = 'roccy@cc.edu';
	console.log("Looking for user with email "+keyString1+":")
	await searchUser(keyString1);

	const keyString2 = 'jaym@cc.edu';
        console.log("Looking for user with email "+keyString2+":")
        await searchUser(keyString2);
	
	console.log("Test 1 Complete")
}

async function test2(){
        console.log("\nTEST 2: adds post to PostTable\n")
//        console.log("Adding post:")
//        await addBasicPost()

	console.log("Getting all posts:")
        await getAllPosts()


	console.log("Test 2 Complete")
}



async function main(){
  await client.connect();
	
	await test1()
	await test2()
	//await test3()
     
	await client.end();
}

main()
