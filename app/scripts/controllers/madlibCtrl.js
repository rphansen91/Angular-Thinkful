'use strict';

angular.module('thinkfulApp')
	.controller('MadlibCtrl',['$scope', function ($scope) {
		
		$scope.male = true;

		$scope.name = '';
		$scope.job = '';
		$scope.task = '';
		$scope.dirty = '';
		$scope.celeb = '';
		$scope.skill = '';
		$scope.obnox = '';
		$scope.huge = '';
		$scope.adjective = '';
	}]);