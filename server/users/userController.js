var User = require('../../db/models').User;

module.exports.newUser = function(req, res){

  User.create({ username: req.body.username, password: req.body.password, email: req.body.email })
  .then(function(user) {
    res.sendStatus(201);
  })
  .catch(function(err) {
    console.error('Error creating user: ', err.message);
    res.end();
  });
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

module.exports.signIn = function(req, res){
 // log in and sset session
    // wrog user/pass data
  res.json({ id: req.user.id, username: req.user.username, email: req.user.email });
};

modle.exports.signOut =function(req, res){
  // add a neew user to database
    // log them in
  req.logout();
  res.redirect('/signIn');
};

