'use strict';

angular
	.module('CS.patientsList', ['ngRoute'])
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
	vm.patients = patientService.lastQuery() || {};
	vm.getPatients = getPatients;

	function getPatients() {
		vm.patients = patientService.getPatients();
		window.alert(patientService.lastQuery());
	}
};