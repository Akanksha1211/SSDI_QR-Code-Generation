myservices.factory("POSModel", function($resource) {
	return $resource('', {}, 
			{
		'get' : {
			method : 'GET'
		},
		'save' : {
			method : 'POST',
			headers: [{'Content-Type': 'application/json'}],
			url: 'http://directpay.eu-gb.mybluemix.net/api/userdetails' 
		},
		'query' : {
			method : 'GET',
			isArray : false
		},
		'remove' : {
			method : 'DELETE'
		},
		'delete' : {
			method : 'DELETE'
		}
	});
}); 