// app.config(function ($stateProvider) {

//     $stateProvider.state('add_user', {
//         url: '/add_user',
//         templateUrl: 'js/user/add_user.html',
//         controller: 'UserCtrl'
//     });

//     $stateProvider.state('rsvp', {
//         url: '/rsvp',
//         templateUrl: 'js/user/rsvp.html',
//         controller: 'UserCtrl'
//     });

// });

app.controller('UserCtrl', function ($scope, AuthService, $state, UserFactory) {


    $scope.add_user= function(newUser){
        UserFactory.createUser(newUser).then(function (user){
            $state.go('rsvp');       
        });
    };

    $scope.rsvp = function(user){
        console.log('$scope.user', $scope.user);
        console.log('userId', userId)
        UserFactory.updateUser(user).then(function (user) {
            console.log('user', user)
        })

    }

});