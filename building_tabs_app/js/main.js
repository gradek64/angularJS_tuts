(function(angular) {
  'use strict';

      angular.module('myApp',[])
          .controller('TabsCtrl', function($scope,countries) {  //important constant into main controller;

            $scope.tabs = [{
                    title: 'primary',
                    icon: 'fa-home'
                }, {
                    title: 'secondary',
                    icon: 'fa-user'
            }];

            $scope.currentTab = 'primary';

            $scope.onClickTab = function (tab) {

                console.log(tab.title);
                $scope.currentTab = tab.title;
            }
            
            $scope.isActiveTab = function(tabtitle) {
                return tabtitle == $scope.currentTab;
            }


            $scope.myCountries = countries;
            $scope.user = "Greg";
          })


          //constant passed to directive but assigned in main controller;
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
          ]);

})(window.angular);