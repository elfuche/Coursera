(function () {
"use strict";

angular.module('public')
.service('SignUpService', SignUpService);


SignUpService.$inject = ['$http', 'ApiPath'];
function SignUpService($http, ApiPath) {
  var service = this;

  service.data = null;
  service.user = null;

  service.register = function(user){
    var short_name = user.menu;
    var response = $http.get(ApiPath + '/menu_items/'+short_name+'.json');
    
    service.data=response;
    service.user = user;
    return response;
    
  } // end register function
  
  service.getInfosUser= function(){
    return service.data;
  }

  service.getUser = function(){
    return service.user;
  }

}

})();
