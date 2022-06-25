console.log("Script linked");


function displayDateTime() {
    var now = moment();
    $("#current-date-time").text(now);
};

setInterval(displayDateTime, 1000);