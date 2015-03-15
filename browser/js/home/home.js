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

    $stateProvider.state('guestlist', {
        url: '/admin/guestlist',
        templateUrl: 'js/admin/guestlist.html', 
        controller: 'HomeCtrl'
    }); 
});

app.controller('HomeCtrl', function ($scope, $state, UserFactory, AuthService) {
	
    // $scope.guestList = UserFactory.getAllUsers().then(function (guests) {
    //     console.log('guests', guests);
    // });

    UserFactory.getAllUsers().then(function (guests) {
        $scope.guestList = guests;
        console.log('guestList', $scope.guestList);
    });


    // $scope.countGuests = function(){
    //     $scope.guestTotal = 0;
    //     UserFactory.getAllUsers().then(function (guests) {
    //         forEach(guest,)
    //     })
    // }

    $scope.funImages = [
        {url: "http://www.sunnyskyz.com/uploads/2013/08/4q1hm-birthday-dogs.jpg", text: "PARTY!!"},
        {url: "https://s-media-cache-ak0.pinimg.com/736x/80/01/ce/8001cecdd4a2cacc37c343605e72f108.jpg", text: "Yee-Haw!"},
        {url: "http://propagandaprofessordotnet2.files.wordpress.com/2011/09/tea-party.jpg", text: "Good Times"},
        {url: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQn_PXrrmBjve9aDkKHnn4aTOC-T7S3rC3ivbTnCKjroytoVauRKA", text: "Woo-hoo!"}
        
    ];

    $scope.login = {};
    $scope.error = null;

    $scope.sendLogin = function (loginInfo) {
        $scope.error = null;

        AuthService.login(loginInfo).then(function () {
            // console.log('$scope.login.email', $scope.login.email);
            // $scope.user.email = $scope.login.email;
            $state.go('rsvp');
        }).catch(function () {
            $scope.error = 'Invalid login credentials.';
        });
    };

  

   
    $scope.add_user= function(newUser){
        UserFactory.createUser(newUser).then(function (user){
            $state.go('rsvp');       
        });
    };

    $scope.rsvp = function(user){
        console.log('user', user);
        AuthService.getLoggedInUser.then(function(user) {
            console.log('AuthService was called');
            $scope.user = user.user;
            UserFactory.updateUser($scope.user).then(function (user) {
              console.log('user updated?');
            })
        })
    };
        
   
});
