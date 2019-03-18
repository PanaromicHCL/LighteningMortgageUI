'use strict';

angular.module('myApp.registration', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/registration', {
    templateUrl: 'signup/signup.html',
    controller: 'SignupCtrl'
  });
}])

.controller('SignupCtrl', function($scope, $http) {
    $scope.registrationDetails = {
        userName: '',
        password: '',
        phone: '',
        email: ''
    };
    // $scope.validatePassword = function() {
    //     var pwd = $scope.password;
    //     var confirm_password = $scope.confirmpassword;

    //     if (pwd !== confirm_password) {
    //         console.log("true");
    //         registrationForm.confirmpassword.$setValidity("Passwords Don't Match", false);
    //         // $scope.confirmpassword.$setValidity("Passwords Don't Match", false);
    //     } else {
    //         // $scope.confirmpassword.$setValidity('');
    //     }
    // }
    $scope.RegistrationDetails = function() {
        $http.post(APP_BASE_URL + '/register', $scope.registrationDetails)
        .then(function (response) {
            alert("Data has been submitted successfully:" + JSON.stringify(response.data));
        });
    }
});