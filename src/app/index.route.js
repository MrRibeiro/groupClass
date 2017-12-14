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
        templateUrl: 'app/main/home/home.html',
        controller: 'HomeController',
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
    $routeProvider
      .when('/group', {
        templateUrl: 'app/main/my-groups/group/group.html',
        controller: 'GroupController',
        controllerAs: 'groups'
      })
      .otherwise({
        redirectTo: '/'
      });
  }

})();
