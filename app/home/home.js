'use strict';

angular
	.module('CS.home', ['ngRoute', 'cfp.hotkeys'])
	.config(config)
	.controller('homeController', homeController);

config.$inject= ['$routeProvider'];

/////////////////////////////////
//CONFIG
////////////////////////////////

function config ($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'home/home.html',
    controller: 'homeController',
    controllerAs: 'vm'
  });
}

function homeController(hotkeys) {
	var vm = this;
	vm.message = "Welcome Home!";
};