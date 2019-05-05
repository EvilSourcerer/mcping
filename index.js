console.log("MC ping started");
var tcpping = require("tcp-ping");
var colors = require('colors');
const fs = require('fs');
var finished = true;
setInterval(function () {
    randomIP = randomNum(0, 256) + "." + randomNum(0, 256) + "." + randomNum(0, 256) + "." + randomNum(0, 256);
    tcpping.probe(randomIP, 25565, function (err, available) {
        console.log(randomIP + " is " + (available ? colors.green("online") : colors.red("offline")));
        finished = true;
        if (available) {
            fs.appendFile('ips.txt', '\n' + randomIP, function (err) {
                console.log("error saving to file! Permission problem?".red());
            });
        }
    });
}, 200);

function randomNum(min, max) {
    var random = Math.floor(Math.random() * (+max - +min)) + +min;
    return random;
}