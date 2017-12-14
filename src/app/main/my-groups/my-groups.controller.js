(function() {
    'use strict';
  
    angular
      .module('ifsocial')
      .controller('MyGroupsController', MyGroupsController);
  
    /** @ngInject */
    function MyGroupsController($scope, $http) {
        var vm = this;

        initDadosMenu();
        function initDadosMenu(){
          //função mockada
          $http.get('https://pacific-stream-91568.herokuapp.com/user/home/3').then(
            function(resposta){
              $scope.dataHome = resposta.data.data;
              console.log($scope.dataHome);
            }, function(resposta){
                console.log(resposta);
            });
        }

        initGrupos();
        function initGrupos(){
            $http.get('https://pacific-stream-91568.herokuapp.com/user/3/groups').then(
                function(resposta){
                    $scope.gruposCriados = resposta.data.data.createdBy;
                    $scope.participate = resposta.data.data.participate;
                }, function(resposta){
                    console.log(resposta);
                });
        }
       
    }
})();