var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TodoItem = function TodoItem(props) {
  var item = props.item,
      completeItem = props.completeItem;

  return React.createElement(
    "li",
    null,
    React.createElement(
      "p",
      { className: "todo-text" },
      item.text
    ),
    React.createElement(
      "span",
      { className: "todo-btn-done", onClick: completeItem },
      React.createElement("i", { className: "fa fa-check" })
    )
  );
};

var OneInputForm = function OneInputForm(props) {
  var value = props.value,
      hover = props.hover,
      onChange = props.onChange,
      onSubmit = props.onSubmit,
      mouseEnter = props.mouseEnter,
      mouseOut = props.mouseOut;

  return React.createElement(
    "div",
    { onMouseOver: mouseEnter, onMouseOut: mouseOut },
    React.createElement(
      "form",
      { onSubmit: onSubmit },
      React.createElement("input", {
        onChange: onChange,
        value: value,
        placeholder: "add a todo..." }),
      React.createElement(
        "button",
        { className: "display" },
        "Add"
      )
    )
  );
};

var ToDoList = function (_React$Component) {
  _inherits(ToDoList, _React$Component);

  function ToDoList(props) {
    _classCallCheck(this, ToDoList);

    return _possibleConstructorReturn(this, (ToDoList.__proto__ || Object.getPrototypeOf(ToDoList)).call(this, props));
  }

  _createClass(ToDoList, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var node = this.refs["list"];
      if (node) {
        node.scrollTop = node.scrollHeight;
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _props = this.props,
          todos = _props.todos,
          completeItem = _props.completeItem;

      return React.createElement(
        "section",
        { className: "main" },
        React.createElement(
          "ul",
          { className: "todo-list", ref: "list" },
          todos.map(function (todo) {
            return React.createElement(TodoItem, {
              item: todo,
              key: todo.id,
              completeItem: completeItem.bind(null, todo) });
          })
        )
      );
    }
  }]);

  return ToDoList;
}(React.Component);

var TodoApp = function (_React$Component2) {
  _inherits(TodoApp, _React$Component2);

  function TodoApp(props) {
    _classCallCheck(this, TodoApp);

    var _this2 = _possibleConstructorReturn(this, (TodoApp.__proto__ || Object.getPrototypeOf(TodoApp)).call(this, props));

    _this2.state = {
      todos: [{ text: "item 1", id: Date.now() }],
      formText: '',
      hover: false
    };
    _this2.onChange = _this2.onChange.bind(_this2);
    _this2.handleSubmit = _this2.handleSubmit.bind(_this2);
    _this2.completeItem = _this2.completeItem.bind(_this2);
    return _this2;
  }

  _createClass(TodoApp, [{
    key: "onChange",
    value: function onChange(e) {
      this.setState({ formText: e.target.value });
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(e) {
      e.preventDefault();
      var formText = this.state.formText;
      if (formText.length > 0) {
        var nextItems = this.state.todos.concat([{ text: formText, id: Date.now() }]);
        this.setState({ todos: nextItems, formText: "" });
      }
    }
  }, {
    key: "completeItem",
    value: function completeItem(completedItem) {
      console.log("hey");
      var nextItems = this.state.todos.filter(function (item) {
        return item.id != completedItem.id;
      });
      this.setState({ todos: nextItems });
    }
  }, {
    key: "render",
    value: function render() {
      var todos = this.state.todos;

      return React.createElement(
        "div",
        { className: "todoapp" },
        React.createElement(
          "h3",
          null,
          "TODO"
        ),
        React.createElement(ToDoList, { todos: this.state.todos, completeItem: this.completeItem }),
        React.createElement(OneInputForm, {
          value: this.state.formText,
          onChange: this.onChange,
          onSubmit: this.handleSubmit })
      );
    }
  }]);

  return TodoApp;
}(React.Component);

;

ReactDOM.render(React.createElement(TodoApp, null), document.getElementById("app"));