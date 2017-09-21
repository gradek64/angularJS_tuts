//Define an angular module for our app
var sampleApp = angular.module('sampleApp', []);

//Define Routing for app
//Uri /AddNewOrder -> template AddOrder.html and Controller AddOrderController
//Uri /ShowOrders -> template ShowOrders.html and Controller AddOrderController


/* important */

/* just becauese we set our links to hash value we dont need to specify $locatiaon serviece to deal with routhes */
/* Angular will automatically read them as hash values and add them to the rest fo the url */

sampleApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/AddNewOrder', {
	templateUrl: 'templates/add_order.html',
	controller: 'AddOrderController'
      }).
      when('/ShowOrders', {
	templateUrl: 'templates/show_orders.html',
	controller: 'ShowOrdersController'
      }).
       when('/newOrder', {
	templateUrl: 'add_new_order.htm', //this is a script tag template id;
	controller: 'ShowOrdersControllerScriptTemplate'
      }).
      when('/ShowOrder/:orderId', {  //pass parameter to the url;
      templateUrl: 'templates/show_orders_id.html',
      controller: 'ShowOrderControllerId'
	}).
      otherwise({
	redirectTo: '/AddNewOrder'
      });
}]);


sampleApp.controller('AddOrderController', function($scope) {
	
	$scope.message = 'This is Add new order screen';
	
});


sampleApp.controller('ShowOrdersController', function($scope) {

	$scope.message = 'This is Show orders screen';

});

sampleApp.controller('ShowOrdersControllerScriptTemplate', function($scope) {

	$scope.message = 'This is a script template from index page';

});

sampleApp.controller('ShowOrderControllerId', function($scope,$routeParams) {

	$scope.order_id = $routeParams.orderId;

});


