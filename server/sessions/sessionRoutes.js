var sessionController = require('./sessionController.js');

module.exports = function(app) {

  app.get('/', sessionController.getSessions);
  app.post('/', sessionController.addSession);
  app.put('/', sessionController.updateStatus);
  app.delete('/', sessionController.deleteSession);

};