'use strict';

angular.module('thinkfulApp')
  .controller('MainCtrl', function ($scope, $route) {
    $scope.$route = $route;
  });
