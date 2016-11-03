(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['SignUpService'];
function SignUpController(SignUpService) {
  var $ctrl = this;
  $ctrl.user={};
  $ctrl.message='';

  $ctrl.submit = function(user){
  	var promise = SignUpService.register(user);
  	promise.then(function(response){
  		$ctrl.message = 'Your informations has been saved';
  	})
  	.catch(function(error){
  		$ctrl.message = 'No such new number exists';
  	});
  }
}


})();
