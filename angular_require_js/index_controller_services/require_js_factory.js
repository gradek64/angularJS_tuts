app.factory(
			"require_js_factory",
			function( $rootScope, $templateCache, $q ) { //those services are available in factory:$rootScope, $templateCache, $q - those are not arguments those are angular internal services;

				console.log('factory started');

				//this factory return angular promise;
				//(what is promise)- is an outcome of http request either positieve or negative;

				function loadModule( successCallback, errorCallback ) {

									console.log('loadModule started');
				var promise = null;
				var deferred = $q.defer();
				


					successCallback = ( successCallback || angular.noop );
					errorCallback = ( errorCallback || angular.noop );

					// If the module has already been loaded then
					// simply bind the handlers to the existing promise.
					// No need to try and load the files again.
					if ( promise ) {
										console.log('promise already set');


						return(
							promise.then( successCallback, errorCallback )
						);

					}

					promise = deferred.promise;

					console.log(filesToLoad);

					// Wire the callbacks into the deferred outcome.
					//promise.then( successCallback, errorCallback );

					// Load the module templates and components.
					// --
					// The first dependency here is an HTML file which
					// is loaded using the text! plugin. This will pass
					// the value through as an HTML string.
					requirejs.undef();
					require(
						filesToLoad,
						function requrieSuccess( templatesHtml ) { //files loaded in order this is lazy.html

											console.log('require js started');


							// Fill the template cache. The file content
							// is expected to be a list of top level
							// Script tags.
							console.log(templatesHtml);

							$( templatesHtml ).each(
								function() {


									var template = $( this );
									var id = template.attr( "id" );
									var content = template.html();

									console.log(id);

									$templateCache.put( id, content );

								}
							);

							// template loaded therefore $update is checking for updates
							$rootScope.$apply(
								function() {

													console.log('promise resolve');


									deferred.resolve(['I am in ']); //this is a successCallback;

								}
							);

						},
						function requireError( error ) {

							// Module load failed, reject deferred.
							$rootScope.$apply(
								function() {

													console.log('promise error');


									deferred.reject( error ); //this is a errorCallback;

								}
							);

						}
					);

					return( promise );

				}

				return( loadModule );

			}
		);