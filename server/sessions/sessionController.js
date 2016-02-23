var Session = require('../../db/models').Session;

module.exports.addSession = function(req, res){
  Session.create(req.body).then(function(session) {
    // console.log(session);
    res.send(session)
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
module.exports.updateStatus = function(req, res){
  var status = req.body.status;
  var id = parseInt(req.body.id);

  Session.findById(id).then(function(session){
    session.status = status;
    session.save().then(function(){
      res.send(session);
    }).catch(function(err){
      console.log(err)
    })
  });
}
module.exports.deleteSession = function(req, res){
  Session.findOne({ userId: req.body.userId }).then(function(session){
    return session.destroy();
  }).then(function(){
    console.log('Session was deleted.');
  });
};