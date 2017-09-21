angular.module('app')
		.config(function($stateProvider, $urlRouterProvider,$locationProvider) { //depedency injections 


        // HOME STATES AND NESTED VIEWS ========================================
    $stateProvider.state('home', {
            url: '/',
            templateUrl: 'routes_template/home.html'
        })
        .state('login', {
            url: '/login',
            templateUrl: 'routes_template/login.html'
        })
        .state('create', {
            url: '/create',
            templateUrl: 'routes_template/create_user.html'
           
        })
        .state('myvideos', {
            url: '/videos',
            templateUrl: 'routes_template/youtube_videos.html'
        });
       
        $locationProvider.html5Mode(true); //angular will not user hashes values to excess routes; by 
        //default angular uses hashes values as /#!/home but most browser suppport html5mode so we safe to use that in our project;
        
});
