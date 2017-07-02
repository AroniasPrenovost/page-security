var express = require('express');
var app = express();
var BodyParser = require('body-parser');
var mongoose = require('mongoose');
var path = require('path');
var controller = require('./controllers/user.controller');

var port = 8080;
var db = 'mongodb://localhost/userExample1';

mongoose.connect(db);

app.use(express.static(path.join(__dirname, 'views')));

app.use(BodyParser.json());
app.use(BodyParser.urlencoded({
	extended: true
}));

// default route 
app.get('/', function(req, res) {
	res.render('index.html');
});

// resides in user.controller.js
app.post('/', controller.register);


app.listen(port, function() {
	console.log('app listening on port ' + port)
});

