app.config(function ($stateProvider) {

    // $stateProvider.state('login', {
    //     url: '/login',
    //     templateUrl: 'js/login/login.html',
    //     controller: 'LoginCtrl'
    // });

});

// app.controller('HomeCtrl', function ($scope, AuthService, UserFactory, $state) {

//     $scope.login = {};
//     $scope.error = null;

//     $scope.sendLogin = function (loginInfo) {

//         $scope.error = null;

//         AuthService.login(loginInfo).then(function () {
//             $state.go('home');
//         }).catch(function () {
//             $scope.error = 'Invalid login credentials.';
//         });

//     };

// });