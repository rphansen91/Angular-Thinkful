'use strict';

angular.module('thinkfulApp')
  .controller('MainCtrl', ['$scope', '$route', function ($scope, $route) {
    $scope.$route = $route;
  }]);
