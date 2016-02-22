
myApp.controller('SigninController', function($scope, Auth) {
  $scope.user = {};
  $scope.signin = function(user) {
    Auth.signin(user);
  };
});
