'use strict';

// Declare app level module which depends on views, and components
angular
	.module('CS', [
	  'ngRoute',
	  'cfp.hotkeys',
	  'myApp.view1',
	  'myApp.view2',
	  'CS.home',
	  'CS.patientsList',
	  'myApp.version'
	])
	.config(config)
	.controller('appCtrl', appCtrl);

config.$inject = ['$routeProvider'];
appCtrl.$inject = ['hotkeys', 'focus'];

function config($routeProvider) {
	$routeProvider.otherwise({redirectTo: '/home'});
}

function appCtrl(hotkeys, focus) {
	var vm = this;
	vm.note = {
		text: "Write your notes here.",
		shown: false
	}
	hotkeys.add({
		combo: 'f1',
		allowIn: ['TEXTAREA', 'input'],
		description: 'Toggles notepad',
		callback: toggleNotepad
	});

	function toggleNotepad(e) {
		e.preventDefault();
		vm.note.shown = !vm.note.shown;
		if (vm.note.shown)
			focus('noteShown');
		else
			focus('main');
	}
}