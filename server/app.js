var express = require("express");
var app = express();

var randomNumber = require('./modules/randomNumber.js');

app.get("/randomNumber", function(req, res) {
  res.send(randomNumber(100, 1000000));
});



app.listen(5000, function () {
  console.log('Listening on port 5000');

});
