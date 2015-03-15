"use strict";

app.factory('UserFactory', function($http) {
	return {
		getUser: function(email) {
			return $http.get('/api/user/' + $scope.login.email).then(function (response) {
				return response.data;
			});
		},
		getAllUsers: function () {
			return $http.get('/api/user').then(function (response) {
				console.log(response.data);
				return response.data;
			});
		},
		updateUser: function(newUser) {
			var user = newUser.user;
			return $http.put('/api/user/' + user._id).then(function (response) {
				return response.data;
			});
		},
		deleteUser: function(user) {
			return $http.delete('/api/user/' + user._id).then(function (response) {
				return response.data;
			});
		},
		createUser: function (newUser) {
			var user = newUser.user;
			return $http.post('/api/user', user).then(function (response) {
				console.log("createUser return was called");
				return response.data;
			});
		},
		// validateUser: function () {
		// 	return $http.get('session').then(function (response) {
		// 		return response.data;
		// 	});
		// }
	};
});