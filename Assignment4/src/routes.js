(function(){
	'use strict';

	angular.module('MenuApp')
	.config(RoutesConfig);

	RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
	function RoutesConfig($stateProvider, $urlRouterProvider){
		$urlRouterProvider.otherwise('/');

		//Set us states
		$stateProvider
	
		//Home page
        .state('home', {
          url: '/',
          templateUrl: 'src/templates/home.template.html'
        })

        .state('categories', {
        	url:'/categories',
        	templateUrl : 'src/templates/categories.template.html',
        	controller: 'CategoriesListController as itemsList',
        	resolve: {
        		categories: ['MenuDataService', function(MenuDataService){
        			return MenuDataService.getAllCategories()
        			.then(function(response){
                        return response.data;
        			});
        		}]
        	}
        })

        .state('items', {
            url: '/items/{id}',
            templateUrl: 'src/templates/items.template.html',
            controller: 'ItemsCategoryListController as itemsDetail',
            resolve: {
               items: ['$stateParams', 'MenuDataService',
                  function ($stateParams, MenuDataService) {
                     return MenuDataService.getItemsForCategory($stateParams.id)
                        .then(function (response) {
                            console.log('response :' + response.data.menu_items);
                           return response.data.menu_items;
                    });
                }]
            }
        });
	}
})();