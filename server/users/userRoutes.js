var userController = require('./userController');

module.exports = function(app){

	// '/users'
	app.post('/', userController.newUser);
	app.get('/', userController.getUsers);

	// '/signIn'
	app.post('/signIn', userController.signIn);

	// '/signUp'
	app.post('/signUp', userController.signUp);
	
	// '/signedIn'
	app.get('/signedIn', userController.checkAuth);
}