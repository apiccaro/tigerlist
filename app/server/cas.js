// script from GitHub repo: https://github.com/produck/cas-client/blob/master/README.md 

const http = require('http');
const httpCasClient = require('http-cas-client'); //import the cas module from above repo 


const handler = httpCasClient({ // creating a handler with my specific configurations 
  casServerUrlPrefix: 'https://cas.coloradocollege.edu/cas',
  serverName: 'https://tigerlist.vercel.app'
});


const casHandler = async (req, res) => {
  if (!await handler(req, res)) {
    return false; // return false to indicate authentication failure
  }

   // extract user information
   const { principal, ticket } = req;

   // assuming the email is sent as an attribute
   const userEmail = principal.attributes.email;
   const testUserEmail = "l_flanagan@coloradocollege.edu"
 
   if (userEmail) {
     console.log("User's Email: ", userEmail);
     // here is where we would store the email in the database! 
   }

  // additional logic...
  // const { principal, ticket } = req;
  // console.log(principal, ticket);
  // { user: 'test', attributes: { ... } }

  return true; // return true to indicate successful authentication
};

module.exports = casHandler; // export the casHandler function to make available for server.js
