
myApp.controller('SigninController', function ($scope, Auth, $window) {
  $scope.user = {};
  $scope.signin = function (user) {
    Auth.signin(user).then(function (user){
        Auth.setLoggedIn(true);
        $window.location.href = '/#/create';
    });
  };
});
