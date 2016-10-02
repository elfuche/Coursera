(function(){
    'use strict';

	angular.module('NarrowItDownApp', [])
	.controller('NarrowItDownController', NarrowItDownController)
	.service('MenuSearchService', MenuSearchService)
	.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com/menu_items.json")
  .directive('foundItems', foundItemsDirective);

    function foundItemsDirective(){
        var ddo = {
            templateUrl: 'found.html',
            scope: {
                found:'=',
                onRemove: '&'
            },
            controller: FoundItemsDirectiveController,
            controllerAs: 'controller',
            bindToController: true
        };

        return ddo;
    }

    function FoundItemsDirectiveController(){
        var controller = this;
    }

	NarrowItDownController.$inject = ['MenuSearchService'];

	function NarrowItDownController(MenuSearchService){
	  var controller = this;
	  controller.searchTerm = "";

      controller.getMatchedMenuItems = function(term){
        if(!term){
          controller.message = "No items found";
          return false;
        }
        else{
        controller.message = false;  
        var promise = MenuSearchService.getMatchedMenuItems();
        promise.then(function(response){
          var topFound = [];
           var foundOrign = response.data.menu_items;
           for(var i=0; i < foundOrign.length; i++){
                if((((foundOrign)[i]).description).indexOf(term) === -1 || (((foundOrign)[i]).description) === '' ){
                    foundOrign.splice(i,1);
                }
                else{
                    topFound.push(foundOrign[i]);
                }
            }
            controller.foundItems = topFound;
        })
        .catch(function(error){
          console.log(error);
        })
       }
      };

      controller.removeItem = function(itemIndex){
        controller.foundItems.splice(itemIndex,1);
        if(!controller.foundItems.length){
          controller.message = "No items found";
        }
        else{
          controller.message = false;
        }
      }

	}

    MenuSearchService.$inject = ['$http', 'ApiBasePath']
	function MenuSearchService($http, ApiBasePath){
		
    var service = this;
      service.getMatchedMenuItems = function(){
         var response = $http({
                   method: 'GET',
                   url:ApiBasePath
                });
        return response;
      
      };
    
   }

})();