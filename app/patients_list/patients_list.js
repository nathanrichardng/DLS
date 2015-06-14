'use strict';

angular
	.module('CS.patientsList', ['ngRoute', 'cfp.hotkeys'])
	.config(config)
	.controller('patientsListCtrl', patientsListCtrl);

config.$inject= ['$routeProvider'];
patientsListCtrl.$inject = ['patientService'];

/////////////////////////////////
//CONFIG
////////////////////////////////

function config ($routeProvider) {
  $routeProvider.when('/patients-list', {
    templateUrl: 'patients_list/patients_list.html',
    controller: 'patientsListCtrl',
    controllerAs: 'vm'
  });
}

function patientsListCtrl(patientService) {
	var vm = this;
	vm.table = true;
	vm.patients = patientService.getPatients();
	console.log(vm.patients);
};