// Create an application module for our demo.
		var app = angular.module( "Demo", ['ngRoute'] );
		// ----------------------!IMPORTANT ------------------------ //
		// After the AngularJS has been bootstrapped, you can no longer
		// use the normal module methods (ex, app.controller) to add
		// components to the dependency-injection container. Instead,
		// you have to use the relevant providers. Since those are only
		// available during the config() method at initialization time,
		// we have to keep a reference to them.
		// --
		// NOTE: This general idea is based on excellent article by
		// Ifeanyi Isitor: http://ify.io/lazy-loading-in-angularjs/
		// --------------------!IMPORTANT -------------------------- //
		app.config(
			function( $controllerProvider, $provide, $compileProvider, $routeProvider ,$locationProvider) {

				// Let's keep the older references.
				app._controller = app.controller;
				app._service = app.service;
				app._factory = app.factory;
				app._value = app.value;
				app._directive = app.directive;

				 $routeProvider
        .when('/Book', {
        	 templateUrl: 'all_tutorials_tab/all_tutorials_tab.htm',
         
        });

         $locationProvider.html5Mode(true);
        
      $locationProvider.html5Mode(true);

				// Provider-based controller.
				app.controller = function( name, constructor ) {

					//use controllerProvider service to outsource controller refference after angular bootstrapped
					$controllerProvider.register( name, constructor );
					return( this );

				};

				// Provider-based service.
				app.service = function( name, constructor ) {
					//use provide to outsource service refference after angular bootstrapped
					$provide.service( name, constructor );
					return( this );

				};

				// Provider-based factory.
				app.factory = function( name, factory ) {
					//use provide service to outsource factory refference after angular bootstrapped
					$provide.factory( name, factory );
					return( this );

				};

				// Provider-based value.
				app.value = function( name, value ) {
					//use provide service to outsource value refference after angular bootstrapped
					$provide.value( name, value );
					return( this );

				};

				// Provider-based directive.
				app.directive = function( name, factory ) {
					//use compileProvider service to outsource directive refference after angular bootstrapped
					$compileProvider.directive( name, factory );
					return( this );

				};

				// NOTE: You can do the same thing with the "filter"
				// and the "$filterProvider"; but, I don't really use
				// custom filters.

			}
		);


		// -------------------------------------------------- //
		// -------------------------------------------------- //


		


		// -------------------------------------------------- //
		// -------------------------------------------------- //


		