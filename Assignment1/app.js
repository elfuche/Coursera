(function(){
'use strict';
	angular.module('LunchCheck',[])
	.controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];

     function LunchCheckController($scope){
        
        $scope.splitDishes = function(){
            var dishes = $scope.list || "";
            var arr = dishes.split(',');
            if(arr.length === 0 || arr.indexOf("") === 0){
            	$scope.message = "Empty";
            	$scope.color = "red";
            }
            else if(arr.length <= 3){
                $scope.message = "Enjoy";
                $scope.color = "green";   	
            }
            else{
                $scope.message = "Too long !!!";
                $scope.color = "blue";
            }
        };

     };

})();