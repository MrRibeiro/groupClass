(function() {
  'use strict';

  angular
    .module('ifsocial')
    .controller('HomeController', HomeController);

  /** @ngInject */
  function HomeController($timeout, webDevTec, toastr, $http, $scope) {
    var vm = this;

    vm.awesomeThings = [];
    vm.classAnimation = '';
    vm.creationDate = 1513169061597;
    vm.showToastr = showToastr;
    $scope.dataMsg = '';
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

    function dataHoje() {
      var data = new Date();
      var dia = data.getDate();
      var mes = data.getMonth() + 1;
      if (mes < 10) {
         mes = "0" + mes;
      }
      var ano = data.getFullYear();
      var horas = new Date().getHours();
      if (horas < 10) {
          horas = "0" + horas;
      }
      var minutos = new Date().getMinutes();
      if (minutos < 10) {
          minutos = "0" + minutos;
      }
      var result = dia+"/"+mes+"/"+ano+" - "+horas + "h" + minutos;
      return result;
    }
    dataHoje();
  

    $scope.publicar = function() {
      let config = {
        text: $scope.text,
        creation: dataHoje(),
        creator:  {
          "id": 3
        }
      }
      $http.post('https://pacific-stream-91568.herokuapp.com/post/new', config).then(
        function(resposta){
          $("#text-post").val("");
          $scope.dataMsg = resposta.data.data.message;
          initPosts();
        }, function(resposta){
            console.log(resposta);
        });
    }

    function showToastr() {
      toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
      vm.classAnimation = '';
    }

    function getWebDevTec() {
      vm.awesomeThings = webDevTec.getTec();

      angular.forEach(vm.awesomeThings, function(awesomeThing) {
        awesomeThing.rank = Math.random();
      });
    }
  }
})();
