'strict mode';

new Vue({
  el: '#app',
  data: {
    newTodo: '',
    todos: [{ task: 'Learn vuejs', completed: false }, { task: 'Build a todo app', completed: true }]
  },

  computed: {
    complete: function complete(todo) {
      return this.todos.filter(this.isCompleted);
    },
    remaining: function remaining(todo) {
      return this.todos.filter(this.inProgress);
    }
  },

  methods: {
    isCompleted: function isCompleted(todo) {
      return todo.completed;
    },
    inProgress: function inProgress(todo) {
      return !this.isCompleted(todo);
    },
    addTodo: function addTodo(todo) {
      var text = this.newTodo.trim();
      this.todos.push({ task: text, completed: false });
      this.newTodo = '';
    },
    removeTodo: function removeTodo(todo) {
      this.todos.$remove(todo);
    },
    completed: function completed(todo) {
      todo.completed = !todo.completed;
    },
    clearAllCompleted: function clearAllCompleted() {
      this.todos = this.todos.filter(this.inProgress);
    }
  }
});