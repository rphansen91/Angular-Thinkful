"use strict";angular.module("thinkfulApp",["ngCookies","ngResource","ngSanitize","ngRoute"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",activeTab:"home"}).when("/calculator",{templateUrl:"views/calculator.html",controller:"CalcCtrl",activeTab:"calc"}).when("/madlib",{templateUrl:"views/madlib.html",controller:"MadlibCtrl",activeTab:"mad"}).when("/multiplication",{templateUrl:"views/multiplication.html",activeTab:"multiply"}).when("/waitstaff",{templateUrl:"views/waitstaff.html",controller:"WaitstaffCtrl",activeTab:"waitstaff"}).otherwise({redirectTo:"/"})}]),angular.module("thinkfulApp").controller("MainCtrl",["$scope","$route",function(a,b){a.$route=b}]),angular.module("thinkfulApp").controller("CalcCtrl",["$scope",function(a){var b=0,c="";a.num1=0,a.num2=0,a.display="X + Y is Z",a.add=function(){c=" plus ",b=a.num1+a.num2,a.check()},a.sub=function(){c=" minus ",b=a.num1-a.num2,a.check()},a.mult=function(){c=" multiplied by ",b=a.num1*a.num2,a.check()},a.div=function(){c=" divided by ",0===a.num2?a.display="You can not divide by zero":(b=a.num1/a.num2,a.check())},a.check=function(){a.display=isNaN(b)?"You must enter a valid number":a.num1+c+a.num2+" is "+b}}]),angular.module("thinkfulApp").controller("MadlibCtrl",["$scope",function(a){a.story=!1,a.male=!0,a.data={},a.submit=function(){a.madlibForm.$valid&&(a.story=!0)},a.form=function(){a.story=!1,a.data={}}}]),angular.module("thinkfulApp").controller("MultiplicationCtrl",["$scope","$attrs","$rootScope",function(a,b,c){function d(a){for(var b=[],c=0;a>c;c++)b[c]=c+1;return b}a.compute=function(a,b){return a*b},a.$watch("numberLimit",function(b){a.numbers=d(Math.min(b,20))}),a.numberLimit=b.initialNumberLimit||10;var e,f;a.setActiveFactors=function(a,b){e=a,f=b},a.matchesFactor=function(a,b){return a===e||b===f},a.clearActiveFactors=function(){e=f=null},a.setActiveNumber=function(a,b,d){var e=""+a+" times "+b+" is "+d;c.$broadcast("displayData",e)}}]),angular.module("thinkfulApp").controller("DisplayCtrl",["$scope",function(a){a.$on("displayData",function(b,c){a.content=c})}]),angular.module("thinkfulApp").controller("WaitstaffCtrl",["$scope",function(a){a.reset=function(){a.$broadcast("fresh")}}]).controller("MealCtrl",["$scope","$rootScope",function(a,b){a.data={},a.submit=function(){a.detailsForm.$valid&&(b.$broadcast("newMeal",a.data),a.data={})},a.cancel=function(){a.data={}},a.$on("fresh",function(){a.cancel()})}]).controller("ChargesCtrl",["$scope",function(a){a.subtotal=a.tip=a.total=0,a.$on("newMeal",function(b,c){a.subtotal=c.price+c.price*(c.taxPerc/100),a.tip=c.price*(c.tipPerc/100),a.total=a.subtotal+a.tip}),a.$on("fresh",function(){a.subtotal=a.tip=a.total=0})}]).controller("EarningsCtrl",["$scope",function(a){a.tipTot=a.count=0,a.average=function(){return 0===a.count?0:a.tipTot/a.count},a.$on("newMeal",function(b,c){a.tipTot+=c.price*(c.tipPerc/100),a.count++}),a.$on("fresh",function(){a.tipTot=a.count=0})}]);