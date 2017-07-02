var express = require('express');
var app = express();
var BodyParser = require('body-parser');
var mongoose = require('mongoose');
var path = require('path');

var port = 8080;
var db = 'mongodb://localhost:userExample';

mongoose.connect(db);

app.use(express.static(path.join(__dirname, 'views')));

app.use(BodyParser.json());
app.use(BodyParser.urlencoded({
	extended: true
}));

app.listen(port, function() {
	console.log('app listening on port ' + port)
});