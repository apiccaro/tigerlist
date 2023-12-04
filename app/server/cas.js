const http = require('http');
const httpCasClient = require('http-cas-client');

const handler = httpCasClient({
  casServerUrlPrefix: 'https://cas.coloradocollege.edu/cas',
  serverName: 'https://tigerlist.vercel.app'
});

const casHandler = async (req, res) => {
  if (!await handler(req, res)) {
    return false; // Return false to indicate authentication failure
  }

  // Additional logic...
  const { principal, ticket } = req;
  console.log(principal, ticket);
  // { user: 'test', attributes: { ... } }

  // Your statements...

  return true; // Return true to indicate successful authentication
};

module.exports = casHandler;
