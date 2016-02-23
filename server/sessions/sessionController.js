var Session = require('../../db/models').session;

module.exports.addSession = function(req, res){
  Session.create(req.body).then(function(session) {
    // console.log(session);
    res.sendStatus(201);
  })
  .catch(function(err) {
    console.error('Error creating session: ', err);
  });
};

module.exports.getSessions = function(req, res){
  Session.findAll(req.body).then(function(sessions) { // 
    if (sessions){
      console.log(sessions);
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

module.exports.deleteSession = function(req, res){
  Session.findOne({ userId: req.body.userId }).then(function(session){
    return session.destroy();
  }).then(function(){
    console.log('Session was deleted.');
  });
};