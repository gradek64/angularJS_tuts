angular.module('transitions', ['ngAnimate', 'ui.router'])

.controller('tCtrl', function ($state, $scope) {
  
  // transitions
  this.tabs = ['fade-in', 'slide-in', 'scale'];
  
  // backgrounds
  var colorList = ['red', 'green', 'blue', 'white', 'gray'],
    listLast = colorList.length;
  
  // on button click
  this.stateChange = function (tab) {
    this.transition = tab;
    this.bg = colorList[(Math.floor(Math.random()*listLast))];
    $state.go(tab);
    
  };
  
})

.config(function($stateProvider, $urlRouterProvider) {
  var template = "<h1>Transitions in AngularJS</h1><button class='btn btn-lg' role='tablist' ng-repeat='tab in ctrl.tabs' ng-click='ctrl.stateChange(tab)'>{{tab}}</button>";
  
  $urlRouterProvider.otherwise('/fade-in');
  $stateProvider
  .state('fade-in', {
    url: '/fade-in',
    template: template,
    data: { transition: 'fade-in'} //assign data to the ng-class
  })
  .state('slide-in', {
    template: template,
    data: { transition:'slide-in'}
  })
  .state('scale', {
    template: template,
    data: { transition: 'scale'}
  });
});