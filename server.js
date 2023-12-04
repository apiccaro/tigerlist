const http = require('http');
const next = require('next');
const casHandler = require('./app/server/cas');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  http.createServer(async (req, res) => {
    // the cas logic using casHandler
    if (!await casHandler(req, res)) {
      return res.end(); // End response if authentication fails
    }

    // the next.js logic
    handle(req, res);
  }).listen(3000, (err) => {
    if (err) throw err;
    console.log('> Ready on http://localhost:3000');
  });
});
