
myApp.controller('SignupController', function($scope, Auth) {
  $scope.user = {};
  $scope.signup = function(user) {
    Auth.signup(user);
  };
});
