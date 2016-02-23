
myApp.controller('SigninController', function($scope, Auth, $window) {
  $scope.user = {};
  $scope.signin = function(user) {
    Auth.signin(user).then(function(user){
      if(!user.email){
        console.log('Wrong username and password');
      } else{
        Auth.setLoggedIn(true);
        $window.location.href = '/#/create';
      }
    });
  };
});
