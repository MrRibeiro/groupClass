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
            controller: MenuLeftController,
            controllerAs: 'vm',
            bindToController: true
        };
        return directive;
        
        /** @ngInject */
        function MenuLeftController(moment) {
            var vm = this;

        }
    }
})();