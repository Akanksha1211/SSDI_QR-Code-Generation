myangular.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
/*    .state('tab', {
    url: "/tab",
    abstract: true,
    templateUrl: "templates/tabs.html"
  })*/

  // Each tab has its own nav history stack:
  
    .state('login', {
      url: '/login',
      templateUrl: 'templates/login.html',
      controller: 'LoginCtrl'
  })
   .state('page1_cust', {
    url: '/page1_cust',
        templateUrl: 'templates/page1_cust.html',
        controller: 'Customerpage1Ctrl'
  })


  
  .state('dash', {
    url: '/dash',
        templateUrl: 'templates/tab-dash.html',
        controller: 'DashCtrl'
  })
  
  .state('account', {
    url: '/account',
        templateUrl: 'templates/tab-account.html',
        controller: 'AccountCtrl'
  })

  .state('maccount', {
    url: '/maccount',
        templateUrl: 'templates/merch-account.html',
        controller: 'MerchAccountCtrl'
  })
 
  .state('invoice', {
      url: '/invoice:userid',
      templateUrl: 'templates/invoice.html',
      controller: 'InvoiceCtrl'
  })

  .state('conf_invoice', {
      url: '/cinvoice:userid',
      templateUrl: 'templates/conf-invoice.html',
      controller: 'ConfInvoiceCtrl'
  })

  .state('mqr', {
      url: '/mqr:orderid',
      templateUrl: 'templates/merch-qr.html',
      controller: 'MerchQRCtrl'
  })

   .state('cust-home', {
    url: '/chome:userid',
        templateUrl: 'templates/cust-home.html',
        controller: 'CustCtrl'
  })

  .state('cust_invoice', {
    url: '/custInvHome:userid/amount:amount/orderid:orderid',
    
        templateUrl: 'templates/cust-invoice.html',
        controller: 'CustInvCtrl'
     
  });



  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login');

});
