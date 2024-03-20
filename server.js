const { createServer } = require('https');
const { parse } = require('url');
const next = require('next');
const fs = require('fs');

const PORT = 443;
const HOSTNAME = 'localhost.clothing.bin';

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev, hostname: HOSTNAME, port: PORT });
const handle = app.getRequestHandler();

const httpsOptions = {
  key: fs.readFileSync('./key.pem'),
  cert: fs.readFileSync('./cert.pem'),
};

app.prepare().then(() => {
  createServer(httpsOptions, (req, res) => {
    const parseUrl = parse(req.url, true);
    handle(req, res, parseUrl);
  }).listen(3000, (err) => {
    if (err) throw err;
    console.log('> Ready on https://localhost.clothing.bin:3000');
  });
});
