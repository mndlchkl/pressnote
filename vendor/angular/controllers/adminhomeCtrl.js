app.controller('adminhomeCtrl', ['$scope', '$http', function($scope, $http) {
      $scope.title = 'Administrar contenido del home.';
      
      $scope.listarHome = function() {
          $http({
              method: 'GET',
              url: 'api/listHome.php',
          }).then(successCallback, errorCallback);

          function successCallback(response) {
              // console.log(response.data);
              $scope.home = {};
              $scope.home.ini1 = response.data.parrafo1;
              $scope.home.ini2 = response.data.parrafo2;
              $scope.home.url1 = response.data.url1;
              $scope.home.url2 = response.data.url2;
                  $scope.home.titulo1 = response.data.titulo1;
              $scope.home.titulo2 = response.data.titulo2;
          }

          function errorCallback(error) {
              alert(response.data);
          }
      }
      /************************/
      $scope.listarHome();

      /*********actualizar HOME ECPM***************/
      $scope.updateHome = function() {
          var formData = new FormData();
          for (var key in $scope.home) {
             //  console.log(key, $scope.home[key]);
              formData.append(key, $scope.home[key]);
          }
          $http({
              transformRequest: angular.identity,
              method: 'POST',
              url: 'api/updateHome.php',
              data: formData,
              headers: {
                  'Content-Type': undefined
              },
          }).then(successCallback, errorCallback);

          function successCallback(response) {
              if (response.data == 1) {
                  alert("Actualizado.");
              } else {
                  alert(response.data);
              }
              $scope.listarHome();
             
          }

          function errorCallback(error) {
              alert(response.data);
             
          }

     }

     }]);