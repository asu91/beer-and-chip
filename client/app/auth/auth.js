angular.module('auth', ['ngCookies'])

.controller('AuthController', function($scope, $window, $location, $cookies, AuthFactory) {
  $scope.user = {};


  $scope.something = $cookies.get('displayName')



})

.factory('AuthFactory', function($http, $window, $location, $cookies) {


  var isAuth = function () {
    return !!$cookies.get('displayName');
  };

  var signout = function () {
    $cookies.remove('userID');
    $cookies.remove('facebookID');
    $cookies.remove('displayName');
    $cookies.remove('email');

    $location.path('/signin');
  };




  return {
    isAuth: isAuth,
    signout: signout
  };
});