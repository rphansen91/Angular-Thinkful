'use strict';

angular.module('thinkfulApp')
	.controller('MultiplicationCtrl',['$scope','$attrs','$rootScope', function ($scope, $attrs, $rootScope) {
		function populateNumbers (x) {
			var numbers = [];
			for (var i = 0; i < x; i++) {
				numbers[i] = i + 1;
			}
			return numbers;
		}
		$scope.compute = function (a,b) {
			return a * b;
		};
		$scope.$watch('numberLimit', function (limit) {
			$scope.numbers = populateNumbers(Math.min(limit,20));
		});
		$scope.numberLimit = $attrs.initialNumberLimit || 10;

		var activeFactorA, activeFactorB;
		$scope.setActiveFactors = function (a,b) {
			activeFactorA = a;
			activeFactorB = b;
		};
		$scope.matchesFactor = function (a,b) {
			return a === activeFactorA || b === activeFactorB;
		};
		$scope.clearActiveFactors = function () {
			activeFactorA = activeFactorB = null;
		};
		$scope.setActiveNumber = function (a,b,number) {
			var str = '' + a + ' times ' + b + ' is ' + number;
			$rootScope.$broadcast('displayData', str);
		};
	}]);