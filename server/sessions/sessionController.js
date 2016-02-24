var Session = require('../../db/models').Session;
var Mailgun = require('mailgun-js');
var config = require('../config/config');
var http = require('http-request');

module.exports.addSession = function(req, res){
  http.post('https://api.appear.in/random-room-name', function (err, response) {
    if (err) {
      console.error(err);
      return;
    }
    req.body.link = ("https://appear.in" + JSON.parse(response.buffer).roomName)
    Session.create(req.body).then(function(session) {
      res.send(session)
    })
    .catch(function(err) {
      console.error('Error creating session: ', err);
    });
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
      console.log(err);
    });
  });
};
module.exports.deleteSession = function(req, res){
  Session.findById(req.id).then(function(session){
    return session.destroy();
  }).then(function(){
    console.log('Session was deleted.');
  });
};

module.exports.checkAuth = function(req, res, next) {
  if(req.user && req.user.id) {
    next();
  } else {
    res.send('Please sign in to create a session.');
  }
};

module.exports.registerSession = function(req, res) {
  var mailgun = new Mailgun({ apiKey: config.mailGunAPIKey, domain: config.mailGunDomain });
  
  var data = {
    from: 'learnitnow@learnitnow.herokuapp.com',
    to: req.body.email,
    subject: 'Session Registration',
    html: 'Hello, thank you for registering for the session. This is your hangout link: ' + req.body.link + '.'
  };
  
  mailgun.messages().send(data, function(err, body) {
    console.log(data);
    if (err) {
      res.send('error', { error: err });
    } else {
      res.send('submitted', { email: req.body.email });
    }
  });
};