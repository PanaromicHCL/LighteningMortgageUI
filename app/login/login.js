'use strict';

angular.module('myApp.login', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/login', {
    templateUrl: 'login/login.html',
    controller: 'LoginCtrl'
  });
}])

.controller('LoginCtrl', function($scope, $http) {
  $scope.loginDetails = {
    username: '',
    pwd: ''
  }; 
  // $rootscope = "newdata";
  $scope.LoginDetails = function() {
    alert(JSON.stringify( $scope.loginDetails));
    // userInput = $scope.username;
  }
});