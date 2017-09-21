  // Define our AngularJS application module.


  var app = angular.module('app',[]);
  app.controller('mainCtrl', function($scope){
    $scope.People = [ 
					    {id:"2","name":"mayank","age":"mayank2"}, 
					    {id:"3","name":"mayank", "age":"mayank2"},
					    {id:"1","name":"mayank", "age":"mayank2"}
    				];
    

  /*          			//populae ng-repeat with this data;
  	$scope.people = [{
  		"name":"Greg","age":"young",
  		"name":"Truskawek","age":"even younger"
  	}];*/


 });


  // I execute at priority 500.
        /*demo.directive(
            "bg-ng-repeat",
            function() {
                // I am the controller for this directive.
                function Controller( $scope, $element, $attrs ) {
                    this.id = "bnOne";
                }
                // I bind the $scope to the DOM behaviors.
                function link( $scope, element, attributes, controllers ) {
                    console.log( "bnOne ( priority: 500 )" );
                }
                // Return the directive confirugation. Notice that
                // this directive is (optionally) asking for each
                // controller of the four directives on the given
                // element.
                return({
                    controller: Controller,
                    link: link,
                    priority: 500,
                    restrict: "A"
                });
            }
        );*/
        // -------------------------------------------------- //
        // -------------------------------------------------- //