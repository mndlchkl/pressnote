 app.controller('loginCtrl', ['$scope', '$http', '$location', '$rootScope', function($scope, $http, $location, $rootScope) {
     $scope.title = 'Login';

     $scope.submit = function() {
        //console.log('submit login db.');
         if (($scope.login.username != undefined) && ($scope.login.pass != undefined)) {
            
             $http({
                 method: 'POST',
                 url: 'api/login.php',
                 data: $.param({
                     "login": JSON.stringify($scope.login)
                 }),
                 headers: {
                     'Content-Type': 'application/x-www-form-urlencoded'
                 },
             }).then(successCallback, errorCallback);

             function successCallback(response) {
                 // console.log(response.data);
                   $rootScope.loggedIn = true;
                     $location.path("/home");
                 if (response.data == 1) {
                     $rootScope.loggedIn = true;
                     $location.path("/home");
                 } else {
                     alert('nope');
                 }
 
             }

             function errorCallback(error) {
                 alert(response.data);
             }
         }
     } 

       /*
   $scope.submit = function(){
       if ($scope.login.username=="admin" && $scope.login.pass=="admin") {
              $rootScope.loggedIn=true;
              $location.path("/home");
          }else{
            alert('nope');
          }

    }  */
 }]);