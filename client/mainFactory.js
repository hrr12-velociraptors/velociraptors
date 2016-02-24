
myApp.factory('Session', function($http, $location) {
  var createSession = function(session) {
    return $http({
      method: 'POST',
      url: '/sessions',
      data: session
    })
    .then(function(session) {
      console.log(session.data);
      return session.data;
    });
  };
  var getSessions = function() {
    return $http({
      method: 'GET',
      url: '/sessions'
    })
    .then(function(sessions) {
      console.log(sessions);
      return sessions.data;
    });
  };

  // must send an object with 'id' and 'status' property 
  var updateStatus = function(updateInfo){
    console.log('clicked inside factory', updateInfo);
    return $http({
      method: 'PUT',
      url: '/sessions',
      data: updateInfo
      })
    .then(function(updatedSession){
      console.log('Session Updated', updatedSession);
      return updatedSession;
    });
  };
  
  var register = function(userInfo) {
    return $http({
      method: 'POST',
      url: '/sessions/send',
      data: userInfo
    }).then(function(email){
      console.log('Email sent to ' + email);
    });
  };

  return {
    createSession: createSession,
    getSessions: getSessions,
    updateStatus: updateStatus,
    register: register
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
  // deprecated
  
  var isLoggedIn = function() {
    return $http({
      method: 'GET',
      url: '/users/isLoggedIn'
    })
    .then(function(bool) {
      return bool.data;
    });
  };

  var loggedIn = false;
  
  isLoggedIn().then(function(bool){
    loggedIn = bool;
  });

  var getLoggedIn = function(){
    return loggedIn;
  };

  var setLoggedIn = function(bool){
    loggedIn = bool;
  };


  return {
    signin: signin,
    signup: signup,
    signout: signout,
    isLoggedIn: isLoggedIn,
    getLoggedIn: getLoggedIn,
    setLoggedIn: setLoggedIn
  };
});