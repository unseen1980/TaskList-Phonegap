// * Author: Christos Koutsiaris
// * Assessment 2 -  AngularJS Todo-List
// * Student ID: STU-00001219
// * Date: 2017/01/01
// * Code: BScHn16B_MDV_A2
angular.module('todoApp')
    .directive('todoList', function() {
        return {
            restrict: 'E',
            scope: {
                panels: '='
            },
            templateUrl: 'scripts/directives/todo-list.template.html',
            controller: function($scope) {
                // Data for visual representation
                $scope.panelHeaderColor = {
                    5: 'danger',
                    4: 'warning',
                    3: 'info',
                    2: 'primary',
                    1: 'success'
                };
                $scope.statusOptionsGlyphs = {
                    1: 'glyphicon-play-circle',
                    2: 'glyphicon-time',
                    3: 'glyphicon-ok'
                };
            }
        };
    });