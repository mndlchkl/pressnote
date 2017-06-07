 
  app.controller('resourcesCtrl', ['$scope', '$http', function($scope, $http) {
      $scope.title = 'Administrar recursos en el servidor.';
      
      /******SUBIR UNA IMAGEN AL SERVIDOR*******************/
      $scope.upload = function() {
          var formData = new FormData();
          for (var key in $scope.file) {
              formData.append(key, $scope.file[key]);
          }
          $http({
              transformRequest: angular.identity,
              method: 'POST',
              url: 'api/uploadFile.php',
              data: formData,
              headers: {
                  'Content-Type': undefined
              },
          }).then(successCallback, errorCallback);

          function successCallback(response) {
              if (response.data == 1) {
                $scope.file.desc="";
                 $scope.file.pic="";
                $scope.listarRecursos();
                }
               else {
                  alert(response.data);
              }
          }

          function errorCallback(error) {
              alert(response.data);
          }
      }
      /********************************************************/
     
        $scope.listarRecursos = function() {
        var recursos = {};
        $http({
            method: 'GET',
            url: 'api/listResources.php',
        }).then(successCallback, errorCallback);

        function successCallback(response) {
            $scope.recursos = response.data;
            for (var key in recursos) {}
              console.log($scope.recursos);
        }

        function errorCallback(error) {
            alert(response.data);
        }
      }
         $scope.listarRecursos();
  }]);