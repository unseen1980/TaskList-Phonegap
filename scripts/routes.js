angular.module('todoApp.routes', ['ngRoute', 'ui.bootstrap', 'todoApp.controllers'])
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'scripts/templates/new-todo.html',
                controller: 'todoCtrl'
            })
            .when('/settings', {
                templateUrl: 'scripts/templates/settings.html',
                controller: 'todoCtrl'
            })
            .when('/todo/:id', {
                templateUrl: 'scripts/templates/edit-todo.html',
                controller: 'editTodoCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    })
    .config(['$locationProvider', function($locationProvider) {
        $locationProvider.hashPrefix('');
    }]);