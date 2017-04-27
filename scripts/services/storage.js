angular.module('todoApp')
    .factory('storage', function($q) {
        'use strict';

        var STORAGE_ID = 'todoApp';

        var store = {
            todos: [],

            getFromLocalStorage: function() {
                return JSON.parse(localStorage.getItem(STORAGE_ID) || '[]');
            },

            saveToLocalStorage: function(todos) {
                localStorage.setItem(STORAGE_ID, JSON.stringify(todos));
            },

            deleteCompleted: function() {
                var deferred = $q.defer();

                var incompleteTodos = store.todos.filter(function(todo) {
                    // Completed status is 3
                    return parseInt(todo.status) !== 3;
                });

                angular.copy(incompleteTodos, store.todos);

                store.saveToLocalStorage(store.todos);
                deferred.resolve(store.todos);

                return deferred.promise;
            },

            delete: function(todo) {
                var deferred = $q.defer();

                store.todos.splice(store.todos.indexOf(todo), 1);

                store.saveToLocalStorage(store.todos);
                deferred.resolve(store.todos);

                return deferred.promise;
            },

            deleteAll: function() {
                var deferred = $q.defer();

                store.todos = [];

                store.saveToLocalStorage(store.todos);
                deferred.resolve(store.todos);

                return deferred.promise;
            },

            get: function() {
                var deferred = $q.defer();

                angular.copy(store.getFromLocalStorage(), store.todos);
                deferred.resolve(store.todos);

                return deferred.promise;
            },

            insert: function(todo) {
                var deferred = $q.defer();

                store.todos.push(todo);

                store.saveToLocalStorage(store.todos);
                deferred.resolve(store.todos);

                return deferred.promise;
            },

            updateTodo: function(updated) {
                var deferred = $q.defer();

                store.todos.forEach(function(todo, idx) {
                    if (updated.id === todo.id) {
                        store.todos[idx] = updated;
                    }
                });

                store.saveToLocalStorage(store.todos);
                deferred.resolve(store.todos);

                return deferred.promise;
            },

            getTodo: function(id) {
                var deferred = $q.defer();
                var todo = store.getFromLocalStorage().filter(function(todo) {
                    return todo.id === id
                })[0];

                deferred.resolve(todo);

                return deferred.promise;
            }
        };

        return store;
    });