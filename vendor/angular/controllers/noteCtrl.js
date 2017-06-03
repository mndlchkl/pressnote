  app.controller('noteCtrl', function($scope, $http, $routeParams) {

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
                  items: ['Table', 'HorizontalRule', ]
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
         $scope.submit = function() {
          var formData = new FormData();
          for (var key in $scope.note) {
              formData.append(key, $scope.note[key]);
          }
          console.log(formData);
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
              } else {
                  alert(response.data);
              }
              $scope.listar();
              
          }

          function errorCallback(error) {
              alert(response.data);
 
          }

       }
       /////////////////////////////////////////////////////////////////////////////
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
              $scope.msgtxt = 'Actualizar';
             
          }

          function errorCallback(error) {
              alert(response.data);
          }
      }
   
         $scope.listar();
  });