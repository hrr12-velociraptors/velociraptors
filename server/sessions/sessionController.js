var User = require('../../db/models').Session;

module.exports.addSessions = function(req, res){
  Session.create(req.body).then(function(session) {
    res.sendStatus(201);
  })
  .catch(function(err) {
    console.error('Error creating session: ', err);
  });
};

module.exports.getSessions = function(req, res){
  Session.findAll(req.body).then(function(sessions) { // 
    if (sessions){
      res.json(sessions);
    } else {
      console.log('No sessions found');
      res.end();
    }
  })
  .catch(function(err) {
    console.error('Error getting sessions: ', err);
    res.end();
  });
};

// module.exports.getSession = function(req, res){

// };

module.exports.deleteSession = function(req, res){
  Session.findOne({ userId: req.body.userId }).then(function(session){
    return session.destroy();
  }).then(function(){
    console.log('Session was deleted.');
  });
};