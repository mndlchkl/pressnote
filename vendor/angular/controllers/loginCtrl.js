 app.controller('loginCtrl', ['$scope', '$http', '$location', '$rootScope', function($scope, $http, $location, $rootScope) {
     $scope.title = 'Login';
   /*  $scope.submit = function(){
       if ($scope.login.username=="admin" && $scope.login.pass=="admin") {
              $rootScope.loggedIn=true;
              $location.path("/home");
          }else{
            alert('nope');
          }

    } */
     $scope.submit = function() {
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
                 $rootScope.loggedIn = true;
                  $location.path("/home");
                /*
                 console.log(response.data);
                 if (response.data == 1) {
                     $rootScope.loggedIn = true;
                     $location.path("/home");
                 } else {
                     alert('nope');
                 }
                 */
                 //  $scope.login = '';
                 //  location.reload();
             }

             function errorCallback(error) {
                 alert(response.data);
             }
         }
     } 
 }]);