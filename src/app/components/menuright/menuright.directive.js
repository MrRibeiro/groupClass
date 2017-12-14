(function() {
    'use strict';
  
    angular
      .module('ifsocial')
      .directive('menuRight', menuRight);
  
    /** @ngInject */
    function menuRight() {
        var directive = {
            restrict: 'E',
            templateUrl: 'app/components/menuRight/menuRight.html',
            scope: {
                objeto: '='
            },
            controller: MenuRightController,
            controllerAs: 'vm',
            bindToController: true
        };
        return directive;
        
        /** @ngInject */
        function MenuRightController(moment) {
            var vm = this;
            console.log(vm);
        }
    }
})();