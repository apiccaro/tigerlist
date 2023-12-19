// module to create HTTP servers 
const http = require('http');
// module for Next.js functionality 
const next = require('next');
/**
 * casHandler from cas.js 
 * cas.js actually exports a function (see file)
 * and this exported function is assigned to casHandler 
*/
const { casHandler } = require('./app/server/cas');

// ENV SETUP //
// initializes Next.js app and retrieves the request handler
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();


app.prepare().then(() => {
  // create our custom server 
  http.createServer(async (req, res) => {
    // the cas logic using casHandler
    // await to ensure that CAS logic is completed before moving on
    if (!await casHandler(req, res)) {
      return res.end(); // End response if authentication fails
    }

    // the next.js logic
    handle(req, res);
  }).listen(3000, (err) => {
    if (err) throw err;
    console.log('> Ready on http://tigerlist.coloradocollege.edu');
  });
});
