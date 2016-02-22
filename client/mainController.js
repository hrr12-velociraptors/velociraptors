var myApp = angular.module('myApp',[]);


myApp.controller('mainController', ['$scope', function($scope) {

  $scope.greeting = 'Hola!';

  $scope.sessions = [
    {
      sessionId: 1,
      userId: 2,
      username: "Pedro Kelly-Maz",
      topic: 'Closures in JavaScript',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
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

  // $scope.topic = sessions[0].topic;

  // $scope.description = session.description;
  // $scope.time = session.time;
}]);




  // $scope.session = {
  //   sessionId: 1,
  //   userId: 2, 
  //   topic: 'Closures in JavaScript',
  //   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  //   startTime: '7:30 p.m.',
  //   link: 'https://hangouts.google.com/hangouts/_/ufdfsypq6p7r3fnrlemlzukbcaa',
  //   status: true
  // }



// myApp.controller('mainController', ['$scope', function($scope) {

//   $scope.sessions = [
//     {
//       sessionId: 1,
//       userId: 2, 
//       topic: 'Closures in JavaScript',
//       description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
//       startTime: '7:30 p.m.',
//       link: 'https://hangouts.google.com/hangouts/_/ufdfsypq6p7r3fnrlemlzukbcaa',
//       status: true
//     },
//     {
//       sessionId: 2,
//       userId: 5, 
//       topic: 'Time Complexity',
//       description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
//       startTime: '4:00 p.m.',
//       link: 'https://hangouts.google.com/hangouts/_/ufdfsypq6p7r3fnrlemlzukbcaa',
//       status: true
//     }
//   ];

//   $scope.greeting = 'Hola!';
//   $scope.topic = session.topic;
//   $scope.description = session.description;
//   $scope.time = session.time;
// }]);



// angular.module('shortly.shorten', [])

// .controller('ShortenController', function ($scope, $location, Links) {
//   $scope.link = {};
//   $scope.addLink = function() {
//     Links.linkPoster($scope.link).then(function(){
//       $location.path('/');
//     }).catch(function(err){
//       console.log(err);
//     });
//   };
// });
