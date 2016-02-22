
myApp.controller('SessionController', function($scope, Session) {
  $scope.session = {};
  $scope.createSession = function(session) {
    Session.createSession(session);
    $scope.getSessions();
  };
  $scope.sessions = [];
  $scope.getSessions = function() {
    Session.getSessions()
    .then(function(sessions) {
      $scope.sessions = sessions;
    });
  };
  $scope.getSessions();
});
