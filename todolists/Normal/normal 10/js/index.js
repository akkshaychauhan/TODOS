// Model
var Todo = Backbone.Model.extend({

  defaults: {
    description: '',
    completed: false
  },
  
  toggle: function() {
    var isCompleted = !this.get('completed');
    this.set({completed: isCompleted});
    
    return isCompleted;
  },
  
  edit: function(description) {
    if (_.isString(description) && description.length > 0) {         
      this.set({description: description});
    }
  }
  
});

// Collection
var TodoList = Backbone.Collection.extend({
  
  model: Todo,
  
  getTotal: function() {
    return this.length;
  },
  
  getCompleted: function() {
    return this.where({completed: true});
  },
  
  getNumCompleted: function() {
    return this.getCompleted().length;
  },
  
  getIncomplete: function() {
    return this.where({completed: false});
  },
  
  getNumIncomplete: function() {
    return this.getIncomplete().length;
  },
  
  createTodo: function(description) {    
    if (_.isString(description) && description.length > 0) {
      this.add(new this.model({description: description}));  
    }    
  },
  
  toggleAll: function() {
    var incompleteTodos = this.where({completed: false});

    // Set all incomplete todos to 'completed'
    if (incompleteTodos.length > 0) {
     _(incompleteTodos).each(function(todoModel) {
       todoModel.set({completed: true});
      }, this);
    }

    // All todos completed, so unset the completed status for all
    else {
       this.each(function(todoModel) {
       todoModel.set({completed: false});
      }, this);
    }
  },
  
  removeAllCompleted: function() {
    this.remove(this.getCompleted());    
  }
  
});

// View for individual Todo model
var TodoView = Backbone.View.extend({
  
	tagName: 'li',
  
  className: 'todo',
  
  template: Handlebars.compile($('#todo-template').html()),
  
  events: {
    'click .todo-toggle': 'toggleTodo',
    'click .todo-remove': 'removeTodo',
    'dblclick .todo-desc': 'openTodo',
    'keypress .todo-edit': 'editTodo' 
  },
  
  initialize: function() {
    this.listenTo(this.model, 'change', this.render);
    this.listenTo(this.model, 'remove', this.remove);
  },
  
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));   
    return this;
  },
  
  toggleTodo: function(e) {   
    this.model.toggle();
  },
  
  removeTodo: function() {
    this.model.destroy();
  }, 
  
  openTodo: function(e) {   
    $(e.target).hide();
    this.$('.todo-edit').show();
  },
  
  editTodo: function(e) {
    
    // ENTER key pressed, so save the modified todo
    if (e.charCode === 13) {     
      var description = $(e.target).val().trim();
      this.model.edit(description);
    }
  }
      
});

// View for stats
var StatsView = Backbone.View.extend({
  
  template: Handlebars.compile($('#todo-stats-template').html()),
  
  initialize: function() {	
    this.listenTo(this.collection, 'add', this.render);
    this.listenTo(this.collection, 'change', this.render);
    this.listenTo(this.collection, 'remove', this.render);
  },
  
  render: function() {
    
    var statsData = {
      totalTodos: this.collection.getTotal(),
      completedTodos: this.collection.getNumCompleted(),
      incompleteTodos: this.collection.getNumIncomplete()
    }; 
    
    this.$el.html(this.template(statsData));

    return this;
  }
  
});

// View for TodoList collection
var TodoListView = Backbone.View.extend({
  
  className: 'todo-list',
  
  el: document.getElementById('app'),
  
  events: {
    'keypress #todo-create': 'create',
    'click #todo-toggle-all': 'toggleAll',
    'click #todo-remove-all': 'removeAll'
  },
  
  initialize: function() {
    
    _.bindAll(this, 'addOne');       
    
    this.$editor = this.$('#todo-create');
    this.$todoList = this.$('#todo-list');
    this.statsView = new StatsView({
      el: this.$('#todo-stats').find('tr:nth-child(2)'),
      collection: this.collection
    });
    
    this.listenTo(this.collection, 'add', this.addOne);
    this.listenTo(this.collection, 'change', this.toggleControls);
    this.listenTo(this.collection, 'remove', this.toggleControls);
  },
  
  render: function() {   
    this.addAll();    
    this.statsView.render();        
        
    return this;
  },
  
  addOne: function(todoModel) {
    var todoView = new TodoView({model: todoModel});   
    this.$todoList.append(todoView.render().el); 
  },
  
  addAll: function() {    
    this.collection.each(this.addOne);
  },
  
  create: function(e) {    

    // ENTER key pressed, so save the description
    if (e.keyCode === 13) {      
      var desc = this.$editor.val().trim();
      this.collection.createTodo(desc);
      this.$editor.val('');
    }
  
  },
  
  toggleAll: function(e) { 

    if (this.collection.getTotal() > 0) {
      this.collection.toggleAll();      
    }
  },
  
  toggleControls: function() {
    var numCompleted = this.collection.getNumCompleted();
    var isCompleted = numCompleted > 0; 
    var isAllCompleted = isCompleted && this.collection.getTotal() === numCompleted;
    var toggleMethod = isCompleted ? 'show' : 'hide';
    
    this.$('#todo-remove-all')[toggleMethod]();        
    this.$('#todo-toggle-all').toggleClass('on', isAllCompleted);       
  },
  
  removeAll: function() {
    this.collection.removeAllCompleted();
  }
  
});

var TodoRouter = Backbone.Router.extend({

  initialize: function() {
    
    var todoList = new TodoList();
    var todoListView = new TodoListView({
      collection: todoList
    });
    
  }
  
});


// Run the app
$(function() {
  
  var todoApp = new TodoRouter();
  
});