var User = require('../../db/models').User;

module.exports.newUser = function(req, res){

  User.create({ username: req.body.username, password: req.body.password, email: req.body.email })
  .then(function(user) {
    res.send({username: user.username, email: user.email})
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

module.exports.getOneUser = function(req, res) {
  User.findOne({ id: req.params.id })
    .then(function (user) {
      res.send(user);
    })
    .catch(function (err) {
      console.error(err);
      res.end();
    });
};

module.exports.updateUser = function(req, res){
  var status = req.body.status;
  var email = req.body.email;

  Session.findOne({ email: email }).then(function(user){
    user.status = status;
    user.save().then(function(){
      res.send({ email: user.email, status: user.status})
    }).catch(function(err){
      console.log(err)
    })
  });
}

module.exports.signIn = function(req, res){
 // log in and sset session
    // wrog user/pass data
  res.json({ id: req.user.id, username: req.user.username, email: req.user.email });
};

// deprecated

module.exports.isLoggedIn = function(req, res){
  var loggedIn = false;
  if (req.user && req.user.id){
    loggedIn = true;
  }
  res.send(loggedIn);
};

module.exports.signOut = function(req, res){
  // add a neew user to database
    // log them in
  req.logout();
  res.send('Logged out.');
};

