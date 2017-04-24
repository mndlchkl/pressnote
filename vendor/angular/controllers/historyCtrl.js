  app.controller('historyCtrl', function($scope, $http) {
      $scope.title = 'Historial de notas';
    
      $scope.listar = function() {
          var notas = {};
          $http({
              method: 'GET',
              url: 'api/listNotes.php',
          }).then(successCallback, errorCallback);

          function successCallback(response) {
              $scope.notas = response.data;
              for (var key in notas) {}
             // console.log($scope.notas);
              //console.log(notas);
          }

          function errorCallback(error) {
              alert(response.data);
          }
      }
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
              url: 'api/updown_note.php',
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
         $scope.listar();
  });