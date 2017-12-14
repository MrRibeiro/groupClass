(function() {
  'use strict';

  angular
    .module('ifsocial')
    .config(routeConfig);

  function routeConfig($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/main/login/login.html',
        controller: 'LoginController',
        controllerAs: 'login'
      })
      .otherwise({
        redirectTo: '/'
      });
    $routeProvider
      .when('/home', {
        templateUrl: 'app/main/home/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
    $routeProvider
      .when('/my-groups', {
        templateUrl: 'app/main/my-groups/my-groups.html',
        controller: 'MyGroupsController',
        controllerAs: 'my-groups'
      })
      .otherwise({
        redirectTo: '/'
      });
  }

})();
