var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TodoForm = function (_React$Component) {
  _inherits(TodoForm, _React$Component);

  function TodoForm(props) {
    _classCallCheck(this, TodoForm);

    var _this = _possibleConstructorReturn(this, (TodoForm.__proto__ || Object.getPrototypeOf(TodoForm)).call(this, props));

    _this.updateText = function (e) {
      _this.setState({ task: e.target.value });
    };

    _this.submitForm = function (e) {
      e.preventDefault();
      var item = e.target[0].value;

      if (!item) {
        swal({
          title: 'Please enter a task',
          type: 'warning'
        });
      } else {
        _this.props.submitAction(item);
        _this.setState({ task: '' });
      }
    };

    _this.state = { task: '' };
    return _this;
  }

  _createClass(TodoForm, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'form',
        {
          onSubmit: this.submitForm,
          className: 'todo-form' },
        React.createElement('input', {
          type: 'text',
          placeholder: 'Enter task',
          onChange: this.updateText,
          value: this.state.task }),
        React.createElement('input', { type: 'submit' })
      );
    }
  }]);

  return TodoForm;
}(React.Component);

var TodoList = function (_React$Component2) {
  _inherits(TodoList, _React$Component2);

  function TodoList(props) {
    _classCallCheck(this, TodoList);

    var _this2 = _possibleConstructorReturn(this, (TodoList.__proto__ || Object.getPrototypeOf(TodoList)).call(this, props));

    _this2.addItem = function (item) {
      var newItems = _this2.state.items;
      newItems.push(item);
      _this2.setState({ items: newItems });
    };

    _this2.deleteItem = function (idx) {
      var newItems = _this2.state.items;
      newItems.splice(idx, 1);
      _this2.setState({ items: newItems });
    };

    _this2.state = {
      items: ['Wash the dog', 'Mow the lawn', 'Take out trash']
    };
    return _this2;
  }

  _createClass(TodoList, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { className: 'todo-list' },
        React.createElement(TodoForm, { submitAction: this.addItem }),
        React.createElement(ItemsList, {
          items: this.state.items,
          clickAction: this.deleteItem })
      );
    }
  }]);

  return TodoList;
}(React.Component);

var ItemsList = function (_React$Component3) {
  _inherits(ItemsList, _React$Component3);

  function ItemsList() {
    _classCallCheck(this, ItemsList);

    return _possibleConstructorReturn(this, (ItemsList.__proto__ || Object.getPrototypeOf(ItemsList)).apply(this, arguments));
  }

  _createClass(ItemsList, [{
    key: 'render',
    value: function render() {
      var _this4 = this;

      var listItems = this.props.items.map(function (item, i) {
        return React.createElement(
          'li',
          { key: i },
          React.createElement(
            'div',
            { className: 'text' },
            item
          ),
          React.createElement('div', {
            onClick: _this4.props.clickAction.bind(_this4, i),
            className: 'delete fa fa-trash' })
        );
      });
      return React.createElement(
        'ul',
        null,
        listItems
      );
    }
  }]);

  return ItemsList;
}(React.Component);

var App = function (_React$Component4) {
  _inherits(App, _React$Component4);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { className: 'row' },
        React.createElement(TodoList, null)
      );
    }
  }]);

  return App;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById('container'));