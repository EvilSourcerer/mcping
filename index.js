console.log("MC ping started");
var mcping = require('mc-ping-updated');
var colors = require('colors');
const fs = require('fs');
var finished = true;
setInterval(function () {
    randomIP = randomNum(0, 256) + "." + randomNum(0, 256) + "." + randomNum(0, 256) + "." + randomNum(0, 256);
    mcping(randomIP, 25565, function(err, res) {
        if (err) {
            console.log(randomIP + " is " + colors.red("offline"));
        }
        else {
            console.log(randomIP + " is " + colors.green("online"));
            fs.appendFile('ips.txt', '\n' + randomIP, function (err) {
                if(err) {
                    console.log("error saving to file! Permission problem?".red);
                }
            });
        }
    }, 3000);
}, 200);

function randomNum(min, max) {
    var random = Math.floor(Math.random() * (+max - +min)) + +min;
    return random;
}