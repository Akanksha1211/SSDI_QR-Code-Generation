mycontrollers.controller('LoginCtrl', function($scope, LoginService, $ionicPopup, $state,  $ionicModal, $http) {
    console.log("asdlkjasgdlkashd");

		$scope.data = {};
		$scope.userList='';
		//$scope.data.username='';
		
		$scope.moveOnMax = function(thisFieldId,nextFieldID) {

                    if(document.getElementById(thisFieldId).value == "" || isNaN(document.getElementById(thisFieldId).value)){
                        document.getElementById(thisFieldId).value = '';
                    } else{
                        if(thisFieldId == 'p4'){
                            $scope.login();
                        }else{
                         document.getElementById(nextFieldID).focus();
                        }
                    }
                    
		}
		    
	  
	    $scope.data.pin = ''+$scope.data.p1 + $scope.data.p2 + $scope.data.p3 + $scope.data.p4+'';
	   
	    $scope.login  = function(){
	    	console.log("Inside login");
			var abc= document.getElementById("username").value;
			
			//$state.go('cust-home',{userid : '1234'});
			//$state.go('invoice',{userid: '1234'});
			
	    	if(abc == "MERCHANT" || $scope.data.pin== '1234'){
        	console.log('Merchant');
             $state.go('invoice',{userid: '1234'});
        	 }
         else if(abc == "CUSTOMER" || $scope.data.pin== '1234' ){
         	console.log('Customer');
         	//$state.go('cust-home',{userid : '1234'});
			$state.go('page1_cust',{userid : '1234'});
         }
		 else{
			 alert("Invalid login");
		 }
	    }
	    
	    
	   
	    
	    
	    
	    
	    
	    
	    
	    
	    
	    
	    /*$http.get('JSON/alluserdetails.json').then(function(resp){
	    	
	    	$state.go('cust-home',{userid : '1234'});
	    	
	    //	$scope.userList=resp.userList;
	    	
	    	console.log('Success',userList);
	    	
	    	$scope.userList=resp.userList;
	    		 console.log('Success', resp);
	    		 console.log('Success userList',userList);
	    		  		
	    		  	angular.forEach(resp.userList, function(user){
	    		  		
	    		  		console.log('UserDetails',user.username);
	    		  		
	    		  		 if(user.userType == "MERCHANT"){
	 	   	        		idFound=true;
	 	   	        		 console.log('Merchant');
	                         $state.go('invoice',{userid: resp.data.id});
	 	   	        	 }
	 		            else if(user.userType == "CUSTOMER"){
	 		            	idFound=true;
	 		            	console.log('Customer');
	 		   	        	$state.go('cust-home',{userid: resp.data.id});
	 		            }
   		  		
	    });

    
    });*/


    
    $scope.register = function() {
    	var alertPopup = $ionicPopup.show({
            title: 'Select Role',
            buttons: [{ // Array[Object] (optional). Buttons to place in the popup footer.
                text: 'Customer',
                type: 'button-default',
                onTap: function(e) {
                  // e.preventDefault() will stop the popup from closing when tapped.
            	console.log('Customer');
            	 $state.go('account');
            	 return 'Customer';
                }
              }, {
                text: 'Merchant',
                type: 'button-positive',
                onTap: function(e) {
                  // Returning a value will cause the promise to resolve with the given value.
            	  console.log('Merchant');
            	  $state.go('dash');
                  //$state.go('mqr');
                  return 'Merchant';
                }
              }],template: ''
            //template: '<div class="bar bar-subheader"><div class="button-bar"><a class="button" ng-class="{\' button-positive\': isActive(\'b\')}" ng-click="setActive(\'b\')">Lunch</a><a class="button" ng-class="{\'button-positive\': isActive(\'l\')}" ng-click="setActive(\'l\')">Lunch</a><a class="button" ng-class="{\'button-positive\': isActive(\'d\')}" ng-click="setActive(\'d\')">Lunch</a></div></div>'
        });
    };
    
});