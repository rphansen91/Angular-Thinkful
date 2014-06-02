'use strict';

angular.module('thinkfulApp')
	.controller('MadlibCtrl',['$scope', function ($scope) {
		$scope.story = false;
		$scope.male = true;
		$scope.data = {};
		$scope.submit = function () {
			if ($scope.madlibForm.$valid) {
				$scope.story = true;
			}
		};
		$scope.form = function () {
			$scope.story = false;
			$scope.data = {};
		};
	}]);