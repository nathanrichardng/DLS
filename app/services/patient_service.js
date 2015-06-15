angular
	.module('CS')
	.factory('patientService', patientService);


function patientService() {

	//change this to an array of objects later to better store query history and parameters
	var queryHistory = null;

	return {
		getPatients:getPatients,
		getPatient: getPatient,
		lastQuery: lastQuery
	}

	function lastQuery() {
		return queryHistory;
	}

	function getPatient(accn) {
		//stub. change to $HTTP request later
		return {
			accn: accn,
			fname:"john",
			lname:"doe",
			dob:"01/01/1980",
			coll:"05/29/2015"
		}
	}

	function getPatients() {
		//stub. change patients to $HTTP request later
		var patients = [
			{
				accn: "ZA12345678",
				fname:"john",
				lname:"doe",
				dob:"01/01/1980",
				coll:"05/29/2015"
			},
			{
				accn: "ZA23456789",
				fname:"jane",
				lname:"doe",
				dob:"02/02/1980",
				coll:"2/3/2015"
			},
			{
				accn:"ZA34567890",
				fname:"john",
				lname:"smith",
				dob:"03/03/1980",
				coll: "4/5/2015"
			},
			{
				accn: "ZA12345678",
				fname:"john",
				lname:"doe",
				dob:"01/01/1980",
				coll:"05/29/2015"
			},
			{
				accn: "ZA23456789",
				fname:"jane",
				lname:"doe",
				dob:"02/02/1980",
				coll:"2/3/2015"
			},
			{
				accn:"ZA34567890",
				fname:"john",
				lname:"smith",
				dob:"03/03/1980",
				coll: "4/5/2015"
			},
			{
				accn: "ZA12345678",
				fname:"john",
				lname:"doe",
				dob:"01/01/1980",
				coll:"05/29/2015"
			},
			{
				accn: "ZA23456789",
				fname:"jane",
				lname:"doe",
				dob:"02/02/1980",
				coll:"2/3/2015"
			},
			{
				accn:"ZA34567890",
				fname:"john",
				lname:"smith",
				dob:"03/03/1980",
				coll: "4/5/2015"
			},
			{
				accn: "ZA12345678",
				fname:"john",
				lname:"doe",
				dob:"01/01/1980",
				coll:"05/29/2015"
			},
			{
				accn: "ZA23456789",
				fname:"jane",
				lname:"doe",
				dob:"02/02/1980",
				coll:"2/3/2015"
			},
			{
				accn:"ZA34567890",
				fname:"john",
				lname:"smith",
				dob:"03/03/1980",
				coll: "4/5/2015"
			},
			{
				accn: "ZA12345678",
				fname:"john",
				lname:"doe",
				dob:"01/01/1980",
				coll:"05/29/2015"
			},
			{
				accn: "ZA23456789",
				fname:"jane",
				lname:"doe",
				dob:"02/02/1980",
				coll:"2/3/2015"
			},
			{
				accn:"ZA34567890",
				fname:"john",
				lname:"smith",
				dob:"03/03/1980",
				coll: "4/5/2015"
			}
		];

		queryHistory = patients;

		return patients;
	}
}