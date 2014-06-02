'use strict';

angular.module('thinkfulApp')
	.controller('WaitstaffCtrl',['$scope', function ($scope) {
		$scope.reset = function () {
			$scope.$broadcast('fresh');
		};
	}])
	.controller('MealCtrl',['$scope','$rootScope', function ($scope, $rootScope) {
		$scope.data = {};
		$scope.submit = function () {
			if ($scope.detailsForm.$valid) {
				$rootScope.$broadcast('newMeal', $scope.data);
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

		$scope.$on('newMeal', function (event, data) {
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
			if($scope.count===0) {
				return 0;
			}
			else {
				return $scope.tipTot / $scope.count;
			}
		};

		$scope.$on('newMeal', function (event, data) {
			$scope.tipTot += data.price * (data.tipPerc / 100);
			$scope.count++;
		});
		$scope.$on('fresh', function () {
			$scope.tipTot = $scope.count = 0;
		});
	}]);