'use strict';
const express = require('express');
//const path = require('path');
const serverless = require('serverless-http');

const app = express();
//const router = express.Router();

console.log("\n*************************************");
console.log("***The server.js file is being run***");
console.log("*************************************\n");

// ROUTES //
app.get("/", (req, res) => {
  console.log("\nget '/' route being called");
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write("<h4>Welcome to the express-netlify excercise</h4>");
  res.write("<h1>This is a message from HOME</h1>");
  res.end();
});

app.get("/test", (req, res) => {
  console.log("\nget '/test' route being called");
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write("<h4>Welcome to the express-netlify excercise</h4>");
  res.write("<h1>This is a message from TEST</h1>");
  res.end();
});

app.get("/.netlify/functions/server", (req, res) => {
  console.log("\nget '/.netlify/functions/server' route being called");
  res.writeHead(200, { "Content-Type": "text/html" });
  // res.write(
  //   "<h4>This is the message from the get '/' route of the server.js file</h4>"
  // );
  res.write("<h1>Hello from Express.js!</h1>");
  res.end();
});

app.get("/.netlify/functions/server/test", (req, res) => {
  console.log("\nget '.netlify/functions/server/test' route being called");
  res.json({ route: req.originalUrl, message: "server.js file" });
});

//router.post('/', (req, res) => res.json({ postBody: req.body }));
///////////

app.use(express.json());
//app.use('/andrew', router);
//app.use('/.netlify/functions/server', router);  // path must route to lambda
//app.use('/', (req, res) => res.sendFile(path.join(__dirname, '../index.html')));

// To be used in server-local.js (express server)
module.exports = app; 

// To be used by netlify functions (netlify server)
module.exports.handler = serverless(app);
