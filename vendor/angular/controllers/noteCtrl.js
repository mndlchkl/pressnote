  app.controller('noteCtrl', function($scope, $http, $routeParams) {
 
      $scope.listar = function() {
          var notas = {};
          $http({
              method: 'GET',
              url: 'api/getNota.php',
              params:{id : $routeParams.id}
          }).then(successCallback, errorCallback);

          function successCallback(response) {
              $scope.note = response.data;
              $scope.title = 'Editar Nota '+ $scope.note.header;
              for (var key in notas) {}
             // console.log($scope.notas);
             console.log($scope.note);
          }

          function errorCallback(error) {
              alert(response.data);
          }
      }
   
         $scope.listar();
  });