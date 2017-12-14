(function() {
    'use strict';
  
    angular
      .module('ifsocial')
      .controller('LoginController', LoginController);
  
    /** @ngInject */
    function LoginController($scope, $http, $window) {
        var vm = this;

        $scope.submitLogin = function(){
            let config = {
                registration: 333333,
                password: "123"
            }
            $http.get('https://pacific-stream-91568.herokuapp.com/user/login', config).then(
                function(resposta){
                    console.log(resposta);
                }, function(resposta){
                    console.log(resposta);
                });

            $window.location.href = '#/home';
            //$rootScope.changeLocation('pagina-inicial');
        }
    }
})();