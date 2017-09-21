// I control the root of the application.
angular.module( "Demo" )
		.controller(
			"AppController",
			function( $scope, require_js_factory ) {

				// I determine which view is rendered.
				//$scope.subview = "after";;
						filesToLoad = ["text!all_tutorials_tab/all_tutorials_template.htm",];

						//this factory returns promise that provides callback function;
						require_js_factory().then( function(successCallback, errorCallback ) {
						 $scope.subview = "before";
							});

				// ---
				// PUBLIC METHODS.
				// ---


				// I toggle between the two different subviews.
				$scope.toggleSubview = function() {

					if ( $scope.subview === "before" ) {

						//$scope.subview = "after";

						console.log($scope.subview);

						console.log('toggle after 1 ');

						filesToLoad =[]; //reset array;
						filesToLoad = [
										"text!add_tutorial_tab/add_tutorial_template.htm",  //add controller html
										"//cdn.tinymce.com/4/tinymce.min.js",	//add external script
										"add_tutorial_tab/add_tutorial_controller.js" //add controller
								  ]; 

						require_js_factory().then(
							function() {

								console.log( "after laoded" );
								$scope.subview = "after";

							}
						);

					} else {
							console.log('toggle before 2');


						//$scope.subview = "before";
						filesToLoad =[];
						filesToLoad = ["text!all_tutorials_tab/all_tutorials_template.htm",];

						require_js_factory().then(
							function() {

								console.log('before laoded' );
								$scope.subview = "before";

								}
						);


					}

				};

			}
		);