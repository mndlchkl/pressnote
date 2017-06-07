var app = angular.module('myApp', ['ngRoute']);
app.config(['$locationProvider', function($locationProvider) {
    $locationProvider.hashPrefix('');
}]);
app.config(function($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'login.html',
        controller: 'loginCtrl'
    })
      .when('/recursos', {
        resolve: {
            "check": function($location, $rootScope) {
                if (!$rootScope.loggedIn) {
                    $location.path('/');
                }
            }
        },
        templateUrl: 'recursos.html',
        controller: 'resourcesCtrl'
    })
    .when('/historial/:id', {
        resolve: {
            "check": function($location, $rootScope) {
                if (!$rootScope.loggedIn) {
                    $location.path('/');
                }
            }
        },
        templateUrl: 'note.html',
        controller: 'noteCtrl'
    })
    .when('/home', {
        resolve: {
            "check": function($location, $rootScope) {
                if (!$rootScope.loggedIn) {
                    $location.path('/');
                }
            }
        },
        templateUrl: 'home.html',
        controller: 'homeCtrl'
    }).when('/adminhome', {
        resolve: {
            "check": function($location, $rootScope) {
                if (!$rootScope.loggedIn) {
                    $location.path('/');
                }
            }
        },
        templateUrl: 'adminhome.html',
        controller: 'adminhomeCtrl'
    }).when('/crearNota', {
        resolve: {
            "check": function($location, $rootScope) {
                if (!$rootScope.loggedIn) {
                    $location.path('/');
                }
            }
        },
        templateUrl: 'crearNota.html',
        controller: 'crearNotaCtrl'
    }).when('/historial', {
        resolve: {
            "check": function($location, $rootScope) {
                if (!$rootScope.loggedIn) {
                    $location.path('/');
                }
            }
        },
        templateUrl: 'historial.html',
        controller: 'historyCtrl'
    }).when('/participantes', {
        resolve: {
            "check": function($location, $rootScope) {
                if (!$rootScope.loggedIn) {
                    $location.path('/');
                }
            }
        },
        templateUrl: 'participantes.html',
        controller: 'participantesCtrl'
    }).when('/login', {
        templateUrl: 'login.html',
        controller: 'loginCtrl'
    }).otherwise({
        template: '/'
    });
});
//  $locationProvider.html5Mode({
//        enabled: true,
//        requireBase: false
// });
/**

app.config(function($routeProvider) {
  $routeProvider

  .when('/', {
    templateUrl : 'pages/home.html',
    controller  : 'HomeController'
  })

  .when('/blog', {
    templateUrl : 'pages/blog.html',
    controller  : 'BlogController'
  })

  .when('/about', {
    templateUrl : 'pages/about.html',
    controller  : 'AboutController'
  })

  .otherwise({redirectTo: '/'});
});




app.controller('HomeController', function($scope) {
  $scope.message = 'Hello from HomeController';
});

app.controller('BlogController', function($scope) {
  $scope.message = 'Hello from BlogController';
});

app.controller('AboutController', function($scope) {
  $scope.message = 'Hello from AboutController';
});
*/