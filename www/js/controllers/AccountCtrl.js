mycontrollers.controller('AccountCtrl', ['$scope','$http',function($scope,$http) {
	$scope.input = {};
console.log($scope.input.emailId);

$scope.add= function(){
    $scope.input.userType = 'CUSTOMER';
$http({
    method: 'POST',
    url: 'http://directpay.eu-gb.mybluemix.net/api/userdetails',
    data: $scope.input,    
    headers: {'Content-Type': 'application/json'}
}).then(function(resp) {
    console.log('Success in post', resp);
    // For JSON responses, resp.data contains the result
  }, function(err) {
    console.error('ERR', err);
    // err.status will contain the status code
  })
};	

}]); 