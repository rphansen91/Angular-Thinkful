
'use strict';

angular.module('thinkfulApp')
	.controller('WaitstaffCtrl',['$scope', function ($scope) {
		$scope.reset = function () {
			$scope.$broadcast('fresh');
		};
		$scope.$on('newMeal', function (event, data) {
			$scope.$broadcast('addMeal', data);
		});
	}])
	.controller('MealCtrl',['$scope', function ($scope) {
		$scope.data = {};
		$scope.submit = function () {
			if ($scope.detailsForm.$valid) {
				$scope.$emit('newMeal', $scope.data);
				console.log('From Meal Controller');
				console.log($scope.data);
				$scope.data = {};
			}
		};
		$scope.cancel = function () {
			$scope.data = {};
		};
		$scope.$on('fresh', function () {
			$scope.cancel();
		});
	}])
	.controller('ChargesCtrl',['$scope', function ($scope) {
		$scope.subtotal = $scope.tip = $scope.total = 0;

		$scope.$on('addMeal', function (event, data) {
			console.log('From Charges Controller');
			console.log(data);
			$scope.subtotal = data.price + (data.price * (data.taxPerc / 100));
			$scope.tip = data.price * (data.tipPerc / 100);
			$scope.total = $scope.subtotal + $scope.tip;
		});

		$scope.$on('fresh', function () {
			$scope.subtotal = $scope.tip = $scope.total = 0;
		});
	}])
	.controller('EarningsCtrl',['$scope', function ($scope) {

		$scope.tipTot = $scope.count = 0;
		
		$scope.average = function () {
			//Return 0 as a default
			return $scope.count ? ($scope.tipTot / $scope.count):0;
		};

		$scope.$on('addMeal', function (event, data) {
			console.log('From Tips Controller');
			console.log(data);
			$scope.tipTot += data.price * (data.tipPerc / 100);
			$scope.count++;
		});
		$scope.$on('fresh', function () {
			$scope.tipTot = $scope.count = 0;
		});
	}]);