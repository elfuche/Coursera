(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['$q','SignUpService', 'ApiPath'];
function MyInfoController($q, SignUpService, ApiPath) {
  var $ctrl = this;
  $ctrl.basePath = ApiPath;
  $ctrl.result={};
  $ctrl.message='';

  var promise1 = SignUpService.getInfosUser();
 
  var promise2 = SignUpService.getUser();

  $q.all([promise1, promise2]).
  then(function(response){
    $ctrl.message = 'These are your personal informations :';
    $ctrl.found = true;
    
    $ctrl.result = {
      firstname : response[1].firstname,
      lastname : response[1].lastname,
      phone : response[1].phone,
      email : response[1].email,
      img : response[0].data.short_name,
      title : response[0].data.name,
      description : response[0].data.description
    }
  })
  .catch(function(error){
    console.log(error);
    $ctrl.found = false;
    $ctrl.message = 'Not Signed Up Yet, Sign Up Now!!';
  })
}//end MyInfoController

})();
