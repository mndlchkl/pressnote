  app.controller('crearNotaCtrl', ['$scope', '$http', '$location', function($scope, $http, $location) {
      CKEDITOR.replace('ckCrearNota', {
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
      $scope.title = 'Editar Nueva Nota';
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
          //($scope.note.pic == undefined) ? msgVal += ' imagen,': ''; //
          ($scope.note.link == undefined) ? msgVal += ' Url imagen portada,': ''; // 
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
                 $location.path('/historial');
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
