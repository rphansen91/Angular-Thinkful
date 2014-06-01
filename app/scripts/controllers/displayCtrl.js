'use strict';

angular.module('thinkfulApp')
	.controller('DisplayCtrl', ['$scope', function ($scope) {
		$scope.$on('displayData', function (event, data) {
			$scope.content = data;
		});
	}]);