"use strict";angular.module("thinkfulApp",["ngCookies","ngResource","ngSanitize","ngRoute","ngAnimate"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",activeTab:"home"}).when("/calculator",{templateUrl:"views/calculator.html",controller:"CalcCtrl",activeTab:"calc"}).when("/madlib",{templateUrl:"views/madlib.html",controller:"MadlibCtrl",activeTab:"mad"}).when("/multiplication",{templateUrl:"views/multiplication.html",activeTab:"multiply"}).when("/waitstaff",{templateUrl:"views/waitstaff.html",controller:"WaitstaffCtrl",activeTab:"waitstaff"}).otherwise({redirectTo:"/"})}]),function(a,b,c){b.module("ngAnimate",["ng"]).factory("$$animateReflow",["$$rAF","$document",function(a,b){var c=b[0].body;return function(b){return a(function(){c.offsetWidth+1;b()})}}]).config(["$provide","$animateProvider",function(d,e){function f(a){for(var b=0;b<a.length;b++){var c=a[b];if(c.nodeType==l)return c}}function g(a){return b.element(f(a))}function h(a,b){return f(a)==f(b)}var i=b.noop,j=b.forEach,k=e.$$selectors,l=1,m="$$ngAnimateState",n="ng-animate",o={running:!0};d.decorator("$animate",["$delegate","$injector","$sniffer","$rootElement","$$asyncCallback","$rootScope","$document",function(a,c,d,l,p,q){function r(a){if(a){var b=[],e={},f=a.substr(1).split(".");(d.transitions||d.animations)&&b.push(c.get(k[""]));for(var g=0;g<f.length;g++){var h=f[g],i=k[h];i&&!e[h]&&(b.push(c.get(i)),e[h]=!0)}return b}}function s(a,c,d){function e(a,b){var c=a[b],d=a["before"+b.charAt(0).toUpperCase()+b.substr(1)];return c||d?("leave"==b&&(d=c,c=null),v.push({event:b,fn:c}),s.push({event:b,fn:d}),!0):void 0}function f(b,c,e){function f(a){if(c){if((c[a]||i)(),++l<g.length)return;c=null}e()}var g=[];j(b,function(a){a.fn&&g.push(a)});var l=0;j(g,function(b,e){var g=function(){f(e)};switch(b.event){case"setClass":c.push(b.fn(a,h,k,g));break;case"addClass":c.push(b.fn(a,h||d,g));break;case"removeClass":c.push(b.fn(a,k||d,g));break;default:c.push(b.fn(a,g))}}),c&&0===c.length&&e()}var g=a[0];if(g){var h,k,l="setClass"==c,m=l||"addClass"==c||"removeClass"==c;b.isArray(d)&&(h=d[0],k=d[1],d=h+" "+k);var n=a.attr("class"),o=n+" "+d;if(z(o)){var p=i,q=[],s=[],t=i,u=[],v=[],w=(" "+o).replace(/\s+/g,".");return j(r(w),function(a){var b=e(a,c);!b&&l&&(e(a,"addClass"),e(a,"removeClass"))}),{node:g,event:c,className:d,isClassBased:m,isSetClassOperation:l,before:function(a){p=a,f(s,q,function(){p=i,a()})},after:function(a){t=a,f(v,u,function(){t=i,a()})},cancel:function(){q&&(j(q,function(a){(a||i)(!0)}),p(!0)),u&&(j(u,function(a){(a||i)(!0)}),t(!0))}}}}}function t(a,c,d,e,f,g,h){function i(b){var e="$animate:"+b;u&&u[e]&&u[e].length>0&&p(function(){d.triggerHandler(e,{event:a,className:c})})}function k(){i("before")}function l(){i("after")}function o(){i("close"),h&&p(function(){h()})}function q(){q.hasBeenRun||(q.hasBeenRun=!0,g())}function r(){if(!r.hasBeenRun){r.hasBeenRun=!0;var b=d.data(m);b&&(t&&t.isClassBased?v(d,c):(p(function(){var b=d.data(m)||{};H==b.index&&v(d,c,a)}),d.data(m,b))),o()}}var t=s(d,a,c);if(!t)return q(),k(),l(),void r();c=t.className;var u=b.element._data(t.node);u=u&&u.events,e||(e=f?f.parent():d.parent());var y=d.data(m)||{},z=y.active||{},A=y.totalActive||0,B=y.last,C=t.isClassBased?y.disabled||B&&!B.isClassBased:!1;if(C||w(d,e))return q(),k(),l(),void r();var D=!1;if(A>0){var E=[];if(t.isClassBased){if("setClass"==B.event)E.push(B),v(d,c);else if(z[c]){var F=z[c];F.event==a?D=!0:(E.push(F),v(d,c))}}else if("leave"==a&&z["ng-leave"])D=!0;else{for(var G in z)E.push(z[G]),v(d,G);z={},A=0}E.length>0&&j(E,function(a){a.cancel()})}if(!t.isClassBased||t.isSetClassOperation||D||(D="addClass"==a==d.hasClass(c)),D)return k(),l(),void o();"leave"==a&&d.one("$destroy",function(){var a=b.element(this),c=a.data(m);if(c){var d=c.active["ng-leave"];d&&(d.cancel(),v(a,"ng-leave"))}}),d.addClass(n);var H=x++;A++,z[c]=t,d.data(m,{last:t,active:z,index:H,totalActive:A}),k(),t.before(function(b){var e=d.data(m);b=b||!e||!e.active[c]||t.isClassBased&&e.active[c].event!=a,q(),b===!0?r():(l(),t.after(r))})}function u(a){var c=f(a);if(c){var d=b.isFunction(c.getElementsByClassName)?c.getElementsByClassName(n):c.querySelectorAll("."+n);j(d,function(a){a=b.element(a);var c=a.data(m);c&&c.active&&j(c.active,function(a){a.cancel()})})}}function v(a,b){if(h(a,l))o.disabled||(o.running=!1,o.structural=!1);else if(b){var c=a.data(m)||{},d=b===!0;!d&&c.active&&c.active[b]&&(c.totalActive--,delete c.active[b]),(d||!c.totalActive)&&(a.removeClass(n),a.removeData(m))}}function w(a,b){if(o.disabled)return!0;if(h(a,l))return o.disabled||o.running;do{if(0===b.length)break;var c=h(b,l),d=c?o:b.data(m),e=d&&(!!d.disabled||d.running||d.totalActive>0);if(c||e)return e;if(c)return!0}while(b=b.parent());return!0}var x=0;l.data(m,o),q.$$postDigest(function(){q.$$postDigest(function(){o.running=!1})});var y=e.classNameFilter(),z=y?function(a){return y.test(a)}:function(){return!0};return{enter:function(b,c,d,e){this.enabled(!1,b),a.enter(b,c,d),q.$$postDigest(function(){b=g(b),t("enter","ng-enter",b,c,d,i,e)})},leave:function(b,c){u(b),this.enabled(!1,b),q.$$postDigest(function(){t("leave","ng-leave",g(b),null,null,function(){a.leave(b)},c)})},move:function(b,c,d,e){u(b),this.enabled(!1,b),a.move(b,c,d),q.$$postDigest(function(){b=g(b),t("move","ng-move",b,c,d,i,e)})},addClass:function(b,c,d){b=g(b),t("addClass",c,b,null,null,function(){a.addClass(b,c)},d)},removeClass:function(b,c,d){b=g(b),t("removeClass",c,b,null,null,function(){a.removeClass(b,c)},d)},setClass:function(b,c,d,e){b=g(b),t("setClass",[c,d],b,null,null,function(){a.setClass(b,c,d)},e)},enabled:function(a,b){switch(arguments.length){case 2:if(a)v(b);else{var c=b.data(m)||{};c.disabled=!0,b.data(m,c)}break;case 1:o.disabled=!a;break;default:a=!o.disabled}return!!a}}}]),e.register("",["$window","$sniffer","$timeout","$$animateReflow",function(d,e,g,h){function k(a,b){J&&J(),W.push(b),J=h(function(){j(W,function(a){a()}),W=[],J=null,U={}})}function m(a,c){var d=f(a);a=b.element(d),Z.push(a);var e=Date.now()+c;Y>=e||(g.cancel(X),Y=e,X=g(function(){n(Z),Z=[]},c,!1))}function n(a){j(a,function(a){var b=a.data(P);b&&(b.closeAnimationFn||i)()})}function o(a,b){var c=b?U[b]:null;if(!c){var e,f,g,h,i=0,k=0,m=0,n=0;j(a,function(a){if(a.nodeType==l){var b=d.getComputedStyle(a)||{};g=b[E+K],i=Math.max(p(g),i),h=b[E+L],e=b[E+M],k=Math.max(p(e),k),f=b[G+M],n=Math.max(p(f),n);var c=p(b[G+K]);c>0&&(c*=parseInt(b[G+N],10)||1),m=Math.max(c,m)}}),c={total:0,transitionPropertyStyle:h,transitionDurationStyle:g,transitionDelayStyle:e,transitionDelay:k,transitionDuration:i,animationDelayStyle:f,animationDelay:n,animationDuration:m},b&&(U[b]=c)}return c}function p(a){var c=0,d=b.isString(a)?a.split(/\s*,\s*/):[];return j(d,function(a){c=Math.max(parseFloat(a)||0,c)}),c}function q(a){var b=a.parent(),c=b.data(O);return c||(b.data(O,++V),c=V),c+"-"+f(a).getAttribute("class")}function r(a,b,c,d){var e=q(b),f=e+" "+c,g=U[f]?++U[f].total:0,h={};if(g>0){var j=c+"-stagger",k=e+" "+j,l=!U[k];l&&b.addClass(j),h=o(b,k),l&&b.removeClass(j)}d=d||function(a){return a()},b.addClass(c);var m=b.data(P)||{},n=d(function(){return o(b,f)}),p=n.transitionDuration,r=n.animationDuration;if(0===p&&0===r)return b.removeClass(c),!1;b.data(P,{running:m.running||0,itemIndex:g,stagger:h,timings:n,closeAnimationFn:i});var s=m.running>0||"setClass"==a;return p>0&&t(b,c,s),r>0&&h.animationDelay>0&&0===h.animationDuration&&u(b),!0}function s(a){return"ng-enter"==a||"ng-move"==a||"ng-leave"==a}function t(a,b,c){s(b)||!c?f(a).style[E+L]="none":a.addClass(Q)}function u(a){f(a).style[G]="none 0s"}function v(a){var b=E+L,c=f(a);c.style[b]&&c.style[b].length>0&&(c.style[b]=""),a.removeClass(Q)}function w(a){var b=G,c=f(a);c.style[b]&&c.style[b].length>0&&(c.style[b]="")}function x(a,b,c,d){function e(){b.off(t,g),b.removeClass(k),C(b,c);var a=f(b);for(var d in v)a.style.removeProperty(v[d])}function g(a){a.stopPropagation();var b=a.originalEvent||a,c=b.$manualTimeStamp||b.timeStamp||Date.now(),e=parseFloat(b.elapsedTime.toFixed(R));Math.max(c-s,0)>=r&&e>=p&&d()}var h=f(b),i=b.data(P);if(-1==h.getAttribute("class").indexOf(c)||!i)return void d();var k="";j(c.split(" "),function(a,b){k+=(b>0?" ":"")+a+"-active"});var l=i.stagger,n=i.timings,o=i.itemIndex,p=Math.max(n.transitionDuration,n.animationDuration),q=Math.max(n.transitionDelay,n.animationDelay),r=q*T,s=Date.now(),t=H+" "+F,u="",v=[];if(n.transitionDuration>0){var w=n.transitionPropertyStyle;-1==w.indexOf("all")&&(u+=I+"transition-property: "+w+";",u+=I+"transition-duration: "+n.transitionDurationStyle+";",v.push(I+"transition-property"),v.push(I+"transition-duration"))}if(o>0){if(l.transitionDelay>0&&0===l.transitionDuration){var x=n.transitionDelayStyle;u+=I+"transition-delay: "+y(x,l.transitionDelay,o)+"; ",v.push(I+"transition-delay")}l.animationDelay>0&&0===l.animationDuration&&(u+=I+"animation-delay: "+y(n.animationDelayStyle,l.animationDelay,o)+"; ",v.push(I+"animation-delay"))}if(v.length>0){var z=h.getAttribute("style")||"";h.setAttribute("style",z+" "+u)}b.on(t,g),b.addClass(k),i.closeAnimationFn=function(){e(),d()};var A=o*(Math.max(l.animationDelay,l.transitionDelay)||0),B=(q+p)*S,D=(A+B)*T;return i.running++,m(b,D),e}function y(a,b,c){var d="";return j(a.split(","),function(a,e){d+=(e>0?",":"")+(c*b+parseInt(a,10))+"s"}),d}function z(a,b,c,d){return r(a,b,c,d)?function(a){a&&C(b,c)}:void 0}function A(a,b,c,d){return b.data(P)?x(a,b,c,d):(C(b,c),void d())}function B(a,b,c,d){var e=z(a,b,c);if(!e)return void d();var f=e;return k(b,function(){v(b,c),w(b),f=A(a,b,c,d)}),function(a){(f||i)(a)}}function C(a,b){a.removeClass(b);var c=a.data(P);c&&(c.running&&c.running--,c.running&&0!==c.running||a.removeData(P))}function D(a,c){var d="";return a=b.isArray(a)?a:a.split(/\s+/),j(a,function(a,b){a&&a.length>0&&(d+=(b>0?" ":"")+a+c)}),d}var E,F,G,H,I="";a.ontransitionend===c&&a.onwebkittransitionend!==c?(I="-webkit-",E="WebkitTransition",F="webkitTransitionEnd transitionend"):(E="transition",F="transitionend"),a.onanimationend===c&&a.onwebkitanimationend!==c?(I="-webkit-",G="WebkitAnimation",H="webkitAnimationEnd animationend"):(G="animation",H="animationend");var J,K="Duration",L="Property",M="Delay",N="IterationCount",O="$$ngAnimateKey",P="$$ngAnimateCSS3Data",Q="ng-animate-block-transitions",R=3,S=1.5,T=1e3,U={},V=0,W=[],X=null,Y=0,Z=[];return{enter:function(a,b){return B("enter",a,"ng-enter",b)},leave:function(a,b){return B("leave",a,"ng-leave",b)},move:function(a,b){return B("move",a,"ng-move",b)},beforeSetClass:function(a,b,c,d){var e=D(c,"-remove")+" "+D(b,"-add"),f=z("setClass",a,e,function(d){var e=a.attr("class");a.removeClass(c),a.addClass(b);var f=d();return a.attr("class",e),f});return f?(k(a,function(){v(a,e),w(a),d()}),f):void d()},beforeAddClass:function(a,b,c){var d=z("addClass",a,D(b,"-add"),function(c){a.addClass(b);var d=c();return a.removeClass(b),d});return d?(k(a,function(){v(a,b),w(a),c()}),d):void c()},setClass:function(a,b,c,d){c=D(c,"-remove"),b=D(b,"-add");var e=c+" "+b;return A("setClass",a,e,d)},addClass:function(a,b,c){return A("addClass",a,D(b,"-add"),c)},beforeRemoveClass:function(a,b,c){var d=z("removeClass",a,D(b,"-remove"),function(c){var d=a.attr("class");a.removeClass(b);var e=c();return a.attr("class",d),e});return d?(k(a,function(){v(a,b),w(a),c()}),d):void c()},removeClass:function(a,b,c){return A("removeClass",a,D(b,"-remove"),c)}}}])}])}(window,window.angular),angular.module("thinkfulApp").controller("MainCtrl",["$scope","$route",function(a,b){a.$route=b}]),angular.module("thinkfulApp").controller("CalcCtrl",["$scope",function(a){var b=0,c="";a.num1=0,a.num2=0,a.display="X + Y is Z",a.add=function(){c=" plus ",b=a.num1+a.num2,a.check()},a.sub=function(){c=" minus ",b=a.num1-a.num2,a.check()},a.mult=function(){c=" multiplied by ",b=a.num1*a.num2,a.check()},a.div=function(){c=" divided by ",0===a.num2?a.display="You can not divide by zero":(b=a.num1/a.num2,a.check())},a.check=function(){a.display=isNaN(b)?"You must enter a valid number":a.num1+c+a.num2+" is "+b}}]),angular.module("thinkfulApp").controller("MadlibCtrl",["$scope",function(a){a.story=!1,a.male=!0,a.data={},a.submit=function(){a.madlibForm.$valid&&(a.story=!0)},a.form=function(){a.story=!1,a.data={}}}]),angular.module("thinkfulApp").controller("MultiplicationCtrl",["$scope","$attrs","$rootScope",function(a,b,c){function d(a){for(var b=[],c=0;a>c;c++)b[c]=c+1;return b}a.compute=function(a,b){return a*b},a.$watch("numberLimit",function(b){a.numbers=d(Math.min(b,20))}),a.numberLimit=b.initialNumberLimit||10;var e,f;a.setActiveFactors=function(a,b){e=a,f=b},a.matchesFactor=function(a,b){return a===e||b===f},a.clearActiveFactors=function(){e=f=null},a.setActiveNumber=function(a,b,d){var e=""+a+" times "+b+" is "+d;c.$broadcast("displayData",e)}}]),angular.module("thinkfulApp").controller("DisplayCtrl",["$scope",function(a){a.$on("displayData",function(b,c){a.content=c})}]),angular.module("thinkfulApp").controller("WaitstaffCtrl",["$scope",function(a){a.reset=function(){a.$broadcast("fresh")}}]).controller("MealCtrl",["$scope","$rootScope",function(a,b){a.data={},a.submit=function(){a.detailsForm.$valid&&(b.$broadcast("newMeal",a.data),a.data={})},a.cancel=function(){a.data={}},a.$on("fresh",function(){a.cancel()})}]).controller("ChargesCtrl",["$scope",function(a){a.subtotal=a.tip=a.total=0,a.$on("newMeal",function(b,c){a.subtotal=c.price+c.price*(c.taxPerc/100),a.tip=c.price*(c.tipPerc/100),a.total=a.subtotal+a.tip}),a.$on("fresh",function(){a.subtotal=a.tip=a.total=0})}]).controller("EarningsCtrl",["$scope",function(a){a.tipTot=a.count=0,a.average=function(){return 0===a.count?0:a.tipTot/a.count},a.$on("newMeal",function(b,c){a.tipTot+=c.price*(c.tipPerc/100),a.count++}),a.$on("fresh",function(){a.tipTot=a.count=0})}]);