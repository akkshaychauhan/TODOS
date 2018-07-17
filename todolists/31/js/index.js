var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NewTodo = function (_React$Component) {
    _inherits(NewTodo, _React$Component);

    function NewTodo() {
        _classCallCheck(this, NewTodo);

        return _possibleConstructorReturn(this, (NewTodo.__proto__ || Object.getPrototypeOf(NewTodo)).apply(this, arguments));
    }

    _createClass(NewTodo, [{
        key: "create",
        value: function create(event) {
            event.preventDefault();
            var text = this.refs.newTodoText.value;
            if (text) {
                this.props.createTask(text);
                this.refs.newTodoText.value = '';
            }
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "form",
                { onSubmit: this.create.bind(this) },
                React.createElement(
                    "label",
                    null,
                    "New TODO:"
                ),
                " ",
                React.createElement("input", { type: "text", ref: "newTodoText" }),
                " ",
                React.createElement(
                    "button",
                    { type: "submit" },
                    "+"
                )
            );
        }
    }]);

    return NewTodo;
}(React.Component);

var TodoList = function (_React$Component2) {
    _inherits(TodoList, _React$Component2);

    function TodoList() {
        _classCallCheck(this, TodoList);

        return _possibleConstructorReturn(this, (TodoList.__proto__ || Object.getPrototypeOf(TodoList)).apply(this, arguments));
    }

    _createClass(TodoList, [{
        key: "render",
        value: function render() {
            var items = [];
            var todos = _.sortBy(this.props.todos, 'done');

            for (var index in todos) {
                items.push(React.createElement(Todo, { todo: todos[index], key: index, toggle: this.props.toggle }));
            }

            return React.createElement(
                "ul",
                null,
                items
            );
        }
    }]);

    return TodoList;
}(React.Component);

var Todo = function (_React$Component3) {
    _inherits(Todo, _React$Component3);

    function Todo() {
        _classCallCheck(this, Todo);

        return _possibleConstructorReturn(this, (Todo.__proto__ || Object.getPrototypeOf(Todo)).apply(this, arguments));
    }

    _createClass(Todo, [{
        key: "done",
        value: function done(event) {
            event.preventDefault();

            this.props.toggle(this.props.todo);
        }
    }, {
        key: "render",
        value: function render() {
            var todo = this.props.todo;
            if (todo.done) {
                return React.createElement(
                    "li",
                    null,
                    React.createElement(
                        "del",
                        null,
                        todo.text
                    ),
                    " ",
                    React.createElement(
                        "a",
                        { href: "", onClick: this.done.bind(this) },
                        "\u2713"
                    )
                );
            } else {
                return React.createElement(
                    "li",
                    null,
                    todo.text,
                    " ",
                    React.createElement(
                        "a",
                        { href: "", onClick: this.done.bind(this) },
                        "\u2713"
                    )
                );
            }
        }
    }]);

    return Todo;
}(React.Component);

var TodoApp = function (_React$Component4) {
    _inherits(TodoApp, _React$Component4);

    function TodoApp() {
        _classCallCheck(this, TodoApp);

        var _this4 = _possibleConstructorReturn(this, (TodoApp.__proto__ || Object.getPrototypeOf(TodoApp)).call(this));

        _this4.state = {
            todos: [{
                text: 'Do stuff',
                done: false
            }, {
                text: 'Done thing',
                done: true
            }, {
                text: 'Other stuff',
                done: false
            }]
        };
        return _this4;
    }

    _createClass(TodoApp, [{
        key: "createTask",
        value: function createTask(text) {
            this.state.todos.push({
                text: text,
                done: false
            });

            this.setState({ todos: this.state.todos });
        }
    }, {
        key: "toggleTask",
        value: function toggleTask(todo) {
            var task = _.find(this.state.todos, todo);
            task.done = !task.done;
            this.setState({ todos: this.state.todos });
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(NewTodo, { createTask: this.createTask.bind(this) }),
                React.createElement(TodoList, { todos: this.state.todos, toggle: this.toggleTask.bind(this) })
            );
        }
    }]);

    return TodoApp;
}(React.Component);

ReactDOM.render(React.createElement(TodoApp, null), document.getElementById('todo-app'));