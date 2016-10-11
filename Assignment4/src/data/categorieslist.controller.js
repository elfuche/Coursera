(function () {
'use strict';

angular.module('data')
.controller('CategoriesListController', CategoriesListController);


CategoriesListController.$inject = ['categories'];
function CategoriesListController(categories) {
  var itemsList = this;
  itemsList.categories = categories;
}

})();
