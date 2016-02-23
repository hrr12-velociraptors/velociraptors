
myApp.controller('SessionController', function($scope, Session) {
  $scope.sessions = [];
  $scope.getSessions = function() {
    Session.getSessions()
    .then(function(sessions) {
      $scope.sessions = sessions;
    });
  };
  $scope.getSessions();
  $scope.sessionFilter(session) {
    var today = new Date();
    var sessionTime = new Date(session.startTime.replace(/-/g,"/"));
    if ( $scope.filterType === 'all') {
      return true;
    } else if ($scope.filterType === 'day') {
      return sessionTime.getDay() === today.getDay() && sessionTime.getMonth() === today.getMonth() && sessionTime.getFullYear() === today.getFullYear();
    } else if ($scope.filterType === 'week') {
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

