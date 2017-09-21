(function(angular) {
  'use strict';
angular.module('ngRouteExample', ['ngRoute'])

 .controller('MainController', function($scope, $route, $routeParams, $location) {
     $scope.$route = $route;
     $scope.$location = $location;
     $scope.$routeParams = $routeParams;
 })

 .controller('BookController', function($scope, $routeParams) {
     $scope.name = "BookController";
     $scope.params = $routeParams;
 })

 .controller('ChapterController', function($scope, $routeParams) {
     $scope.name = "ChapterController";
     $scope.params = $routeParams;
 })

.config(function($routeProvider, $locationProvider) {
  $routeProvider
   .when('/Book/:bookId', {
    templateUrl: 'templates/book.html',
    controller: 'BookController',
    resolve: {
      // I will cause a 1 second delay
      delay: function($q, $timeout) {
        var delay = $q.defer();
        $timeout(delay.resolve, 1000);
        return delay.promise;
      }         
    }
  })
  .when('/Book/:bookId/ch/:chapterId', {
    templateUrl: 'templates/chapter.html',
    controller: 'ChapterController'
  });

  // configure html5 to get links working on without hash values 
  $locationProvider.html5Mode(true);
})


//get executed after the injector is created and are used to kickstart the application.
// Only instances and constants can be injected into run blocks
.run([  '$rootScope',
        '$http',
        '$location',
        '$routeParams',

         function($rootScope,$http,$location,$routeParams){

             $rootScope.
                  $on('stateChangeSuccess',function(event,toState,toParams,fromState,fromParams){
                        //  $('.pageLoading').addClass('hidden');
                  });

          }//end of run constructor;

  ]);


  var LoadApplicationData = function($http,$q){
      return "greg";
  }




/*.factory("loadApplicationData", function($rootScope, $q, $http){ //set up factory service for main controller;
   return {
       



    loadApplicationData = function($rootScope, $q, $http ){

    }




   }
});*/





})(window.angular);


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
