myApp.controller('IndexController', function($scope, $window, Auth) {
  $scope.auth = { signin: true, signout: false };
  $scope.$on('loggedIn', function(){
    $scope.auth.signin = false;
    $scope.auth.signout = true;
  });
  
  $scope.signout = function(){
    Auth.signout();
    Auth.setLoggedIn(false);
    $scope.auth.signin = true;
    $scope.auth.signout = false;
  };
});