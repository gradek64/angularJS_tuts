(function(angular) {
  'use strict';
angular.module('docsTemplateUrlDirective', [])
  .controller('Controller', ['$scope','$timeout','countries',function($scope,$timeout,countries) {
    //$scope.countries = angular.copy(countries);
    $scope.country = "Poland";
    $scope.user = "Greg";


   $scope.tab = [

        {title:'Note 1'},
        {title:'Note 2'},
        {title:'Note 3'}
    ];

    $scope.objects = {greg:"is cool"};

    $scope.hideDialog = function (message) {
      $timeout(function () {
         $scope.dataPassed = message;
      }, 2000);
    };

    console.log('main scope countries constante below');
    console.log(countries);


  }])  //constant set for main Controller for docsTemplateUrlDirective module not for directive;
  .constant('countries', [
      { 'name': 'Algeria', 'group': 'H' },
      { 'name': 'Argentina', 'group': 'F' },
      { 'name': 'Australia', 'group': 'B' },
      { 'name': 'Belgium', 'group': 'H' },
      { 'name': 'Bosnia and Herzegovina', 'group': 'F' },
      { 'name': 'Brazil', 'group': 'A' },
      { 'name': 'Cameroon', 'group': 'A' },
      { 'name': 'Chile', 'group': 'B' },
      { 'name': 'Colombia', 'group': 'C' },
      { 'name': 'Costa Rica', 'group': 'D' },
      { 'name': 'Croatia', 'group': 'A' },
      { 'name': 'Ecuador', 'group': 'E' },
      { 'name': 'England', 'group': 'D' },
      { 'name': 'France', 'group': 'E' },
      { 'name': 'Germany', 'group': 'G' },
      { 'name': 'Ghana', 'group': 'G' },
      { 'name': 'Greece', 'group': 'C' },
      { 'name': 'Honduras', 'group': 'E' },
      { 'name': 'Iran', 'group': 'F' },
      { 'name': 'Italy', 'group': 'D' },
      { 'name': 'Ivory Coast', 'group': 'C' },
      { 'name': 'Japan', 'group': 'C' },
      { 'name': 'South Korea', 'group': 'H' },
      { 'name': 'Mexico', 'group': 'A' },
      { 'name': 'Netherlands', 'group': 'B' },
      { 'name': 'Nigeria', 'group': 'F' },
      { 'name': 'Portugal', 'group': 'G' },
      { 'name': 'Russia', 'group': 'H' },
      { 'name': 'Spain', 'group': 'B' },
      { 'name': 'Switzerland', 'group': 'E' },
      { 'name': 'Uruguay', 'group': 'D' },
      { 'name': 'United States', 'group': 'G' }
    ])
  .directive('myTemplate', [ "countries" ,function(countries) {
   return {
          restrict: 'AE',
          scope: { //this creates isolated scope wchich only iherits parent scope by values specified in brakets;
            text: "@myText", //refference as text to directive atribute my-text as @myText as naming convention
            twoWayBound: "=",//without refference just main name as atribute my-data with two-way-binding as "="
            close: '&onClose' //send event from directive to parent scope function on-close="doSth";
          },
          templateUrl:"my-template.html",
          link: function (scope, element, attrs) {  //local scope for template for directive only not parent;
            scope.info = "one-way-binding";
            scope.directiveConstantCounries = countries;
          },
          controller:function($scope){ //controller for the directive;
               console.log($scope.text);
               console.log($scope.twoWayBound);

               

          }

      }
  }])

  
})(window.angular);

/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/