// http module provides functionality 
// for creating HTTP servers and handling HTTP
const http = require('http');
const next = require('next');
// import cas.js! 
const casHandler = require('./server/cas');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  http.createServer(async (req, res) => {
    // the cas logic using cas.js
    await casHandler(req, res);

    // the next.js logic
    handle(req, res);
  }).listen(3000, (err) => {
    if (err) throw err;
    console.log('> Ready on http://localhost:3000');
  });
});