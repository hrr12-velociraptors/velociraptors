
var myApp = angular.module('myApp',[]);

myApp.controller('mainController', function($scope, factoryFunction, signin) {
  
  $scope.hello = factoryFunction.sayHello;
  $scope.bye = signin.sayGoodbye;
  $scope.sessions = [
    {
      sessionId: 1,
      userId: 2,
      username: "Pedro Kelly-Maz",
      topic: 'Closures in JavaScript',
      description: 'Lorem ipsum dolor sit amet, adipiscing sed incididunt ut labore et magna aliqua. Ut enim ad minim quis veniam, nostrud exercitation ullamco laboris nisi ut aliquip ex commodo consequat.',
      startTime: '7:30 p.m.',
      link: 'https://hangouts.google.com/hangouts/_/ufdfsypq6p7r3fnrlemlzukbcaa',
      status: true
    },
    {
      sessionId: 2,
      userId: 5, 
      topic: 'Time Complexity',
      username: "Pierre Devonte",
      description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      startTime: '4:00 p.m.',
      link: 'https://hangouts.google.com/hangouts/_/ufdfsypq6p7r3fnrlemlzukbcaa',
      status: false
    }
  ];

});
