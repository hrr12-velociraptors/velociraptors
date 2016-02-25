
myApp.controller('SessionController', function($scope, Session) {
  $scope.sessions = [];
  $scope.getSessions = function() {
    Session.getSessions()
    .then(function(sessions) {
      console.log(sessions);
      $scope.sessions = sessions;
    });
  };
  $scope.getSessions();
  $scope.isClicked = false;
  $scope.startRegister = function(){
    console.log(this);
    angular.element(this).remove();
  };


  $scope.register = function(index, tuteeEmail, link, tutorEmail){
    var session = $scope.sessions[index];

    // send an email to user and register them
    var registerInfo = {tuteeEmail: tuteeEmail, link: link, tutorEmail: tutorEmail};
    console.log('REGISTER INFO - >',registerInfo);
    Session.register(registerInfo);

    // updating status of session in the server
    var updateInfo = {id: session.id, status: true };
    Session.updateStatus(updateInfo).then(function(updatedSession){
      $scope.getSessions();
    });
  };

  $scope.filterType = 'all';
  $scope.sessionFilter = function (session) {
    if (session.startTime) {
      var today = new Date();
      var sessionTime = new Date(session.startTime.substring(0,19));
      if ( $scope.filterType === 'all') {
        return true;
      } else if ($scope.filterType === 'day') {
        return sessionTime.getDay() === today.getDay() && sessionTime.getMonth() === today.getMonth() && sessionTime.getFullYear() === today.getFullYear();
      } 
    } else {
      return true;
    }
  };
  
  $scope.displayTime = function(time) {
    time = time.substring(0,16).split('T').join(' at ');
    return time += ' PST';
  };
})

.controller('CreateSessionController', function($scope, Session, Auth, $window) {
  $scope.session = {};
  $scope.myDate = new Date();

  $scope.createSession = function(session) {
    var date = $scope.myDate.toString().split(' ');
    var months = {Jan:'01',Feb:'02',Mar:'03',Apr:'04',May:'05',Jun:'06',Jul:'07',Aug:'08',Sep:'09',Oct:'10',Nov:'11',Dec:'12'};
    var month = months[date[1]];
    var day = date[2];
    var year = date[3];

    session.startTime = year + '-' + month + '-' + day + 'T' + $scope.time;
    console.log('session startTime:', session.startTime);  // 2016-02-26 12:30:00
    console.log('session before created:', session);
    Session.createSession(session).then(function(session){
      console.log('session after created:', session);
      $window.location.href = '/#/';
    });
  };
  

  $scope.isLoggedIn = function() {
    if (Auth.getLoggedIn()){
      $scope.$emit('loggedIn');
    } else {
      $window.location.href = '/#/signin';
    }
  };
  $scope.isLoggedIn();
});

