// Firebase config
var config = {
  apiKey: "AIzaSyDeKIutwIDgLhXlPRH3a0jmXKsnGXVVGwU",
  authDomain: "vuedemo-669fb.firebaseapp.com",
  databaseURL: "https://vuedemo-669fb.firebaseio.com",
  storageBucket: "vuedemo-669fb.appspot.com",
};

// Firebase intialise
firebase.initializeApp(config);

// Set Todos firebase object
var Todos = firebase.database().ref('/todos');

// Watch for value changes on Todos, set todoList.todos property as the value
Todos.on('value', function(snapshot) {
  todoList.todos = snapshot.val();
})

// Create Vue component
var todoList = new Vue({
  el: '#todo',
  data: {
    todos: []
  },
  methods: {
    // Push new post in to Todos
    addTodo: function() {
      Todos.push(this.newTodo)
      this.newTodo.text = ''
    },
    // Remove child based on key - firebase function
    removeTodo: function(key) {
      Todos.child(key).remove()
    }
  }
})