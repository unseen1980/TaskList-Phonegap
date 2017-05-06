// * Author: Christos Koutsiaris
// * Assessment 2 - BScH Mobile Development, Digital Skills Academy
// * Student ID: STU-00001219
// * Date: 2017/05/08
// * Code: BScHn16B_MDV_A2

angular.module('todoApp.controllers')
    .controller('settingsCtrl', function($scope, $location, storage) {
        // Redirect to homepage
        var redirectToMain = function() {
            $location.path('/');
        };

        // Removes completed tasks
        $scope.deleteCompleted = function() {
            storage.deleteCompleted().then(redirectToMain);
        };
        // Removes all tasks
        $scope.deleteAll = function() {
            storage.deleteAll().then(redirectToMain);
        };
    });