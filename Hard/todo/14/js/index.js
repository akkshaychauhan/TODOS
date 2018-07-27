// on document load
$(function () {

  // Data Model
  var todos = [];

  // Application
  var template;
  var app = {
    init: function init() {
      app.compileTemplates();
      app.render();
    },
    render: function render() {
      // render the todos
      var todoHtml = _.map(todos, function (todo) {
        return template(todo);
      });
      app.unbindEvents();
      $('ul.list-group').html(todoHtml.join(""));
      app.bindEvents();
    },
    compileTemplates: function compileTemplates() {
      template = $('[type="text/x-template"]');
      template = Handlebars.compile(template.first().html());
    },
    unbindEvents: function unbindEvents() {
      $('.list-group-item').off();
      $('.add-todo-container button').off();
      $('input[type="checkbox"]').off();
      $('.list-group-item button').off();
    },
    bindEvents: function bindEvents() {
      app.bindHoverEvents();
      app.bindCheckboxEvents();
      app.bindAddTodoEvents();
      app.bindRemoveTodoEvents();
    },
    bindHoverEvents: function bindHoverEvents() {
      var $items = $('.list-group-item');
      $items.on('mouseover', function (event) {
        $(this).addClass('list-group-item-success');
      });
      $items.on('mouseout', function () {
        $(this).removeClass('list-group-item-success');
      });
    },
    bindCheckboxEvents: function bindCheckboxEvents() {
      var $checkboxes = $('input[type="checkbox"]');
      $checkboxes.on('change', function () {
        var wasChecked = $(this).is(':checked');
        if (!wasChecked) {
          $(this).parent().parent().removeClass("disabled");
        } else {
          $(this).parent().parent().addClass("disabled");
        }
      });
    },
    bindAddTodoEvents: function bindAddTodoEvents() {
      var $container = $('.add-todo-container');
      $container.find('button').on('click', function () {
        var newTodoTitle = $container.find('input').val();
        if (_.isString(newTodoTitle) && newTodoTitle.length > 2) {
          var newTodoObject = { title: newTodoTitle, completed: false };
          todos.push(newTodoObject);
          $container.find('input').val("");
          app.render();
        }
      });
    },
    bindRemoveTodoEvents: function bindRemoveTodoEvents() {
      $('.list-group-item button').on('click', function () {
        var index = $(this).parent().parent().index();
        todos.splice(index, 1);
        app.render();
      });
    }
  };

  app.init();
});