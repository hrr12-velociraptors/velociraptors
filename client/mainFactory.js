
myApp.factory('Session', function($http, $location) {
  var createSession = function(session) {
    return $http({
      method: 'POST',
      url: '/sessions',
      data: session
    })
    .then(function(session) {
      console.log(session)
      return session.data;
    });
  };
  var getSessions = function() {
    return $http({
      method: 'GET',
      url: '/sessions'
    })
    .then(function(sessions) {
      console.log(sessions)
      return sessions.data;
    });
  };
  return {
    createSession: createSession,
    getSessions: getSessions
  };
});

myApp.factory('Auth', function ($http, $location, $window) {
  var signin = function (user) {
    return $http({
      method: 'POST',
      url: '/users/signIn',
      data: user
    })
    .then(function (user) {
      console.log(user);
      return user.data;
    });
  };

  var signup = function (user) {
    return $http({
      method: 'POST',
      url: '/users',
      data: user
    })
    .then(function (user) {
      console.log(user);
      return user.data;
    });
  };

  var signout = function (user) {
    return $http({
      method: 'POST',
      url: '/users/signOut',
      data: user
    })
    .then(function (user) {
      return user.data;
    });
  };
  
  var isLoggedIn = function() {
    return $http({
      method: 'GET',
      url: '/users/isLoggedIn'
    })
    .then(function(bool) {
      return bool.data;
    });
  };

  return {
    signin: signin,
    signup: signup,
    signout: signout,
    isLoggedIn: isLoggedIn
  };
});