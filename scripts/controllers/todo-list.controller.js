// * Author: Christos Koutsiaris
// * Assessment 2 - BScH Mobile Development, Digital Skills Academy
// * Student ID: STU-00001219
// * Date: 2017/05/08
// * Code: BScHn16B_MDV_A2

angular.module('todoApp.controllers', ['ngRoute', 'ui.bootstrap'])
    .controller('todoListCtrl', function($scope, $location, storage) {
        // Retrieves todos from localstorage
        storage.get().then(function(res) {
            $scope.todos = res;
        });
        // Sends user to new todo flow
        $scope.redirectToAdd = function() {
            $location.path('/new');
        };
    });