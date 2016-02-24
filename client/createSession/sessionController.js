
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

  // $scope.updateStatus = function(index){
  //   var session = $scope.sessions[index];
  //   var updateInfo = {id: session.id, status: true };

  //   Session.updateStatus(updateInfo).then(function(updatedSession){
  //     $scope.getSessions();
  //   })
  // }
})

.controller('CreateSessionController', function($scope, Session, Auth, $window) {
  $scope.session = {};
  
  $scope.createSession = function(session) {
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

