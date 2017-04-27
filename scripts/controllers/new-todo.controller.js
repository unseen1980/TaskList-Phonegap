angular.module('todoApp.controllers', ['ngRoute', 'ui.bootstrap'])
    .controller('todoCtrl', function($scope, $location, storage) {
        storage.get().then(function(res) {
            $scope.todos = res;
        });

        $scope.deleteCompleted = function() {
            storage.deleteCompleted().then(function() {
                $location.path('/');
            });
        };

        $scope.deleteAll = function() {
            storage.deleteAll().then(function() {
                $location.path('/');
            });
        };
    });