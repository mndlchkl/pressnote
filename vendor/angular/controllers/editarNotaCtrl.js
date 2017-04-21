  app.controller('EditController',['$scope',function($scope){
    $scope.title='Editar Nota';
    
    $scope.submit = function(){
        $scope.msg= $scope.msg+ " char ";
    };

 }]);