'use strict';

angular.module('thinkfulApp')
.controller('CalcCtrl',['$scope', function ($scope) {
	
	var total = 0;
	var operation = '';

	$scope.num1 = 0;
	$scope.num2 = 0;
	$scope.display = 'X plus/minus/multiply/divide Y is Z';

	$scope.add = function () {
		operation = ' plus ';
		total = $scope.num1 + $scope.num2;
		$scope.check();
	};

	$scope.sub = function () {
		operation = ' minus ';
		total = $scope.num1 - $scope.num2;
		$scope.check();
	};

	$scope.mult = function () {
		operation = ' multiplied by ';
		total = $scope.num1 * $scope.num2;
		$scope.check();
	};

	$scope.div = function () {
		operation = ' divided by ';
		if($scope.num2 === 0) {
			$scope.display = 'You can not divide by zero';
		}
		else {
			total = $scope.num1 / $scope.num2;
			$scope.check();
		}
	};

	$scope.check = function () {
		if (isNaN(total)) {
			$scope.display = 'You must enter a valid number';
		}
		else {
			$scope.display = $scope.num1+operation+$scope.num2+' is '+total;
		}
	};
}]);