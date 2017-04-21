  
  app.controller('loginCtrl',function($scope,$location,$rootScope){
        $scope.title='Login';
     $scope.submit = function(){
       if ($scope.username=="admin" && $scope.pass=="admin") {
              $rootScope.loggedIn=true;
              $location.path("/home");
          }else{
            alert('nope');
          }

    }
 });