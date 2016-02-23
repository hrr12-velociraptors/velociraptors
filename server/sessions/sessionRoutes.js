var sessionController = require('./sessionController.js');
var passport = require('passport');

module.exports = function(app) {

  app.get('/', sessionController.getSessions);
  app.post('/', sessionController.checkAuth, sessionController.addSession);
  app.put('/', sessionController.updateStatus);
  app.delete('/', sessionController.deleteSession);

};