mycontrollers.controller('InvoiceCtrl', function($scope,$state, $cordovaBarcodeScanner,  $ionicPopup, $stateParams, $timeout ) {	
		 $scope.logout = function() {
		 		 $state.go('login');
		 };
		 
		 $scope.showMe = false;

		$scope.Confirm= function(){

        $cordovaBarcodeScanner.scan().then(function(barcodeData) {
		  
		  $scope.showMe = !$scope.showMe; 
		var str =  barcodeData.text;
	
		 $scope.userid = str.charAt(0)+str.charAt(1)+str.charAt(2)+str.charAt(3);
		 $scope.amount = str.charAt(4) + str.charAt(5);
		 $scope.orderid= str.charAt(6) + str.charAt(7);
		 
		
		  
        // Success! Barcode data is here
		
      }, function(error) {
        // An error occurred
      });
		
	}
		
		
		
	$scope.showPopup = function() {
		//alert("Inside popup");
  // An elaborate, custom popup
		var myPopup = $ionicPopup.show({
    template: '<input type="number" ng-model="data.userpin" id="pin">',
    title: 'Enter security PIN',
    scope: $scope,
    buttons: [
      { text: 'Cancel' },
      {
        text: '<b>Confirm</b>',
        type: 'button-positive',
        onTap: function(e) {
          if (!pin) {
            //don't allow the user to close unless he enters wifi password
            e.preventDefault();
          } else {
			  //alert(document.getElementById("pin").value);
			 if(document.getElementById("pin").value==1234) {
            alert("Payment Done");
			 }else{
				alert("Invalid pin") 
			 }

          }
        }
      }
    ]
  });
  
  
  
  myPopup.then(function(res) {
    console.log('Tapped!', res);
  });
  $timeout(function() {
     myPopup.close(); //close the popup after 3 seconds for some reason
  }, 30000);
 };

}	);