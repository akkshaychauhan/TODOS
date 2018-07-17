(function() {
  // Create the Module
  var todo;

  todo = angular.module('todo', []);

  // Create the Controller
  todo.controller('todo_ctrl', function($scope) {
    // Array to hold the list items
    $scope.todos = [];
    
    // Display the total number of items
    $scope.get_total_todos = function() {
      return $scope.todos.length;
    };
    // Handle adding a todo item
    $scope.add_todo = function() {
      $scope.todos.push({
        text: $scope.form_todo_text,
        done: false
      });
      $scope.form_todo_text = "";
    };
    
    // Handle completing a todo
    $scope.toggle_todo = function() {
      return this.todo.done = !this.todo.done;
    };
    // Handle clearing of completed todos
    $scope.clear_completed = function() {
      var done;
      done = function(el) {
        if (!el.done) {
          return el;
        }
      };
      return $scope.todos = $scope.todos.filter(done);
    };
  });

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiPGFub255bW91cz4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBQTtBQUFBLE1BQUE7O0VBQ0EsSUFBQSxHQUFPLE9BQU8sQ0FBQyxNQUFSLENBQWUsTUFBZixFQUF1QixFQUF2QixFQURQOzs7RUFJQSxJQUFJLENBQUMsVUFBTCxDQUFpQixXQUFqQixFQUE4QixRQUFBLENBQUMsTUFBRCxDQUFBLEVBQUE7O0lBRzVCLE1BQU0sQ0FBQyxLQUFQLEdBQWUsR0FBZjs7O0lBR0EsTUFBTSxDQUFDLGVBQVAsR0FBeUIsUUFBQSxDQUFBLENBQUE7QUFDdkIsYUFBTyxNQUFNLENBQUMsS0FBSyxDQUFDO0lBREcsRUFIekI7O0lBT0EsTUFBTSxDQUFDLFFBQVAsR0FBa0IsUUFBQSxDQUFBLENBQUE7TUFDaEIsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFiLENBQ0U7UUFBQSxJQUFBLEVBQU0sTUFBTSxDQUFDLGNBQWI7UUFDQSxJQUFBLEVBQU07TUFETixDQURGO01BSUEsTUFBTSxDQUFDLGNBQVAsR0FBd0I7SUFMUixFQVBsQjs7O0lBZ0JBLE1BQU0sQ0FBQyxXQUFQLEdBQXFCLFFBQUEsQ0FBQSxDQUFBO2FBQ25CLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBVixHQUFpQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7SUFEVCxFQWhCckI7O0lBb0JBLE1BQU0sQ0FBQyxlQUFQLEdBQXlCLFFBQUEsQ0FBQSxDQUFBO0FBQ3ZCLFVBQUE7TUFBQSxJQUFBLEdBQU8sUUFBQSxDQUFDLEVBQUQsQ0FBQTtRQUNMLElBQUcsQ0FBSSxFQUFFLENBQUMsSUFBVjtBQUNFLGlCQUFPLEdBRFQ7O01BREs7YUFJUCxNQUFNLENBQUMsS0FBUCxHQUFlLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBYixDQUFvQixJQUFwQjtJQUxRO0VBdkJHLENBQTlCO0FBSkEiLCJzb3VyY2VzQ29udGVudCI6WyIjIENyZWF0ZSB0aGUgTW9kdWxlXG50b2RvID0gYW5ndWxhci5tb2R1bGUoJ3RvZG8nLCBbXSlcblxuIyBDcmVhdGUgdGhlIENvbnRyb2xsZXJcbnRvZG8uY29udHJvbGxlciggJ3RvZG9fY3RybCcsICgkc2NvcGUpIC0+XG5cbiAgIyBBcnJheSB0byBob2xkIHRoZSBsaXN0IGl0ZW1zXG4gICRzY29wZS50b2RvcyA9IFtdXG4gIFxuICAjIERpc3BsYXkgdGhlIHRvdGFsIG51bWJlciBvZiBpdGVtc1xuICAkc2NvcGUuZ2V0X3RvdGFsX3RvZG9zID0gLT5cbiAgICByZXR1cm4gJHNjb3BlLnRvZG9zLmxlbmd0aFxuXG4gICMgSGFuZGxlIGFkZGluZyBhIHRvZG8gaXRlbVxuICAkc2NvcGUuYWRkX3RvZG8gPSAtPlxuICAgICRzY29wZS50b2Rvcy5wdXNoXG4gICAgICB0ZXh0OiAkc2NvcGUuZm9ybV90b2RvX3RleHRcbiAgICAgIGRvbmU6IGZhbHNlXG5cbiAgICAkc2NvcGUuZm9ybV90b2RvX3RleHQgPSBcIlwiXG4gICAgcmV0dXJuXG4gIFxuICAjIEhhbmRsZSBjb21wbGV0aW5nIGEgdG9kb1xuICAkc2NvcGUudG9nZ2xlX3RvZG8gPSAtPlxuICAgIHRoaXMudG9kby5kb25lID0gIXRoaXMudG9kby5kb25lXG5cbiAgIyBIYW5kbGUgY2xlYXJpbmcgb2YgY29tcGxldGVkIHRvZG9zXG4gICRzY29wZS5jbGVhcl9jb21wbGV0ZWQgPSAtPlxuICAgIGRvbmUgPSAoZWwpIC0+XG4gICAgICBpZiBub3QgZWwuZG9uZVxuICAgICAgICByZXR1cm4gZWxcbiAgICAgIFxuICAgICRzY29wZS50b2RvcyA9ICRzY29wZS50b2Rvcy5maWx0ZXIoZG9uZSlcblxuICByZXR1cm5cbikiXX0=
//# sourceURL=coffeescript