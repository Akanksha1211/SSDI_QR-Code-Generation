mycontroller.controller('AppCtrl', function($rootScope,$scope,$ionicModal,$ionicSlideBoxDelegate,$translate,$timeout,$location,$stateParams,WorkoutService) {

  $scope.clickHome = function(){
    var tempURL = $rootScope.$viewHistory.currentView.url.substring(0,9);
    if (tempURL == '#/app/cust') {
      $location.path('/app/custom');
    } else if (tempURL !== '/app/home'){
      $location.path('/app/home');
    }
  }
  $scope.isItemActive = function(shortUrl) {
    var tempURL = '/app/' + shortUrl;
    return (tempURL == $location.$$path.substring(0,9));
  };
  $scope.showWelcome = function(){
    $ionicModal.fromTemplateUrl('welcome.html', function(modal) {
                                  $scope.welcomeModal = modal;
                                  }, {
                                  scope:$scope,
                                  animation: 'slide-in-up',
                                  focusFirstInput: false,
                                  backdropClickToClose: false
                                  });
    $scope.slideChanged = function(index) {
      $scope.slideIndex = index;
    };
    $scope.next = function() {
      $ionicSlideBoxDelegate.next();
    };
    $scope.previous = function() {
      $ionicSlideBoxDelegate.previous();
    };
    $scope.closeOpenNexercise = function(){
      $scope.closeModal();
    }
    $scope.openModal = function() {
      $scope.welcomeModal.show();
    };
    $scope.closeModal = function() {
      $scope.welcomeModal.hide();
    };
    $scope.$on('$destroy', function() {
      $scope.welcomeModal.remove();
    });
    $timeout(function(){
             $scope.openModal();
             }, 0);
  }
  