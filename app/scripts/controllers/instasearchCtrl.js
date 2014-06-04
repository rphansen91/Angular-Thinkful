'use strict';

angular.module('thinkfulApp')
.controller('InstaCtrl', ['$scope','$http', function ($scope,$http) {
	
	$scope.tag = '';
	$scope.resp = false;
	$scope.instas = [];

	$scope.query = function () {
		var url = 'https://api.instagram.com/v1/tags/'+ $scope.tag +'/media/recent';

		var request = {
			callback: 'JSON_CALLBACK',
			client_id: '218df89b56684bb5ae64a293bfcb5f71'
		};

		$http({
			method: 'JSONP',
			url: url,
			params: request
		}).
		success(function(result) {
			$scope.instas = result["data"];
			console.log($scope.instas);
			displayResults();
		}).
		error(function() {
			displayError();
		});
	};

	var displayResults = function () {
		$scope.resp = 'We found ' + $scope.instas.length + ' results for "' + $scope.tag + '"';
	};

	var displayError = function () {
		$scope.resp = 'We could not connect to Instagram. Try Again?';
	};
}]);