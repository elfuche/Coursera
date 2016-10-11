(function(){
	'use strict';

	angular.module('MenuApp', ['ui.router', 'data'])
	.config(function () {
       console.log("menu app config fired.");
    }).
    run(function () {
      console.log("menu app run fired.");
    });
})();