
var app = angular.module("myApp", ['ngRoute']);

myApp.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'index.html',
      controller: 'mainController'
    })
    .when('/users/signIn', {
      templateUrl: '/client/auth/signin.html',
      controller: 'mainController'
    })
    .when('/users', {
      templateUrl: '/client/auth/signup.html',
      controller: 'mainController'
    })
    .when('/sessions', {
      templateUrl: '/client/createSession/createSession.html',
      controller: 'mainController'
    })
    .otherwise({
      redirectTo: '/'
    });
});
