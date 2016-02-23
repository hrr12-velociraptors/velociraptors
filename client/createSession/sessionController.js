
myApp.controller('SessionController', function($scope, Session) {
  $scope.sessions = [];
  $scope.getSessions = function() {
    Session.getSessions()
    .then(function(sessions) {
      $scope.sessions = sessions;
    });
  };
  $scope.getSessions();

  $scope.isClicked = false;
  $scope.startRegister = function(){
    console.log(this);
    angular.element(this).remove();
  };

  $scope.register = function(index, email, link){
    var session = $scope.sessions[index];

    // send an email to user and register them
    var registerInfo = {email: email, link: link};
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
})

.controller('CreateSessionController', function($scope, Session, Auth, $window) {
  $scope.session = {};

  $scope.createSession = function(session) {
    var date = $scope.date.split('/');
    var month = date[0];
    var day = date[1];
    var year = date[2];
    session.startTime = year + '-' + month + '-' + day + ' ' + $scope.time;
    Session.createSession(session).then(function(){
      $window.location.href = '/#/';
    });
  };
  $scope.isLoggedIn = function() {
    // Auth.isLoggedIn().then(function(loggedIn){
    //   if(!loggedIn) {
    //     $window.location.href = '/#/signin';
    //   } else {
    //     $scope.$emit('loggedIn');
    //   }
    // });
    if (Auth.getLoggedIn()){
      $scope.$emit('loggedIn');
    } else {
      $window.location.href = '/#/signin';
    }
  };
  $scope.isLoggedIn();
});

