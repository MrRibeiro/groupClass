(function() {
  'use strict';

  angular
    .module('ifsocial')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
