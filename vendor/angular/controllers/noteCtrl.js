  app.controller('noteCtrl', function($scope, $http, $routeParams, $location) {
      CKEDITOR.replace('ckEditarNota');

      //////TRAE UNA SOLA NOTA POR EL ID/////////////
      $scope.getNota = function() {
          $scope.editnote = {};
          $http({
              method: 'GET',
              url: 'api/getNota.php',
              params: {
                  id: $routeParams.id
              }
          }).then(successCallback, errorCallback);

          function successCallback(response) {
              $scope.editnote = response.data;
              $scope.title = 'Editar Nota: ' + $scope.editnote.header;
              $scope.msgtxt = 'Actualizar';
              console.log(response.data.body);
              console.log($scope.editnote.body);
             
             // CKEDITOR.instances.ckEditarNota.setData(response.data.body);
          }

          function errorCallback(error) {
              alert(response.data);
          }
      }

      $scope.getNota();
      $scope.updateNota = function() {
          $scope.editnote.body = CKEDITOR.instances.ckEditarNota.getData();
          console.log($scope.editnote.body);
          var formData = new FormData();
          for (var key in $scope.editnote) {
              formData.append(key, $scope.editnote[key]);
          }
          //console.log(formData);
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
      }
  });