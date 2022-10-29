'use strict';
console.log("\n***The server-local.js file is being run***");
const app = require('./express/server');
console.log("\n***This is run after requiring the server.js file***");

app.listen(3000, () => console.log('\nLocal app listening on port 3000!'));
