app.controller('participantesCtrl', function($scope, $http) {
   
    $scope.title = "Listado de postulantes";
    $scope.listar = function() {
        var postulantes = {};
        $http({
            method: 'GET',
            url: 'api/listAplicants.php',
        }).then(successCallback, errorCallback);

        function successCallback(response) {
            $scope.postulantes = response.data;
            for (var key in postulantes) {}
            //  console.log($scope.postulantes);
        }

        function errorCallback(error) {
            alert(response.data);
        }
    }
    $scope.listar();
});