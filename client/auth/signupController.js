
// invokes function from mainFactory.js to make a signup request
myApp.controller('SignupController', function ($scope, $window, Auth) {
  $scope.user = {};
  $scope.signup = function(user) {
    Auth.signup(user).then(function(data){
      // redirect
    	$window.location.href = '/#/signin';
    });
  };
});
