'use strict';

angular
  .module('thinkfulApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'ngAnimate'
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
        activeTab:'multiply'
      })
      .when('/waitstaff', {
        templateUrl: 'views/waitstaff.html',
        controller: 'WaitstaffCtrl',
        activeTab:'waitstaff'
      })
      .when('/instasearch', {
        templateUrl: 'views/instasearch.html',
        controller: 'InstaCtrl',
        activeTab:'instasearch'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
