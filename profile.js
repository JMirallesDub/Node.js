'use strict';

var https = require('https');

// function to print message
function printMessage(username, badgeCount, points){
  var message = username + " has " + badgeCount + " total badge(s) and "
  + points + " points in Javascript ";
  console.log(message);
};

 //function to print error message
 function printError(error){
   console.log(error.message);
 }

function get(username){
        //obtain data from api
        var request = https.get("https://teamtreehouse.com/" + username
          + ".json", function(response){
            console.log(response.statusCode);
            var body = "";
              console.log("Connected");
              response.on("data", function(chunk){
                body += chunk;
              });
              response.on("end", function(){
                if(response.statusCode === 200){
                try{
                var profile = JSON.parse(body);
                console.log(profile);
                printMessage(username, profile.badges.length,
                profile.points.JavaScript);
                }
                catch(error){
                  printError(error);
                }
              }
              else{
                printError({message:
                  "There was an error getting profile for" + username + "."})
              }
              });
            });

        // Connection error
        request.on("error", printError);
}

//export get function
module.exports.get = get;
