  app.controller('EditController', ['$scope', '$http', '$location', function($scope, $http, $location) {
      $scope.title = 'Editar Nota';
      $scope.msgtxt='Publicar';
      $scope.note = {};
      $scope.submit = function() {
 
          msgVal = '';
          ($scope.note.header == undefined) ? msgVal += ' titulo,': ''; //
        //  ($scope.note.subheader == undefined) ? msgVal += ' subtitulo,': ''; //
          ($scope.note.body == undefined) ? msgVal += ' texto,': ''; //
          ($scope.note.pic == undefined) ? msgVal += ' imagen,': ''; //
          //  ($scope.note.link == undefined) ? msgVal += ' link,': ''; // 
            ($scope.note.author == undefined) ? msgVal += ' autor,': ''; // 
          if (msgVal == '') {
              $scope.msgtxt='Procesando, espere...';
              var formData = new FormData();
              for (var key in $scope.note) {
                  console.log(key, $scope.note[key]);
                  formData.append(key, $scope.note[key]);
              }
              $http({
                  transformRequest: angular.identity,
                  method: 'POST',
                  url: 'api/create_note.php',
                  data:  formData  ,
                  headers : {'Content-Type':undefined},
              }).then(successCallback, errorCallback);

              function successCallback(response) {
                  alert(response.data);
                  $scope.note = {}; // $scope.note = '';
                //  $location.path("/editar");
                   $scope.msgtxt='Publicar';
                   window.scrollTo(0, 0);
              }

              function errorCallback(error) {
                  alert(response.data);
                     $scope.msgtxt='Publicar';
                   window.scrollTo(0, 0);
              }
          } else {
              alert("Falta " + msgVal + " por ingresar!");
          }
      };
  }]);
  /**
    .controller('Insc_Ctrl',function($scope, $http, $templateCache){
          $scope.benef = {user:localStorage.getItem('user') }  ; 
          $scope.entidad = null;
          $scope.entidades = [];  
      $http({method: 'GET',url: 'php/Get_ent_insc.php'    
          }).success(function (result) {
          $scope.entidades = result.data;       
      }); 
        var method = 'POST';
        var url = 'php/POST_Inscribir.php';
        $scope.codeStatus = "";
        $scope.onSubmit = function() {
          var FormData =    $.param({"inscripcion": JSON.stringify($scope.benef)});
      $http({
            method: method,
            url: url,
            data: FormData,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            cache: $templateCache
      }).
      success(function(response) {
            $scope.codeStatus = "Ultimo Inscrito: "+ $scope.benef.nombre1+" " +$scope.benef.apellido1;  
            alert(response.data);
            $scope.benef = '';
            $scope.benef = {user:localStorage.getItem('user') }  ; 
      }).
      error(function(response) {
          $scope.codeStatus = response || "Request failed";
      });
      return false;
    };
      
  })*/