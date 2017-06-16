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
      $scope.changeup = function() {
          var updown = {
              "notaId": this.n.id,
              "status": (this.n.up == 1) ? 0 : 1,
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

      /*PUBLICAR O DESPUBLICAR NOTA*/
      $scope.destacar = function() {
          var ndata = {
              "notaId": this.n.id,
          }
          var serialUpdown = $.param({
              "ndata": JSON.stringify(ndata)
          });
          $http({
              headers: {
                  'Content-Type': 'application/x-www-form-urlencoded'
              },
              method: 'POST',
              url: 'api/destacarActividad.php',
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
       
  });