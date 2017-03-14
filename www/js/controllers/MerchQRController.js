mycontrollers.controller('MerchQRCtrl', function($scope,$http, $stateParams) {

        var qrcode = new QRCode(document.getElementById("qrcode"), {
    width : 200,
    height : 200
});

        function makeCode () {      
                qrcode.makeCode($stateParams.orderid);
        }

        makeCode();


}); 