var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
	username: String,
	email: String,
	password: String
});

module.exports = mongoose.model('User', userSchema);