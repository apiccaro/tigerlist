// script from GitHub repo: https://github.com/produck/cas-client/blob/master/README.md 

const http = require('http');
const httpCasClient = require('http-cas-client'); //import the cas module from above repo 
export const user  = "a_piccaro@coloradocollege.edu";

const handler = httpCasClient({ // creating a handler with my specific configurations 
  casServerUrlPrefix: 'https://cas.coloradocollege.edu/cas',
  serverName: 'https://tigerlist.vercel.app'
});


const casHandler = async (req, res) => {
  if (!await handler(req, res)) {
    return false; // return false to indicate authentication failure
  }

  // additional logic...
  const { principal, ticket } = req;
  console.log(principal, ticket);
  // { user: 'test', attributes: { ... } }

  return true; // return true to indicate successful authentication
};

module.exports = casHandler; // export the casHandler function to make available for server.js
