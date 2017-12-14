(function() {
    'use strict';
  
    angular
      .module('ifsocial')
      .controller('GroupController', GroupController);
  
    /** @ngInject */
    function GroupController($scope, $http) {
        initPosts();
        function initPosts(){
          //função mockada
          $http.get('https://pacific-stream-91568.herokuapp.com/user/home/3').then(
            function(resposta){
              $scope.dataHome = resposta.data.data;
            }, function(resposta){
                console.log(resposta);
            });
        }
        initGroup();
        function initGroup(){
            //função mockada
            $http.get('https://pacific-stream-91568.herokuapp.com/group/1').then(
              function(resposta){
                $scope.group = resposta.data.data;
                console.log($scope.group);
              }, function(resposta){
                  console.log(resposta);
              });
          }
    }
})();