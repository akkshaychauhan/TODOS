var App = angular.module('App', []);

App.controller('TasksController', ['$scope', function($scope) {

  $scope.tasks = [
    'Feed the imaginary gold fish.',
    'Walk the non existant dog.',
    'Have a celebratory beer!'
  ];
  
  $scope.completedTasks = [
    'Start writing an example AngularJS todo app.',
    'Add the ability to add new tasks.',
    'Add the ability to mark tasks as completed.',
    'Add the ability to undo completed tasks.',
    'Finish writing an example AngularJS todo app.',
    'Write my first CodePen.'
  ];
  
  $scope.add = function(task) {
    if ( task == '' || typeof task === 'undefined' ) {
      return false;
    }
    
    $scope.tasks.push(task);
    $scope.newTask = '';
  };
  
  $scope.markAsComplete = function(index) {
    var task = $scope.tasks[index];
    $scope.tasks.splice(index, 1);
    $scope.completedTasks.push(task);
  };
  
  $scope.markAsIncomplete = function(index) {
    var task = $scope.completedTasks[index];
    $scope.completedTasks.splice(index, 1);
    $scope.tasks.push(task);
  };
  
  $scope.getTotalTasks = function() {
    return $scope.tasks.length + $scope.completedTasks.length;
  };
  
  $scope.calculatePercent = function(count) {
    var total = $scope.getTotalTasks();
    return Math.round(100 / total * count);
  };
        
}]);