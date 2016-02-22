
myApp.factory('factoryFunction', function(){
  var service = {};
  service.sayHello = 'Hello';

  return service
});


myApp.factory('signin', function(){
  var service = {}
  service.sayGoodbye = 'Bye'

  return service
});


myApp.factory('createSession', function($http, $location) {
  var createSession = function(session) {
    return $http({
      method: 'POST',
      url: '/api/sessions',
      data: session
    });
  }
});

////////////////// FROM SHORTLY ///////////////////////

.factory('Auth', function ($http, $location, $window) {
  var signin = function (user) {
    return $http({
      method: 'POST',
      url: '/api/users/signin',
      data: user
    })
    .then(function (resp) {
      return resp.data.token;
    });
  };

  var signup = function (user) {
    return $http({
      method: 'POST',
      url: '/api/users/signup',
      data: user
    })
    .then(function (resp) {
      return resp.data.token;
    });
  };

  // var isAuth = function () {
  //   return !!$window.localStorage.getItem('com.shortly');
  // };

  // var signout = function () {
  //   $window.localStorage.removeItem('com.shortly');
  //   $location.path('/signin');
  // };

  return {
    signin: signin,
    signup: signup,
    isAuth: isAuth,
    signout: signout
  };
});