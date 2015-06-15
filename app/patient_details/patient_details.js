'use strict';

angular
	.module('CS.patientDetails', ['ngRoute'])
	.config(config)
	.controller('patientDetailsCtrl', patientDetailsCtrl);

config.$inject= ['$routeProvider'];
patientDetailsCtrl.$inject = ['$routeParams', 'patientService'];

/////////////////////////////////
//CONFIG
////////////////////////////////

function config ($routeProvider) {
  $routeProvider.when('/patient-details/:accn', {
    templateUrl: 'patient_details/patient_details.html',
    controller: 'patientDetailsCtrl',
    controllerAs: 'vm'
  });
}

function patientDetailsCtrl($routeParams, patientService) {
	var vm = this;
	vm.patient = patientService.getPatient($routeParams.accn);
};