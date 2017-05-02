// * Author: Christos Koutsiaris
// * Assessment 2 -  AngularJS Todo-List
// * Student ID: STU-00001219
// * Date: 2017/01/01
// * Code: BScHn16B_MDV_A2
angular.module('todoApp.controllers')
    .controller('settingsCtrl', function($scope, $location, storage) {
        // Removes completed tasks
        $scope.deleteCompleted = function() {
            storage.deleteCompleted().then(function() {
                $location.path('/');
            });
        };
        // Removes all tasks
        $scope.deleteAll = function() {
            storage.deleteAll().then(function() {
                $location.path('/');
            });
        };
    });