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
        activeTab:'home'
      })
      .when('/calculator', {
        templateUrl: 'views/calculator.html',
        controller: 'CalcCtrl',
        activeTab:'calc'
      })
      .when('/madlib', {
        templateUrl: 'views/madlib.html',
        controller: 'MadlibCtrl',
        activeTab:'mad'
      })
      .when('/multiplication', {
        templateUrl: 'views/multiplication.html',
        controller: 'MultiplicationCtrl',
        activeTab:'multiply'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
