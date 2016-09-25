(function(){
	'use strict';

	angular.module('ShoppingListCheckOff',[])
	.controller('ToBuyShoppingController', ToBuyShoppingController)
	.controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
	.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

	ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];
	function ToBuyShoppingController(ShoppingListCheckOffService){
		var buy = this;
		buy.items = [
          {name : "cookies", quantity : 5},
          {name : "chips", quantity : 10},
          {name : "chocolate", quantity : 20},
          {name : "bananas", quantity : 7},
          {name : "tacos", quantity : 12}
		];

		buy.boughtItem = function(itemIndex){
			ShoppingListCheckOffService.boughtItem(buy.items[itemIndex]);
			buy.items.splice(itemIndex, 1); 
		}
	}

	AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];
	function AlreadyBoughtShoppingController(ShoppingListCheckOffService){
		var bought = this;

		bought.items = ShoppingListCheckOffService.getItems();

	}

	function ShoppingListCheckOffService(){
		var service = this;
		//List of items
		var items = [];

		service.boughtItem = function(item){
			items.push(item);           
		};

		service.getItems = function(){
			return items;
		}
	}
})();