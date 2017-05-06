// * Author: Christos Koutsiaris
// * Assessment 2 - BScH Mobile Development, Digital Skills Academy
// * Student ID: STU-00001219
// * Date: 2017/05/08
// * Code: BScHn16B_MDV_A2
angular.module('todoApp')
    .directive('todoForm', function() {
        return {
            restrict: 'E',
            scope: {
                todo: '=?',
                mode: '@'
            },
            templateUrl: 'scripts/directives/todo-form.template.html',
            controller: function($scope, storage, $routeParams, $location) {

                // Initialization of empty todo when in new mode
                $scope.todo = angular.isUndefined($scope.todo) ? {} : $scope.todo;
                if (angular.isDefined($scope.todo)) {
                    $scope.todo.date = new Date($scope.todo.date);
                }

                $scope.todoClone = angular.copy($scope.todo);
                $scope.$routeParams = $routeParams;

                // Data for dropdowns
                $scope.priorityOptions = [
                    { type: 'Very High', value: 5 },
                    { type: 'High', value: 4 },
                    { type: 'Medium', value: 3 },
                    { type: 'Low', value: 2 },
                    { type: 'Very Low', value: 1 }
                ];
                $scope.statusOptions = [
                    { type: 'Open', value: 1, glyph: 'glyphicon-play-circle' },
                    { type: 'In progress', value: 2, glyph: 'glyphicon-time' },
                    { type: 'Completed', value: 3, glyph: 'glyphicon-ok' }
                ];

                // Calendar options
                $scope.dateOptions = {
                    formatYear: 'yy',
                    minDate: new Date(),
                    startingDay: 1
                };

                $scope.openCalendar = function() {
                    $scope.calendar.opened = true;
                };

                $scope.calendar = {
                    opened: false
                };

                /**Adds a todo to storage
                 * @param  {object} todo Todo data
                 */
                $scope.addTodo = function(todo) {
                    todo.id = Date.now();
                    storage.add(todo).then(function(res) {
                        $scope.todos = res;
                        $scope.todo = {};
                        $location.path('/');
                    });
                };

                /**Updates a todo from storage
                 * @param  {object} todo Todo data
                 */
                $scope.updateTodo = function(todo) {
                    todo.id = $scope.todoClone.id;
                    storage.updateTodo(todo).then(function() {
                        $location.path('/');
                    });
                };

                /**
                 * Form submission based on mode. Sets defaults for optional data
                 * @param  {boolean} isValid Detects validity of form
                 * @param  {object} todo Todo data
                 */
                $scope.submitForm = function(isValid, todo) {
                    // Set defaults to status and priority if user leave these fields blank
                    if (angular.isUndefined(todo.status)) todo.status = $scope.statusOptions[0].value.toString();
                    if (angular.isUndefined(todo.priority)) todo.priority = $scope.priorityOptions[2].value.toString();
                    if (isValid && $scope.mode === 'edit') $scope.updateTodo(todo);
                    if (isValid && $scope.mode === 'new') $scope.addTodo(todo);
                };
            }
        };
    });