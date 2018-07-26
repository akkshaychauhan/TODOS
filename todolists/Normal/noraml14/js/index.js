var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var todo = function todo(state, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text,
        completed: false
      };
    case 'TOGGLE_TODO':
      if (state.id !== action.id) {
        return state;
      }

      return _extends({}, state, {
        completed: !state.completed
      });
    case 'EDIT_TODO':
      if (state.id !== action.id) {
        return state;
      }

      return _extends({}, state, {
        text: action.text
      });
    default:
      return state;
  }
};

var todos = function todos() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments[1];

  switch (action.type) {
    case 'ADD_TODO':
      return [].concat(_toConsumableArray(state), [todo(undefined, action)]);
    case 'TOGGLE_TODO':
      return state.map(function (t) {
        return todo(t, action);
      });
    case 'EDIT_TODO':
      return state.map(function (t) {
        return todo(t, action);
      });
    default:
      return state;
  }
};

var visibilityFilter = function visibilityFilter() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'SHOW_ALL';
  var action = arguments[1];

  switch (action.type) {
    case 'SET_VISIBILITY':
      return action.filter;
    default:
      return state;
  }
};

var _Redux = Redux,
    combineReducers = _Redux.combineReducers,
    createStore = _Redux.createStore;

var todoApp = combineReducers({ todos: todos, visibilityFilter: visibilityFilter });
var store = createStore(todoApp);

var _React = React,
    Component = _React.Component;

var nextTodoId = 0;

var TodoApp = function (_Component) {
  _inherits(TodoApp, _Component);

  function TodoApp() {
    _classCallCheck(this, TodoApp);

    return _possibleConstructorReturn(this, (TodoApp.__proto__ || Object.getPrototypeOf(TodoApp)).apply(this, arguments));
  }

  _createClass(TodoApp, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props$store$getState = this.props.store.getState(),
          todos = _props$store$getState.todos,
          visibilityFilter = _props$store$getState.visibilityFilter;

      var filteredTodos = todos.filter(function (todo) {
        if (visibilityFilter === 'SHOW_ACTIVE') {
          return !todo.completed;
        }
        if (visibilityFilter === 'SHOW_COMPLETED') {
          return todo.completed;
        }
        return true;
      });

      return React.createElement(
        'div',
        { className: 'container' },
        React.createElement(
          'section',
          null,
          React.createElement('input', { placeholder: 'Add Task', ref: function ref(node) {
              _this2.input = node;
            } }),
          React.createElement(
            'button',
            { onClick: function onClick() {
                _this2.props.store.dispatch({
                  type: 'ADD_TODO',
                  text: _this2.input.value,
                  id: nextTodoId++
                });
                _this2.input.value = '';
                document.getElementById('saber-humm').play();
              } },
            '\u26A1'
          ),
          React.createElement(
            'ul',
            null,
            filteredTodos.map(function (todo) {
              return React.createElement(
                'li',
                { key: todo.id,
                  onMouseOver: function onMouseOver() {
                    document.getElementById(todo.completed ? 'saber-wave' : 'saber-on').play();
                  },
                  style: { textShadow: todo.completed ? 'none' : '0 0 10px rgb(255,255,255), 0 0 20px rgb(255,255,255), 0 0 30px rgb(255,255,255), 0 0 40px rgb(255,17,119), 0 0 70px rgb(255,17,119), 0 0 80px rgb(255,17,119), 0 0 100px rgb(255,17,119), 0 0 150px rgb(255,17,119)' } },
                React.createElement(
                  'span',
                  { style: { margin: '3px 20px 0 0' },
                    onClick: function onClick() {
                      _this2.props.store.dispatch({
                        type: 'TOGGLE_TODO',
                        id: todo.id
                      });
                      document.getElementById(todo.completed ? 'saber-humm' : 'saber-hit').play();
                    } },
                  todo.completed ? React.createElement(
                    'span',
                    null,
                    '\u2620'
                  ) : React.createElement(
                    'span',
                    null,
                    '\u2639'
                  )
                ),
                React.createElement(ContentEditable, {
                  html: todo.text,
                  editTodo: function editTodo(text) {
                    _this2.props.store.dispatch({
                      type: 'EDIT_TODO',
                      id: todo.id,
                      text: text
                    });
                  } })
              );
            })
          )
        ),
        React.createElement(
          'footer',
          null,
          React.createElement(
            'a',
            { id: 'vis1', href: '#', onClick: function onClick(e) {
                return _this2.setVisibility(e, 'SHOW_ALL');
              } },
            'All'
          ),
          React.createElement(
            'a',
            { id: 'vis2', href: '#', onClick: function onClick(e) {
                return _this2.setVisibility(e, 'SHOW_ACTIVE');
              } },
            'Active'
          ),
          React.createElement(
            'a',
            { id: 'vis3', href: '#', onClick: function onClick(e) {
                return _this2.setVisibility(e, 'SHOW_COMPLETED');
              } },
            'Completed'
          )
        )
      );
    }
  }, {
    key: 'setVisibility',
    value: function setVisibility(e, filter) {
      this.props.store.dispatch({
        type: 'SET_VISIBILITY',
        filter: filter
      });

      var links = document.querySelectorAll('a');

      for (var i = 0; i < links.length; i++) {
        links[i].classList.remove('selected');
      }

      e.target.classList.add('selected');
    }
  }]);

  return TodoApp;
}(Component);

var ContentEditable = function (_Component2) {
  _inherits(ContentEditable, _Component2);

  function ContentEditable(props) {
    _classCallCheck(this, ContentEditable);

    var _this3 = _possibleConstructorReturn(this, (ContentEditable.__proto__ || Object.getPrototypeOf(ContentEditable)).call(this, props));

    _this3.state = { editing: false };
    return _this3;
  }

  _createClass(ContentEditable, [{
    key: 'render',
    value: function render() {
      var _this4 = this;

      return this.state.editing ? React.createElement('input', { className: 'editor', ref: 'todoText', onBlur: function onBlur(e) {
          return _this4.handleChange(e);
        }, defaultValue: this.props.html }) : React.createElement(
        'span',
        { onDoubleClick: function onDoubleClick(e) {
            return _this4.handleDoubleClick();
          } },
        this.props.html
      );
    }
  }, {
    key: 'handleDoubleClick',
    value: function handleDoubleClick() {
      this.setState({
        editing: true
      });
    }
  }, {
    key: 'handleChange',
    value: function handleChange(e) {
      var text = this.refs.todoText.value;
      this.props.editTodo(text);
      this.setState({
        editing: false
      });
    }
  }]);

  return ContentEditable;
}(Component);

var render = function render() {
  ReactDOM.render(React.createElement(TodoApp, {
    store: store
  }), document.getElementById('root'));
};

store.subscribe(render);
render();