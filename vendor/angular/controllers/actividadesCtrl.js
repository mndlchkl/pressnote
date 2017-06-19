  app.controller('actividadesCtrl', function($scope, $http) {
      $scope.title = 'Historial de actividades';
    
      $scope.listar = function() {
          var actividades = {};
          $http({
              method: 'GET',
              url: 'api/listActividades.php',
          }).then(successCallback, errorCallback);

          function successCallback(response) {
              $scope.actividades = response.data;
               console.log($scope.actividades);
              for (var key in actividades) {}
           
              //console.log(actividades);
          }

          function errorCallback(error) {
              alert(response.data);
          }
      }
        $scope.listar();

      /*PUBLICAR O DESPUBLICAR NOTA*/
      $scope.changestatus = function() {
          var updown = {
              "actividadId": this.a.id,
              "status": (this.a.up == 1) ? 0 : 1,
          }
          var serialUpdown = $.param({
              "updown": JSON.stringify(updown)
          });
          $http({
              headers: {
                  'Content-Type': 'application/x-www-form-urlencoded'
              },
              method: 'POST',
              url: 'api/updown_actividad.php',
              data: serialUpdown
          }).then(successCallback, errorCallback);

          function successCallback(response) {
              // console.log(response.data);
              $scope.listar();
          }

          function errorCallback(error) {
              alert(response.data);
              $scope.listar();
          }
      }

        /******ELIMINAR IMAGEN DEL SERVIDOR*******************/
     $scope.deleteActividad = function() {
         var r = confirm('Seguro de eliminar el archivo? asegurese de que no este siendo usado en alguna nota o inicio de la pagina');
         if (r == true) {
             var request;
             var rec = $.param({
                 "rec": JSON.stringify(this.rec)
             });
             if (request) {
                 request.abort();
             }
             $http({
                 headers: {
                     'Content-Type': 'application/x-www-form-urlencoded'
                 },
                 method: 'POST',
                 url: 'api/deleteFile.php',
                 data: rec
             }).then(successCallback, errorCallback);

             function successCallback(response) {
                 if (response.data == 1) {} else {
                     alert(response.data);
                 }
                 $scope.listarRecursos();
             }

             function errorCallback(error) {
                 console.log(error);
                 $scope.listarRecursos();
             }
         }
     }
 
       
  });