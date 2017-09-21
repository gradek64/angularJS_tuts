//(function(){

angular.module('app')

	.controller('myCtr',function($scope,myCtrFactory){
		$scope.title = myCtrFactory;
	});

//})();