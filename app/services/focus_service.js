angular
	.module('CS')
	.factory('focus', focus);

focus.$inject = ['$rootScope', '$timeout']

function focus($rootScope, $timeout) {
  return function(name) {
    $timeout(function (){
      $rootScope.$broadcast('focusOn', name);
    });
  }
};