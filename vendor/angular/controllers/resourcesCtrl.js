 app.controller('resourcesCtrl', ['$scope', '$http', function($scope, $http) {
     $scope.title = 'Subir archivos de imagen';
     $scope.file={};
     $scope.file.pic=undefined;
     $scope.file.desc=undefined;

     /******ELIMINAR IMAGEN DEL SERVIDOR*******************/
     $scope.deleteFile = function() {
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
     /******SUBIR UNA IMAGEN AL SERVIDOR*******************/
     $scope.upload = function() {
            msgVal = '';
            ($scope.file.desc == undefined) ? msgVal += ' Descripción de la imagen,': ''; //
            ($scope.file.pic == undefined) ? msgVal += ' imagen,': '';
             if (msgVal == '')  {   
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
                  $scope.file.pic=undefined;
                    $scope.file.desc=undefined;
                 $scope.listarRecursos();
             } else {
                 alert(response.data);
             }
         }

         function errorCallback(error) {
             alert(response.data);
         }
     }else {
              alert("Falta " + msgVal + " por ingresar!");
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
             //console.log($scope.recursos);
         }

         function errorCallback(error) {
             alert(response.data);
         }
     }
     $scope.listarRecursos();
 }]);