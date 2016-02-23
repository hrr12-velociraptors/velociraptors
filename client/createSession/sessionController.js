
myApp.controller('SessionController', function($scope, Session) {
  $scope.sessions = [];
  $scope.getSessions = function() {
    Session.getSessions()
    .then(function(sessions) {
      $scope.sessions = sessions;
    });
  };
  $scope.getSessions();
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
  $scope.updateStatus = function(index){
    var session = $scope.sessions[index];
    var updateInfo = {id: session.id, status: true };
    Session.updateStatus(updateInfo).then(function(updatedSession){
      $scope.getSessions();
    });
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
    Auth.isLoggedIn().then(function(loggedIn){
      if(!loggedIn) {
        $window.location.href = '/#/signin';
      } else {
        $scope.$emit('loggedIn');
      }
    });
  };
  $scope.isLoggedIn();
});

