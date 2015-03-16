// 'use strict';


    

//     // $stateProvider.state('login', {
//     //     url: '/login',
//     //     templateUrl: 'js/login/login.html', 
//     //     controller: 'AdminCtrl'
//     // }); 
// // });

// app.controller('AdminCtrl', function ($scope, $state, UserFactory, AdminFactory, AuthService) {
	
    
//     AdminFactory.getAllUsers().then(function (guests) {
//         $scope.guestList = guests;
//         console.log('admin factory getAllUsers ran', guests);
//     });

//     $scope.add_user= function(newUser){
//         UserFactory.createUser(newUser).then(function (user){
//             $state.go('rsvp');       
//         });
//     };

//     $scope.rsvp = function(user){
//         console.log('user', user);
//         AuthService.getLoggedInUser.then(function(user) {
//             console.log('AuthService was called');
//             $scope.user = user.user;
//             UserFactory.updateUser($scope.user).then(function (user) {
//               console.log('user updated?');
//             })
//         })
//     };
        

//     $scope.login = {};
//     $scope.error = null;

//     $scope.sendLogin = function (loginInfo) {
//         $scope.error = null;
//         console.log('send Login called', loginInfo);

//         AuthService.login(loginInfo).then(function () {
//             console.log('$scope.login.email', $scope.login.email);
//             // $scope.user.email = $scope.login.email;
//             $state.go('rsvp');
//         }).catch(function () {
//             $scope.error = 'Invalid login credentials.';
//         });
//     };



// });
