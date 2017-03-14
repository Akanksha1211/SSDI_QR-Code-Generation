mycontrollers.controller('Customerpage1Ctrl', function($scope, $ionicPopup, $state,  $ionicModal, $http) {
    
    console.log("sdjaoi");
	
	$scope.orderPizza=function(){
	
		$state.go('cust-home',{userid : '1234'});
		
	}
});