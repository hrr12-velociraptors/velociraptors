
var myApp = angular.module("myApp", ['ngRoute']);

myApp.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'main.html',
      controller: 'SessionController'
    })
    .when('/users/signIn', {
      templateUrl: '/client/auth/signin.html',
      controller: 'SigninController'
    })
    .when('/users', {
      templateUrl: '/client/auth/signup.html',
      controller: 'SignupController'
    })
    .when('/sessions', {
      templateUrl: '/client/createSession/createSession.html',
      controller: 'SessionController'
    })
    .otherwise({
      redirectTo: '/'
    });
});
