mycontrollers.controller('CustInvCtrl', function($scope, $http, $state, $stateParams, $ionicPopup, $timeout) {

	$scope.value = $stateParams.amount;
	
		 console.log($stateParams.userid);
		 console.log($stateParams.amount);
		 
		 $scope.logout = function() {
		 		 $state.go('login');
		 }


	$scope.Generate= function(){ 	 
         var qrcode = new QRCode("qrcode");    
         var TBCode1 = $stateParams.userid;  
		 var TBcode2 = $stateParams.orderid;
		 var TBcode3 = $stateParams.amount;
		 
		 var qr_code= TBCode1+TBcode3+TBcode2;
        qrcode.makeCode(qr_code);    
       }   

	
});