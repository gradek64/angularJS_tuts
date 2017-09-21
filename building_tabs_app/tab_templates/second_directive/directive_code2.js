

angular.module('myApp') 
  .directive('secondaryTab',function($animate,$timeout,countries) { //insert coutry constant as dependency for the directive
      return {
                restrict: 'A',
                link:setup,
                scope: { //this creates isolated scope wchich only iherits parent scope by values specified in brakets;
                      user: "@currentUser",//it is a string with object it has to have @ sign;
                      countryList: "=metaCoutries" // this is passed from parent scope with attribute meta-coutries;
                },
                templateUrl:"tab_templates/second_directive/directive-template2.html",
                controller:function($scope){ //controller for the directive;
                  $scope.countryList = countries;
                }
            }


            function setup(scope, element) {
              var toggled, label,index=0,labelArray =[];

              //register dynamic mouseenter and mouseleave events 
                  $('#second').on('click','li', function (event) {

                     $(this).css("border","1px solid red");

                    });

              //cause in this example we are using directive template everything is appended dynamaically and has 
              //nothing to do with parent static html , threre for directive as $animate wont regiter any css animation 
              //you need to use jQuery aniamtion istead for any animation needed on dynamic elements 
              //all css has to be applied through jQuery caause $animate directive doesnt work on dynamic template;


             }
    })