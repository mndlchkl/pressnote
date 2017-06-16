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
              // CKEDITOR.instances.ckEditarNota.setData(response.data.body);
              $scope.title = 'Editar Nota: ' + $scope.editnote.header;
              $scope.msgtxt = 'Actualizar';
            //  console.log(response.data.body);
            //  console.log($scope.editnote.body);
        
          }

          function errorCallback(error) {
              alert(response.data);
          }
      }
      $scope.getNota();
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
 
function deleteAllCookies() {
    var cookies = document.cookie.split(";");

    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var eqPos = cookie.indexOf("=");
        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
}



 });