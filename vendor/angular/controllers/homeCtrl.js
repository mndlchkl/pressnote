  
  app.controller('homeCtrl',[ '$scope',function($scope){
      $scope.title='Inicio';
 
 }]);


  app.controller('adminhomeCtrl',[ '$scope','$http', function($scope,$http){
      $scope.title='Administrar contenido del home.';

            $scope.submit = function() {
        	var formData = new FormData();
            for (var key in $scope.home) {
                console.log(key, $scope.home[key]);
                formData.append(key, $scope.home[key]);
            }
/*
              $http({
                  transformRequest: angular.identity,
                  method: 'POST',
                  url: 'api/create_note.php',
                  data:  formData  ,
                  headers : {'Content-Type':undefined},
              }).then(successCallback, errorCallback);

              function successCallback(response) {
                  alert(response.data);
                  $scope.note = {}; // $scope.note = '';
                //  $location.path("/editar");
                   window.scrollTo(0, 0);
              }

              function errorCallback(error) {
                  alert(response.data);
                   window.scrollTo(0, 0);
              } */

        }
 
 }]);