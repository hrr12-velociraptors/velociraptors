var User = require('../../db/models').User;

module.exports.newUser = function(req, res){
	// new user logic
  // checks if username exists in database, if not creates it
  User.findOrCreate({ 
    username: req.body.username, 
  })
  .spread(function(user, created) {
    console.log(user.get({
      plain: true
    }));
    console.log(created);
  });

  // Task.create({ title: 'foo', description: 'bar', deadline: new Date() }).then(function(task) {
  // you can now access the newly created task via the variable task
  // })
};

module.exports.getUsers = function(req, res){
	// return all users
  User.findAll().then(function(users) {
    if(!users) {
      console.log('No users found.');
      res.end();
    } else {
      res.json(users);
    }
  })
  .catch(function(err) {
    console.log('Error getting users:', err);
  });
};

module.exports.signin = function(req, res){
	// log in and set session
		// wrong user/pass data
};

module.exports.signUp = function(req, res){
	// add a new user to database
		// log them in 
};

module.exports.checkAuth = function(req, res, next){
	// returns if a user is logged in or not
};