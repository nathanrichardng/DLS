'use strict';

// Declare app level module which depends on views, and components
angular.module('CS', [
  'ngRoute',
  'cfp.hotkeys',
  'myApp.view1',
  'myApp.view2',
  'CS.home',
  'CS.patientsList',
  'myApp.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/home'});
}]);
