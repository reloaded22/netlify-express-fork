'use strict';
console.log("\n***Calling the server.js file from server-local.js***");
const app = require('./express/server');
console.log("\n***This is run after requiring the server.js file***");

app.listen(3000, () => console.log('\nLocal app listening on port 3000!'));
