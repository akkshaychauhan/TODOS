var items = [
  { text:'Learn Angular.js', hours:5, complete:false },
  { text:'Wash Hair', hours:0.5, complete:false },
  { text:'Clean the Kitchen', hours:1, complete:true },
  { text:'Go Outside', hours:4, complete:false },
  { text:'Eat Dinner', hours:1, complete:false },
  { text:'Learn to Juggle', hours:4, complete:true }
];


var app = angular.module('todo', []);

app.controller('TodoController', function($scope){
 
    $scope.todos = items;
    $scope.hours = 1;

    $scope.getTotal = function(){
      return $scope.todos.length;
    };

    $scope.addTodo = function(){
      if ($scope.task){
        $scope.todos.unshift({ text:$scope.task, hours:$scope.hours, complete:false});
        $scope.task = '';
      }
    };

    $scope.clearComplete = function(){
      $scope.todos = $scope.todos.filter(function(todo){
        return !todo.complete;
      });
    };
  
});