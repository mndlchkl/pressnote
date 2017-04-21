  app.controller('EditController',['$scope',function($scope){
    $scope.title='Editar Nota';
    
    $scope.submit = function(event){
    	 console.log($scope.note);
 		  var FormData =    $.param({"Note": JSON.stringify($scope.note)});
 		  console.log(FormData);
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