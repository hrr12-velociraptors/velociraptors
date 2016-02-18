var userController = require('./userController');

module.exports = function(app){

	// '/users'
	app.post('/users', userController.newUser);
	app.get('/users', userController.getUsers);

	// '/signIn'
	app.post('/signIn', userController.signIn);

	// 'signUp'
	app.post('/signUp', userController.signUp);
	
	// 'signedIn'
	app.get('signedIn', userController.checkAuth);
}