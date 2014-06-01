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
        activeTab:'calc'
      })
      .when('/madlib', {
        templateUrl: 'views/madlib.html',
        activeTab:'mad'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
