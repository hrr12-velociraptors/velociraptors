
myApp.controller('SignupController', function($scope, $window, Auth) {
  $scope.user = {};
  $scope.signup = function(user) {
    Auth.signup(user).then(function(data){
    	console.log(data);
    	$window.location.href = '/#/signin';
    });
  };
});
