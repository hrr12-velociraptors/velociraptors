var bodyParser = require('body-parser');

// this is stuff i did in server that belongs here
module.exports = function(app, express) {

  var userRouter = express.Router();
  var sessionRouter = express.Router();

  app.use(bodyParser.json());
  app.use(express.static(__dirname + '/../../client'));

  // app.use('/users', userRouter);
  // app.use('/sessions', sessionRouter);

  // require('../users/userRoutes.js')(userRouter);
  // require('../sessions/sessionRoutes.js')(sessionRouter);
};
