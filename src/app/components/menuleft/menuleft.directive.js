(function() {
    'use strict';
  
    angular
      .module('ifsocial')
      .directive('menuLeft', menuLeft);
  
    /** @ngInject */
    function menuLeft() {
        var directive = {
            restrict: 'E',
            templateUrl: 'app/components/menuleft/menuleft.html',
            scope: {
                objeto: '='
            },
            controller: MenuLeftController,
            controllerAs: 'vm',
            bindToController: true
        };
        return directive;
        
        /** @ngInject */
        function MenuLeftController(moment, $location) {
            var vm = this;

            var url = $location.url();
            var telaAtual = url.replace("/", "");
            console.log(telaAtual);
            init();
            function init(){
                $(".menu-left").removeClass("active");
                $("#"+telaAtual).addClass("active");
            }
           
        }
    }
})();