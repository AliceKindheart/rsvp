'use strict';
app.config(function ($stateProvider) {
    $stateProvider.state('home', {
        url: '/',
        templateUrl: 'js/home/home.html', 
        controller: 'HomeCtrl'
    });

    $stateProvider.state('login', {
        url: '/login',
        templateUrl: 'js/login/login.html',
        controller: 'HomeCtrl'
    });

    $stateProvider.state('rsvp', {
        url: '/rsvp',
        templateUrl: 'js/user/rsvp.html',
        controller: 'HomeCtrl'
    });
});

app.controller('HomeCtrl', function ($scope, $state, UserFactory, AuthService) {
	
    $scope.funImages = [
        {url: "http://www.sunnyskyz.com/uploads/2013/08/4q1hm-birthday-dogs.jpg", text: "Good Times!!"},
        {url: "http://greatinspire.com/wp-content/uploads/2013/07/35-Cute-Miniature-Pig-Pictures-28.jpg", text: "Yee-Haw!!"},
        {url: "http://i.imgur.com/SAvUU.jpg", text: "Woo-hoo!!"},
        {url: "http://www.flygirlsmedia.com/wp-content/uploads/2014/03/dogs-tea-party.jpg",text: "PARTY"}
    ];

    $scope.add_user= function(newUser){
        UserFactory.createUser(newUser).then(function (user){
            $state.go('rsvp');       
        });
    };

    $scope.rsvp = function(user){
        UserFactory.updateUser(user).then(function (user) {
            console.log('user', user)
        })
    }

    $scope.login = {};
    $scope.error = null;

    $scope.sendLogin = function (loginInfo) {
        $scope.error = null;

        AuthService.login(loginInfo).then(function () {
            $state.go('rsvp');
        }).catch(function () {
            $scope.error = 'Invalid login credentials.';
        });
    };

});
