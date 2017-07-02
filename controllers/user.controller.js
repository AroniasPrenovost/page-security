var User = require('../models/User.model');

// user registration logic
exports.register = function(req, res) {
	var newUser = new User();

	// grabs name and passes to db 
	newUser.username = req.body.username;
	newUser.email = req.body.email;
	newUser.password = req.body.password;

	newUser.save(function(err, user) {
		if(err) {
			console.log(err.message);
			console.log(err.errors.username.message);
			res.send('error registering user');
		} else {
			console.log(user);
			res.redirect('/signup.html');
		}
	});
};
