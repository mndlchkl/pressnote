  app.controller('crearActividadCtrl', ['$scope', '$http', '$location','$filter', function($scope, $http, $location, $filter) {
      $scope.title = 'Editar Nueva actividad';
      $scope.msgtxt = 'Publicar';
      $scope.actividad = {};
      $scope.actividad.datetimestart='';
      moment.locale('es') ;
      $scope.actividad.datetimestart= new Date();
      $scope.actividad.timetimestart= new Date();
      $scope.actividad.datetimeend= new Date();
      $scope.actividad.timetimeend= new Date();

      
      $scope.submitactividad = function() {
          var datefilter = $filter('date');   
          msgVal = '';
          ($scope.actividad.name == undefined) ? msgVal += ' nombre,': ''; //
          ($scope.actividad.place == undefined) ? msgVal += ' lugar,': ''; //
          ($scope.actividad.datetimestart == undefined) ? msgVal += 'fecha inicio,': ''; //
          ($scope.actividad.timetimestart == undefined) ? msgVal += 'hora inicio,': ''; //  
          ($scope.actividad.imgurl == undefined) ? msgVal += ' Url imagen  ,': ''; // 

          if (msgVal == '') {
              ($scope.actividad.datetimeend == undefined) ? $scope.actividad.datetimeend = $scope.actividad.datetimestart: '';
              $scope.msgtxt = 'Procesando, espere...';
              $scope.actividad.datetimestart = datefilter($scope.actividad.datetimestart, 'yyyy-MM-dd'); // text = Hello
              $scope.actividad.timetimestart = datefilter($scope.actividad.timetimestart, 'H:m:s');
              $scope.actividad.datetimeend= datefilter($scope.actividad.datetimestart, 'yyyy-MM-dd');
              $scope.actividad.timetimeend= datefilter($scope.actividad.timetimestart, 'H:m:s');
              var formData = new FormData();
              for (var key in $scope.actividad) {
                  formData.append(key, $scope.actividad[key]);
              }
              $http({
                  transformRequest: angular.identity,
                  method: 'POST',
                  url: 'api/create_event.php',
                  data: formData,
                  headers: {
                      'Content-Type': undefined
                  },
              }).then(successCallback, errorCallback);

              function successCallback(response) {
                  alert(response.data);
                $scope.actividad = {};
                  $scope.msgtxt = 'Publicar';
                  $location.path('/actividades');
              }

              function errorCallback(error) {
                  alert(response.data);
                  $scope.msgtxt = 'Publicar';
              }
          } else {
              alert("Falta " + msgVal + " por ingresar!");
          }
      };
  }]);