(function() {
    'use strict';
  
    angular
      .module('ifsocial')
      .directive('msgServidor', msgServidor);
  
    /** @ngInject */
    function msgServidor() {
        var directive = {
            restrict: 'E',
            templateUrl: 'app/components/msgservidor/msgservidor.html',
            scope: {
                objeto: '='
            },
            controller: MsgServidorController,
            controllerAs: 'vm',
            bindToController: true
        };
        return directive;
        
        /** @ngInject */
        function MsgServidorController(moment, $scope) {
            var vm = this;

            $scope.hidemsg = function(){
                $("#msgsServidor").hide();
            }

        }
    }
})();