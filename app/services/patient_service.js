angular
	.module('CS')
	.factory('patientService', patientService);


function patientService() {
	return {
		getPatients:getPatients
	}

	function getPatients() {
		var patients = [
			{
				accn: "ZA12345678",
				fname:"john",
				lname:"doe",
				dob:"01/01/1980"
			},
			{
				accn: "ZA23456789",
				fname:"jane",
				lname:"doe",
				dob:"02/02/1980"
			},
			{
				accn:"ZA34567890",
				fname:"john",
				lname:"smith",
				dob:"03/03/1980"
			},
		];

		return patients;
	}
}