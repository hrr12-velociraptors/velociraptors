var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var passport = require('passport');
var LocalStrategy = require('./local.js');
var User = require('../../db/models').User;

module.exports = function(app, express) {

  var userRouter = express.Router();
  var sessionRouter = express.Router();

  app.use(bodyParser.urlencoded({
      extend: true
  }));
  app.use(bodyParser.json());
  app.use(cookieParser());
  app.use(session({ secret: 'tinymonster123'}));
  app.use(passport.initialize());
  app.use(passport.session());
  app.use(express.static(__dirname + '/../../client'));

  passport.use(LocalStrategy);
  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });
  passport.deserializeUser(function(id, done) {
    User.findById(id)
    .then(function(user) {
      return done(null, user);
    })
    .catch(function(err) {
      return done(err);
    });
});

  app.use('/users', userRouter);
  app.use('/sessions', sessionRouter);

  require('../users/userRoutes.js')(userRouter);
  require('../sessions/sessionRoutes.js')(sessionRouter);
};
