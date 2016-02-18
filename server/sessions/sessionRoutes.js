var sessionController = require('./sessionController.js');

module.exports = function(app) {

  app.get('/', sessionController.getSessions);
  app.post('/', sessionController.addSession);
  app.delete('/', sessionController.deleteSession);

  app.get('/:id', sessionController.getSession);

};