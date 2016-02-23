
var myApp = angular.module("myApp", ['ngRoute']);

myApp.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'main.html',
      controller: 'SessionController'
    })
    .when('/users/signIn', {
      templateUrl: 'auth/signin.html',
      controller: 'SigninController'
    })
    .when('/users', {
      templateUrl: 'auth/signup.html',
      controller: 'SignupController'
    })
    .when('/sessions', {
      templateUrl: 'createSession/createSession.html',
      controller: 'CreateSessionController'
    })
    .otherwise({
      redirectTo: '/'
    });
});
