  app.controller('EditController', ['$scope', '$http', '$location', function($scope, $http, $location) {
      CKEDITOR.replace('editor1', {
          toolbar: [{
                  name: 'basicstyles',
                  groups: ['basicstyles', 'cleanup'],
                  items: ['Bold', 'Italic', 'Underline', 'Strike', 'Subscript', 'Superscript', '-', 'RemoveFormat']
              }, {
                  name: 'paragraph',
                  groups: ['list', 'indent', 'blocks', 'align', 'bidi'],
                  items: ['NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', '-', 'Blockquote', '-', 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock', '-', 'BidiLtr', 'BidiRtl', 'Language']
              }, {
                  name: 'links',
                  items: ['Link', 'Unlink', 'Anchor']
              }, {
                  name: 'insert',
                  items: ['Image','Table', 'HorizontalRule', ]
              }, '/', {
                  name: 'styles',
                  items: ['Styles', 'Format', 'Font', 'FontSize']
              }, {
                  name: 'colors',
                  items: ['TextColor', 'BGColor']
              }, {
                  name: 'tools',
                  items: ['Maximize', 'ShowBlocks']
              },
              //{ name: 'about', items: [ 'About' ] }
          ]
      });
      $scope.title = 'Editar Nota';
      $scope.msgtxt = 'Publicar';
      $scope.note = {};
      $scope.submit = function() {
         // console.log(CKEDITOR.instances.body.getData());
       //   console.log(CKEDITOR.instances.editor1.getData());
         $scope.note.body = CKEDITOR.instances.body.getData();
          msgVal = '';
          ($scope.note.header == undefined) ? msgVal += ' titulo,': ''; //
          //  ($scope.note.subheader == undefined) ? msgVal += ' subtitulo,': ''; //
          ($scope.note.body == undefined) ? msgVal += ' texto,': ''; //
          ($scope.note.pic == undefined) ? msgVal += ' imagen,': ''; //
          //  ($scope.note.link == undefined) ? msgVal += ' link,': ''; // 
          ($scope.note.author == undefined) ? msgVal += ' autor,': ''; // 
          if (msgVal == '') {
              $scope.msgtxt = 'Procesando, espere...';
              var formData = new FormData();
              for (var key in $scope.note) {
                  console.log(key, $scope.note[key]);
                  formData.append(key, $scope.note[key]);
              }
              $http({
                  transformRequest: angular.identity,
                  method: 'POST',
                  url: 'api/create_note.php',
                  data: formData,
                  headers: {
                      'Content-Type': undefined
                  },
              }).then(successCallback, errorCallback);

              function successCallback(response) {
                  alert(response.data);
                  $scope.note = {}; // $scope.note = '';
                  //  $location.path("/editar");
                  $scope.msgtxt = 'Publicar';
                  window.scrollTo(0, 0);
              }

              function errorCallback(error) {
                  alert(response.data);
                  $scope.msgtxt = 'Publicar';
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