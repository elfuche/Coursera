(function () {
'use strict';

angular.module('data')
.component('itemso', {
  templateUrl: 'src/data/templates/items.template.html',
  bindings: {
    items: '<'
  }
});

})();
