'use strict';

var username = "joshtimonen";
var https = require('https');

function printMessage(username, badgeCount, points){
  var message = username + " has " + badgeCount + " total badge(s) and "
  + points + " points in Javascript ";
  console.log(message);
};

var request = https.get("https://teamtreehouse.com/" + username
  + ".json", function(response){
    console.log(response.statusCode);
    var body = "";
    if (response.statusCode == 200) {
      console.log("Connected");
      response.on("data", function(chunk){
        body += chunk;
      });
    }
      else
      {
        console.log("Not connected");
      }
      response.on("end", function(){
        var profile = JSON.parse(body);
        console.log(profile);
        printMessage(username, profile.badges.length,
        profile.points.JavaScript);
      });
    });
