  app.controller('editActividadCtrl', function($scope, $http, $routeParams, $location) {
      
      //////TRAE UNA SOLA actividad POR EL ID/////////////
      $scope.getActividad = function() {
          $scope.actividad = {};
          $http({
              method: 'GET',
              url: 'api/getActividad.php',
              params: {
                  id: $routeParams.id
              }
          }).then(successCallback, errorCallback);

          function successCallback(response) {
            $scope.actividad = response.data;
              // CKEDITOR.instances.ckEditarNota.setData(response.data.body);
              $scope.title = 'Editar actividad: ' + $scope.actividad.name;
              $scope.msgtxt = 'Actualizar';
            //  console.log(response.data.body);
              console.log($scope.actividad.name);
             console.log($scope.actividad);
        
          }

          function errorCallback(error) {
              alert(response.data);
          }
      }
      $scope.getActividad();


      $scope.updateNota = function() {
            $scope.editnote.body = CKEDITOR.instances.ckEditarNota.getData();
          var formData = new FormData();
          if ($scope.editnote.body.trim() !== '') {
             console.log($scope.editnote.body);
              for (var key in $scope.editnote) {
                  formData.append(key, $scope.editnote[key]);
              }
              $http({
                  transformRequest: angular.identity,
                  method: 'POST',
                  url: 'api/updateNota.php',
                  data: formData,
                  headers: {
                      'Content-Type': undefined
                  },
              }).then(successCallback, errorCallback);

              function successCallback(response) {
                  if (response.data == 1) {
                      alert("Nota actualizada.");
                      $scope.editnote = {};
                      $location.path('/historial');
                  } else {
                      alert(response.data);
                  }
              }

              function errorCallback(error) {
                  alert(response.data);
              }
          } else {
              alert('Ocurrio un error en la actualización de la nota, recargar... ');
              location.reload();
               deleteAllCookies();
          }
      }
 



 });