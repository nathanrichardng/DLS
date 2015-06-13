'use strict';

angular
	.module('CS.patientsList', ['ngRoute', 'cfp.hotkeys'])
	.config(config)
	.controller('patientsListCtrl', patientsListCtrl);

config.$inject= ['$routeProvider'];
patientsListCtrl.$inject = ['hotkeys', 'patientService'];

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

function patientsListCtrl(hotkeys, patientService) {
	var vm = this;
	vm.table = true;
	vm.patients = patientService.getPatients();
	console.log(vm.patients);
	
	hotkeys.add({
		combo: 'f1',
		description: 'test',
		callback: toggleTable
	});

	function toggleTable(event) {
		event.preventDefault();
		vm.table = !vm.table;
	}

	function addPatient(event) {	
		event.preventDefault();
		var newPatient = {
			accn:"ZA45678901",
			fname:"faye",
			lname: "knayme",
			dob: "1/2/1979"
		}
		vm.patients.push(newPatient);
	}
};