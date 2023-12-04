// from GitHub https://github.com/produck/cas-client/blob/master/README.md

//imports Node.js http module 
const http = require('http');
//imports cas-client module 
const httpCasClient = require('http-cas-client');

//initializes cas client handler using https-cas-client module we just imported 
//configures handler with the url prefix, serverName
const handler = httpCasClient({
    /**
     * TODO: 
     * casServerUrlPrefix: replace with CC's CAS server URL
    */
  casServerUrlPrefix: 'https://cas.coloradocollege.edu/cas/',
  serverName: 'http://localhost:3000'
});

// now creates an HTTP server for request handling

// Extracts the principal (user identity) and ticket from the request object.
// Logs the principal and ticket to the console.
// Performs any additional logic you might want to add (commented as "// your statements...").
// Sends the response with the text 'hello world'.
http.createServer(async (req, res) => {
    // if CAS authentification fails OR
    // if user is not authenticated, end response 
  if (!await handler(req, res)) {
    return res.end();
  }

  //res.redirect('/makelisting');

  /**
   * NOT SURE IF BELOW IS NECESSARY 
   */
  // extract princial (user ID) and ticket from request object 
  const { principal, ticket } = req;
  console.log(principal, ticket);
  // { user: 'test', attributes: { ... } }

  // your statements...
  res.end('hello world');
//listening on port 80
}).listen(80);
