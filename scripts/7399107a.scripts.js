"use strict";angular.module("thinkfulApp",["ngCookies","ngResource","ngSanitize","ngRoute"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",activeTab:"home"}).when("/calculator",{templateUrl:"views/calculator.html",controller:"CalcCtrl",activeTab:"calc"}).when("/madlib",{templateUrl:"views/madlib.html",activeTab:"mad"}).otherwise({redirectTo:"/"})}]),angular.module("thinkfulApp").controller("MainCtrl",["$scope","$route",function(a,b){a.$route=b}]),angular.module("thinkfulApp").controller("CalcCtrl",["$scope",function(a){var b=0,c="";a.num1=0,a.num2=0,a.display="X plus/minus/multiply/divide Y is Z",a.add=function(){c=" plus ",b=a.num1+a.num2,a.check()},a.sub=function(){c=" minus ",b=a.num1-a.num2,a.check()},a.mult=function(){c=" multiplied by ",b=a.num1*a.num2,a.check()},a.div=function(){c=" divided by ",0===a.num2?a.display="You can not divide by zero":(b=a.num1/a.num2,a.check())},a.check=function(){a.display=isNaN(b)?"You must enter a valid number":a.num1+c+a.num2+" is "+b}}]);