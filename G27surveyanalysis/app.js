var express = require('express');
var bodyParser = require('body-parser');

//implement an explicit controller
var surveyController = require('./surveyController');
var app = express();

var urlencodedParser = bodyParser.urlencoded({ extended: false });


app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'));

surveyController(app,urlencodedParser);

app.listen(3000);
console.log("listening on port: 3000");
