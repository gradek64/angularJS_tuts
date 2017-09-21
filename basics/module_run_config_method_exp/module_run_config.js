(function(angular) {
  'use strict';
angular.module('xmpl.service', [])

  .value('greeter', {
    salutation: 'Hello',
    localize: function(localization) {
      this.salutation = localization.salutation;
    },
    greet: function(name) {
      return this.salutation + ' ' + name + '!';
    }
  })

  .value('user', {
    load: function(name) {
      this.name = name;
    }
  })
  .value('injectedValue','an injected Value')
  .constant('injectConfigConstant','this is injected from config module.....')
  .constant('injectConfigConstantInFactoryDirectly','I am constant ijected directly into factory in config phase');





angular.module('xmpl.directive', []);

angular.module('xmpl.filter', []);

angular.module('xmpl', ['xmpl.service'/*,'xmpl.directive', 'xmpl.filter'*/])



  //ONLY PROVIDERS CAN BE INJFECTED INTO .config method and CONSTATNTS SINCE ARE STATIC BUT not SERVICES EXCEPT FOR $provide and $injector service and outsite services as $routeProvider).
  .config(function($provide,injectConfigConstant) { 
         
         //define service Provider in config file and inject Constant from config method;
         $provide.provider('greetingWordsprovider_service', function() {
            this.$get = function() {
             return function(name) {
                alert("Hello, " + injectConfigConstant);
            };
          };
         });

        //define service Factory in config file and inject constat to it directlly
         $provide.factory('greetingWordsFactory', ['injectConfigConstantInFactoryDirectly',function(constantDefined) {
            return function(name) {
              alert("Hello from factory, " + constantDefined);
            };
         }]);

         //define service Service in config file and inject constat to it directlly
         $provide.service('greetingWordsService', ['injectConfigConstantInFactoryDirectly',function(constantDefined) {
              this.callme = function(){
                      alert("Hello from service, " + constantDefined);

              }
         
         }]);

         //define service Value in config file YOU CAN NOT INJECT PROVIDERS INTO VALUE OR CONSTANT;
         $provide.value('greetingWordsValue',function(){ //, ['injectConfigConstantInFactoryDirectly',function(constantDefined) 
            alert("Hello form Value ");
         });

         //the prooviders above are 100% the same as those below

         /*                
                  myMod.provider("greeting", ...);
                  myMod.factory("greeting", ...);
                  myMod.service("greeting", ...);
                  myMod.value("greeting", ...);
         */

         //BUT YOUR APP IT MIGHT NEED TO DIFINE THEM HERE ESPECIALLY WITH CUSTOM provider as $routeProvider 
  })


/*
    .run method is called once Angular is compiling and it is executed after .config constructor  (it is a BOOSTRAPING PROCESS)
*/
  .run(function(greeter, user, greetingWordsFactory, greetingWordsprovider_service, greetingWordsValue) {
    // This is effectively part of the main method initialization code
    greeter.localize({
      salutation: 'Bonjour La '
    });
    user.load('World');

    greetingWordsFactory();
    greetingWordsprovider_service();
    greetingWordsValue();
  })

  /*
      get executed during the provider registrations and configuration phase. 
      Only providers and constants can be injected into configuration blocks.
      This is to prevent accidental instantiation of services before they have been fully configured.
  */

  .controller('XmplController', function($scope, greeter, user,injectConfigConstant,greetingWordsService){
    $scope.info = injectConfigConstant;
    $scope.greeting = greeter.greet(user.name);
    greetingWordsService.callme();
  });
})(window.angular);

/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
