(function () {
'use strict';

angular.module('data')
.controller('ItemsCategoryListController', ItemsCategoryListController);


ItemsCategoryListController.$inject = ['items'];
function ItemsCategoryListController(items) {
  var itemsDetail = this;
  itemsDetail.items = items;
}

})();
