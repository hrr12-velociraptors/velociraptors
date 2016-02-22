var LocalStrategy = require('passport-local').Strategy;
var User = require('../../db/models.js').User;

module.exports = new LocalStrategy({
    usernameField: 'email'
  },
  function(email, password, done) {
    User.findOne({ where: { email: email } })
      .then(function(user) {
        if (!user) {
          return done(null, false, { message: 'Username not found!' });
        } else if (!user.validPassword(password)) {
          return done(null, false, { message: 'Incorrect password!' });
        }
        return done(null, user);
      })
      .catch(function(err) {
        return done(err);
      });
  }
);