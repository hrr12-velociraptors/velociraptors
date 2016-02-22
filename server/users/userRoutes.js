var userController = require('./userController');
var passport = require('passport');

module.exports = function(app){

	// '/users'
	app.post('/', userController.newUser);
	app.get('/', userController.getUsers);

	// // '/signIn'
	app.post('/signIn', passport.authenticate('local', { session: true }), userController.signIn);

	// '/signOut'
	app.post('/signOut', userController.signOut);
	
	// // '/signedIn'
	// app.get('/signedIn', userController.checkAuth);
};