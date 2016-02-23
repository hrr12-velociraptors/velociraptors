
myApp.controller('SessionController', function($scope, Session) {
  $scope.sessions = [];
  $scope.getSessions = function() {
    Session.getSessions()
    .then(function(sessions) {
      $scope.sessions = sessions;
    });
  };
  $scope.getSessions();
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
        $window.location.href = '/#/users/signIn';
      } 
    });
  };
  $scope.isLoggedIn();
});

