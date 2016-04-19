'use strict';

var profile = require("./profile.js");

//call node app.js joshtimonen chalkers
var users = process.argv.slice(2);
users.forEach(profile.get);

// var users = ['joshtimonen', 'chalkers' ];
// users.forEach(profile.get);
// users.forEach(function(username){
//   profile.get(username);
// });

// profile.get("chalkers");
// profile.get("samarthpaboowal");
// profile.get("joshtimonen");
