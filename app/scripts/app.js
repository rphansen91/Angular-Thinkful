'use strict';

angular
  .module('thinkfulApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/calculator', {
        templateUrl: 'view/calculator.html',
        controller: 'CalcCtrl'
      })
      .when('/madlib', {
        templateUrl: 'view/madlib.html',
        controller: 'MadlibCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
