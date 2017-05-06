// * Author: Christos Koutsiaris
// * Assessment 2 - BScH Mobile Development, Digital Skills Academy
// * Student ID: STU-00001219
// * Date: 2017/05/08
// * Code: BScHn16B_MDV_A2

angular.module('todoApp.routes', ['ngRoute', 'ui.bootstrap', 'todoApp.controllers'])
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'scripts/partials/todo-list.html',
                controller: 'todoListCtrl'
            })
            .when('/new', {
                templateUrl: 'scripts/partials/new-todo.html'
            })
            .when('/settings', {
                templateUrl: 'scripts/partials/settings.html',
                controller: 'settingsCtrl'
            })
            .when('/todo/:id', {
                templateUrl: 'scripts/partials/edit-todo.html',
                controller: 'editTodoCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    })
    .config(['$locationProvider', function($locationProvider) {
        $locationProvider.hashPrefix('');
    }]);