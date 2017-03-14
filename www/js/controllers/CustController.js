mycontrollers.controller('CustCtrl', function($scope, $http, $cordovaBarcodeScanner, $state, $stateParams, InvoiceService) {
		 console.log($stateParams.userid);

		 var count = 0;
		 $scope.logout = function() {
		 		 $state.go('login');
		 }

		 $scope.devList = [
			{ text: "Yellow onion", checked: false ,  id:1, amount:10},
			{ text: "Sun dried tomato", checked: false,  id:2, amount:12},
			{ text: "Pineapple", checked: false,  id:3, amount:14},
			{ text: "Mushroom", checked: false,  id:4, amount:15 },
			{ text: "Bell Pepper", checked: false,  id:4, amount:17},
			{ text: "Spinach", checked: false,  id:4, amount:19 }
			
  ];
		 var selection=[];
		// toggle selection for a given employee by name
		$scope.toggleSelection = function toggleSelection(utext,amount) {
	    var idx = selection.indexOf(utext);

	    // is currently selected
	    if (idx > -1) {
	      selection.splice(idx, 1);
		  count=count-amount;
	    }

	    // is newly selected///
	    else {
	    selection.push(utext);
		count=count+amount;
	    }
	  };
	 console.log(selection);
	 console.log(count);
	  
		 $scope.order = function(){
			var randomnumber=Math.floor(Math.random()*11);
			 console.log(randomnumber);
			$state.go('cust_invoice',{userid : '1234', amount : count, orderid : randomnumber});
			
		 }
	
});