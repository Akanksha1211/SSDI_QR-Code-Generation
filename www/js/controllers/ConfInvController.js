mycontrollers.controller('ConfInvoiceCtrl', function($scope,$state, $http,  $ionicSideMenuDelegate, $stateParams, InvoiceService, $cordovaBarcodeScanner) {

		 $scope.logout = function() {
		 		 $state.go('login');
		 };
		 
	$scope.Confirm = function(){
		alert("Inside Confirm");
	}
   // $scope.invoice = InvoiceService.selectedInvoice;

   'ngCordova'
    if($scope.invoice === undefined){
      $state.go('invoice',{userid: $stateParams.userid});
    }

    console.log($scope.invoice);

    $scope.final_invoice = [];
        angular.forEach($scope.invoice, function(item, key){
          if(item.qty === undefined){      
              //do nothing     
            }else{
              $scope.final_invoice.push(item);
            }
          
        });

    $scope.calculate_grand_total = function() {
        localStorage["invoice"] = JSON.stringify($scope.invoice);
                var total = 0.00;
        angular.forEach($scope.final_invoice, function(item, key){
          if(item.qty === undefined){      
              total += 0;         
            }else{
              total += (item.qty * item.price);
            }
          
        });
        return total;
    } 

    $scope.postorder = {};

    $scope.createOrder = function() {

        $scope.postorder.totalAmount = $scope.calculate_grand_total();

        $scope.postorder.itemList = [];

        localStorage["invoice"] = JSON.stringify($scope.invoice);
        angular.forEach($scope.final_invoice, function(item, key){

         var temp_Item = {"itemName": item.shortName,
                    "quantity": item.qty,
                    "itemPrice": item.price}; 
           $scope.postorder.itemList.push(temp_Item);          
        });

        console.log($scope.postorder);
        
        $http({
          method: 'POST',
          url: 'http://directpay.eu-gb.mybluemix.net/api/order/'+$stateParams.userid,
          data: $scope.postorder,    
          headers: {'Content-Type': 'application/json'}
        }).then(function(resp) {
            console.log('Success in post', resp);
            $state.go("mqr",{orderid: resp.data.id});
    // For JSON responses, resp.data contains the result
        }, function(err) {
            console.error('ERR', err);
    // err.status will contain the status code
        })

    } 
    
    scope.final_invoice = [
                           {shortName:'John', price:25, gender:'boy'},
                           {shortName:'Jessie', price:30, gender:'girl'},
                           {shortName:'Johanna', price:28, gender:'girl'},
                           {shortName:'Joy', price:15, gender:'girl'},
                           {shortName:'Mary', price:28, gender:'girl'},
                           {shortName:'Peter', price:95, gender:'boy'},
                           {shortName:'Samantha', price:60, gender:'girl'}
                         ];


}	);