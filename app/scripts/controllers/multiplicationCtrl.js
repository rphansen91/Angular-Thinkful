'use strict';

angular.module('thinkfulApp')
	.controller('MultiplicationCtrl',['$scope', function ($scope) {
		$scope.numbers = [];
		(function () {
			for (var i = 1; i <= 10; i++) {
				$scope.numbers.push(i);
			}
		})();
	}]);