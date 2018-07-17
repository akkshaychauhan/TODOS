var App = angular.module("todo", ["LocalStorageModule"]);

App.controller("TodoCtrl", function ($scope, localStorageService) {

    $scope.init = function () {
        $scope.newTodo = {};
        $scope.todos = [];

        if (!localStorageService.get("todoList")) {
            $scope.todos = [
                { Name:"Make A New Pen", isDone:true},
                { Name: "Pay Phone Bill", isDone: false },
                { Name: "Fix App", isDone: true },
                { Name: "Food Shopping", isDone: false },
                { Name: "Play with Cat", isDone: false }
            ];
        }else{
            $scope.todos = localStorageService.get("todoList");
        }
    };

    $scope.getDate = function () {
        var today = new Date();
         var mm = today.getMonth() + 1;
        var dd = today.getDate();
        var yyyy = today.getFullYear();
        var date = mm + "/" + dd + "/" + yyyy;
        return date;
    };

    $scope.addTodo = function  (todoItem) {
        todoItem.isDone = false;
        $scope.todos.push(todoItem);
        $scope.newTodo = {};
    };

    $scope.deleteTodo = function  (index) {
        $scope.todos.splice(index, 1);
    };

    $scope.markAllDone = function () {
        $scope.todos.forEach(function (todo) {
            todo.isDone = true;
        });
    };

    $scope.uncheckAllDone = function () {
        $scope.todos.forEach(function (todo) {
            todo.isDone = false;
        });
    };

    $scope.doneCount = function () {
        var todoDone = 0;
        $scope.todos.forEach(function (todo) {
            if (todo.isDone === true) {
                todoDone += 1;
            }
        });
        return todoDone;
    };

    $scope.clearCompleted = function () {
        var kill = [];
        for (var i = 0; i < $scope.todos.length; i++) {
            if ($scope.todos[i].isDone)
                kill.push(i);
        }

        for (var i = 0; i < kill.length; i++)
            $scope.todos.splice(kill[i] - i, 1);
    };

    $scope.almostOneNotDone = function () {
        var todoDone = $scope.doneCount();
        if (todoDone < $scope.todos.length) {
            return true;
        } else
            return false;
    };

    $scope.deleteAll = function () {
        $scope.todos = [];
    };
    $scope.clear = function(){
     localStorageService.clearAll();
     $scope.init();
   };
	$scope.$watch("todos",function  (newVal,oldVal) {
	    if (newVal !== null && angular.isDefined(newVal) && newVal!==oldVal) {
	        localStorageService.add("todoList",angular.toJson(newVal));
	    }
	},true);
   
});