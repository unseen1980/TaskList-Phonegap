angular.module('todoApp.controllers')
    .controller('editTodoCtrl', function($scope, $routeParams, storage) {
        $scope.params = $routeParams.id;
        storage.getTodo(parseInt($scope.params)).then(function(res) {
            $scope.todo = res;
        })
    });