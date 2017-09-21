

angular.module('myApp') 
  .directive('primaryTab',function($animate,$timeout,countries) { //insert coutry constant as dependency for the directive
      return {
            restrict: 'A',
            scope: { //this creates isolated scope wchich only iherits parent scope by values specified in brakets;
                  user: "@currentUser",//it is a string with object it has to have @ sign;
                  countryList: "=metaCoutries" // this is passed from parent scope with attribute meta-coutries;
            },
            templateUrl:"tab_templates/directive_widget_animate_seperate_file/directive-template.html",
            link: function(scope, element) {
              var toggled, label,index=0,labelArray =[];


              console.log("gagagag3453535");

              //cause in this example we are using directive template everything is appended dynamaically and has 
              //nothing to do with parent static html , threre for directive as $animate wont regiter any css animation 
              //you need to use jQuery aniamtion istead for any animation needed on dynamic elements 
              //all css has to be applied through jQuery caause $animate directive doesnt work on dynamic template;


                //create boostrap label for every countries
                 angular.forEach(countries, function(value, key) {
                      label = angular.element('<span>').addClass('label label-info');
                      label.text('Group ' + value.group);
                      labelArray.push(label);
                    });

                //register dynamic mouseenter and mouseleave events 
                  $(document).on('mouseenter','li.grab', function (event) {

                      index = $(this).index(); //index needed for access labels in labelArray;
                      //below animation is using css aniamation declard in parent html scope
                      if($("li.grab").has("span")){$("li.grab").children().remove();}
                      $(this).append(labelArray[index]);
                      labelArray[index].removeClass('animatedBack');
                      labelArray[index].addClass('animated');

                    });
            
                  $(document).on('mouseleave', 'li.grab', function (event) {
                      

                      //below animation is using css aniamation declard in parent html scope
                      labelArray[index].removeClass('animated');
                      labelArray[index].addClass('animatedBack');
                      labelArray[index].remove();

                  });


               
             },
            controller:function($scope){ //controller for the directive;

              //this is isolate scope used in directieve template;
              $scope.countryList = countries;
              console.log($scope.countryList);

            }

        }
    })