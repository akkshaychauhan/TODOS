var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Simulate imports
var CSSTransitionGroup = React.addons.CSSTransitionGroup;
var _React = React,
    Component = _React.Component;
var _ReactDOM = ReactDOM,
    render = _ReactDOM.render,
    findDOMNode = _ReactDOM.findDOMNode;


var log = console.log.bind(console);

// Presentation, dumb component
var TodoList = function TodoList(props) {

  var ListItem = function ListItem(item, index) {
    return React.createElement(
      "div",
      { key: item.id, className: "list-item", index: index },
      React.createElement(
        "button",
        { onClick: function onClick() {
            return props.completed(item, index);
          }, className: item.isCompleted ? 'is-completed' : null },
        item.text
      ),
      React.createElement(
        "button",
        { onClick: function onClick() {
            return props.remove(item, index);
          } },
        " x "
      )
    );
  };

  var items = props.items.map(ListItem);

  return React.createElement(
    "div",
    { "class": "list" },
    React.createElement(
      CSSTransitionGroup,
      { transitionName: "example", transitionEnterTimeout: 300, transitionLeaveTimeout: 500 },
      items
    )
  );
};

// Container, smart component, the event and logic methods are defined here

var TodoApp = function (_Component) {
  _inherits(TodoApp, _Component);

  function TodoApp(props) {
    _classCallCheck(this, TodoApp);

    var _this = _possibleConstructorReturn(this, (TodoApp.__proto__ || Object.getPrototypeOf(TodoApp)).call(this, props));

    _this.state = {
      items: [],
      text: ''
    };

    // bind this scope to TodoApp
    _this.onChange = _this.onChange.bind(_this);
    _this.handleSubmit = _this.handleSubmit.bind(_this);
    return _this;
  }

  _createClass(TodoApp, [{
    key: "onChange",
    value: function onChange(event) {
      this.setState({
        text: event.target.value
      });
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(event) {
      event.preventDefault();

      // Add new item to array
      var nextItems = [{
        text: this.state.text,
        id: Date.now(),
        isCompleted: false
      }].concat(_toConsumableArray(this.state.items));

      // Update state
      this.setState({
        items: nextItems,
        text: ''
      });

      findDOMNode(this.refs.todoInput).focus();
    }

    // TODO: Implement logic

  }, {
    key: "handleRemove",
    value: function handleRemove(item, index) {
      log('handleRemove');
      //log(item);    
      log(index);
    }

    // TODO: Implement logic

  }, {
    key: "handleCompleted",
    value: function handleCompleted(item, index) {
      log('handleCompleted');
      //log(item);    
      log(index);
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "react-app" },
        React.createElement(
          "h3",
          null,
          "TODO"
        ),
        React.createElement(
          "form",
          { onSubmit: this.handleSubmit },
          React.createElement("input", { className: "form-control", ref: "todoInput", onChange: this.onChange, value: this.state.text, placeholder: "type something...", autoFocus: "true" }),
          React.createElement(
            "button",
            { className: "" },
            'Add #' + (this.state.items.length + 1)
          )
        ),
        React.createElement(TodoList, { items: this.state.items, remove: this.handleRemove, completed: this.handleCompleted })
      );
    }
  }]);

  return TodoApp;
}(Component);

;

render(React.createElement(TodoApp, null), document.getElementById('react'));