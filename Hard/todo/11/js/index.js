var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var _React = React,
    Component = _React.Component;
var _ReactRedux = ReactRedux,
    connect = _ReactRedux.connect,
    Provider = _ReactRedux.Provider;
var _Redux = Redux,
    combineReducers = _Redux.combineReducers,
    createStore = _Redux.createStore;

var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

//action types
var ADD_TODO = "ADD_TODO";
var REMOVE_TODO = "REMOVE_TODO";
var TOGGLE_TODO = "TOGGLE_TODO";
var SET_FILTER = "SET_FILTER";

//seed todos
var exampleTodos = [{
  text: "react",
  completed: false
}, {
  text: "redux",
  completed: true
}, {
  text: "repeat",
  completed: false
}];

//reducers
var todos = function todos() {
  var todos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : exampleTodos;
  var action = arguments[1];

  switch (action.type) {
    case ADD_TODO:
      return [].concat(_toConsumableArray(todos), [{
        text: action.text,
        completed: false
      }]);
    case REMOVE_TODO:
      return [].concat(_toConsumableArray(todos.slice(0, action.i)), _toConsumableArray(todos.slice(action.i + 1)));
    case TOGGLE_TODO:
      return todos.map(function (t, i) {
        var c = t.completed;
        if (i === action.i) {
          return Object.assign({}, t, {
            completed: !c
          });
        }return t;
      });
    default:
      return todos;
  }
};

var filter = function filter() {
  var filter = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "SHOW_ALL";
  var action = arguments[1];

  switch (action.type) {
    case SET_FILTER:
      return action.filterType;
    default:
      return filter;
  }
};

var appReducer = combineReducers({
  todos: todos,
  filter: filter
});

//store
var store = createStore(appReducer);

//action creators
var addTodo = function addTodo(text, i) {
  return {
    text: text,
    type: ADD_TODO
  };
};

var removeTodo = function removeTodo(i) {
  return {
    i: i,
    type: REMOVE_TODO
  };
};

var toggleTodo = function toggleTodo(i) {
  return {
    i: i,
    type: TOGGLE_TODO
  };
};

var setFilter = function setFilter(filterType) {
  return {
    filterType: filterType,
    type: SET_FILTER
  };
};

//presentational components 
var Todo = function Todo(_ref) {
  var text = _ref.text,
      completed = _ref.completed,
      index = _ref.index;
  return React.createElement(
    "li",
    null,
    React.createElement(
      "button",
      {
        className: "remove-todo",
        onClick: function onClick() {
          return store.dispatch(removeTodo(index));
        }
      },
      React.createElement("i", { className: "fa fa-times",
        "aria-hidden": "true"
      })
    ),
    React.createElement(
      "span",
      null,
      text
    ),
    React.createElement(
      "button",
      {
        className: completed ? "toggle-todo completed-todo" : "toggle-todo",
        onClick: function onClick() {
          return store.dispatch(toggleTodo(index));
        }
      },
      React.createElement("i", {
        className: "fa fa-check",
        "aria-hidden": "true"
      })
    )
  );
};

var TodoList = function TodoList(_ref2) {
  var todos = _ref2.todos,
      filterType = _ref2.filterType;
  return React.createElement(
    "div",
    { className: "todos-wrapper" },
    React.createElement(
      ReactCSSTransitionGroup,
      {
        className: "todos-list",
        transitionName: "todo-group",
        transitionEnterTimeout: 200,
        transitionLeaveTimeout: 200,
        component: "ul"
      },
      todos.filter(function (t) {
        if (filterType === "SHOW_COMPLETED") {
          return t.completed === true;
        } else if (filterType === "SHOW_UNFINISHED") {
          return t.completed === false;
        }return t;
      }).reverse().map(function (t) {
        return React.createElement(Todo, {
          text: t.text,
          completed: t.completed,
          index: todos.indexOf(t),
          key: t.text
        });
      })
    )
  );
};
var mapTodoListStateToProps = function mapTodoListStateToProps(state) {
  return {
    todos: state.todos,
    filterType: state.filter
  };
};
var ConnectedTodoList = connect(mapTodoListStateToProps)(TodoList);

var Filters = function Filters(_ref3) {
  var dispatch = _ref3.dispatch;
  return React.createElement(
    "div",
    { className: "filters-wrapper" },
    React.createElement(
      "button",
      {
        onClick: function onClick() {
          return dispatch(setFilter("SHOW_ALL"));
        }
      },
      " ",
      React.createElement(
        "span",
        null,
        "ALL"
      )
    ),
    React.createElement(
      "button",
      {
        onClick: function onClick() {
          return dispatch(setFilter("SHOW_COMPLETED"));
        }
      },
      " ",
      React.createElement(
        "span",
        null,
        "FINISHED"
      )
    ),
    React.createElement(
      "button",
      {
        onClick: function onClick() {
          return dispatch(setFilter("SHOW_UNFINISHED"));
        }
      },
      " ",
      React.createElement(
        "span",
        null,
        "WORKING"
      )
    )
  );
};
var mapFilterStateToProps = function mapFilterStateToProps(state) {
  return {
    filter: state.filter
  };
};

var ConnectedFilters = connect(mapFilterStateToProps)(Filters);

var AddTodo = function AddTodo(_ref4) {
  var dispatch = _ref4.dispatch;

  var input = void 0;

  return React.createElement(
    "div",
    { className: "form-wrapper" },
    React.createElement(
      "form",
      { onSubmit: function onSubmit(e) {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          dispatch(addTodo(input.value));
          input.value = '';
        } },
      React.createElement("input", { ref: function ref(node) {
          input = node;
        } }),
      React.createElement(
        "button",
        { type: "submit" },
        React.createElement("i", { className: "fa fa-plus-circle",
          "aria-hidden": "true"
        })
      )
    )
  );
};
var ConnectedAddTodo = connect()(AddTodo);

var TodosApp = function TodosApp() {
  return React.createElement(
    "div",
    { className: "app-wrapper" },
    React.createElement(ConnectedFilters, null),
    React.createElement(ConnectedTodoList, null),
    React.createElement(ConnectedAddTodo, null)
  );
};

// index.js

var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      return React.createElement(TodosApp, null);
    }
  }]);

  return App;
}(Component);

;

ReactDOM.render(React.createElement(
  Provider,
  { store: store },
  React.createElement(App, null)
), document.getElementById("root"));