// * Author: Christos Koutsiaris
// * Assessment 2 - BScH Mobile Development, Digital Skills Academy
// * Student ID: STU-00001219
// * Date: 2017/05/08
// * Code: BScHn16B_MDV_A2

angular.module('todoApp.controllers')
    .controller('editTodoCtrl', function($scope, $routeParams, storage) {
        $scope.params = $routeParams.id;
        // Retrieve a specific todo from the localstorage
        storage.getTodo(parseInt($scope.params)).then(function(res) {
            $scope.todo = res;
        });
    });