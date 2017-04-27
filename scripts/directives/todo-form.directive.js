angular.module('todoApp')
    .directive('todoForm', function() {
        return {
            restrict: 'E',
            scope: {
                todo: '=?',
                mode: '@',
                collapsed: '=',
                showX: '='
            },
            templateUrl: 'scripts/directives/todo-form.template.html',
            controller: function($scope, storage, $routeParams, $location) {
                $scope.todo = angular.isUndefined($scope.todo) ? {} : $scope.todo;
                if (angular.isDefined($scope.todo)) {
                    $scope.todo.date = new Date($scope.todo.date)
                }
                $scope.todoClone = angular.copy($scope.todo);
                $scope.$routeParams = $routeParams;
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

                $scope.addTodo = function(todo) {
                    todo.id = Date.now();
                    storage.insert(todo).then(function(res) {
                        $scope.todos = res;
                    });
                    $scope.todo = {};
                    $scope.collapsed = !$scope.collapsed
                };

                $scope.updateTodo = function(todo) {
                    todo.id = $scope.todoClone.id;
                    storage.updateTodo(todo).then(function() {
                        $location.path('/');
                    });
                };
            }
        };
    });