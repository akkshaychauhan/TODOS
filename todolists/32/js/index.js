var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var TransitionMotion = ReactMotion.TransitionMotion;
var spring = ReactMotion.spring;
var presets = ReactMotion.presets;

var Demo = React.createClass({
  displayName: 'Demo',
  getInitialState: function getInitialState() {
    return {
      todos: {
        // key is creation date
        't1': { text: 'Board the plane' },
        't2': { text: 'Sleep' },
        't3': { text: 'Try to finish coneference slides' },
        't4': { text: 'Eat cheese and drink wine' },
        't5': { text: 'Go around in Uber' },
        't6': { text: 'Talk with conf attendees' },
        't7': { text: 'Show Demo 1' },
        't8': { text: 'Show Demo 2' },
        't9': { text: 'Lament about the state of animation' },
        't10': { text: 'Show Secret Demo' },
        't11': { text: 'Go home' }
      },
      value: ''
    };
  },


  // logic from todo, unrelated to animation
  handleChange: function handleChange(_ref) {
    var value = _ref.target.value;

    this.setState({ value: value });
  },
  handleSubmit: function handleSubmit(e) {
    e.preventDefault();
    var _state = this.state,
        todos = _state.todos,
        value = _state.value;

    this.setState({
      todos: _extends(_defineProperty({}, 't' + Date.now(), { text: value }), todos)
    });
  },
  handleDestroy: function handleDestroy(date) {
    var todos = this.state.todos;

    delete todos[date];
    this.forceUpdate();
  },


  // actual animation-related logic
  getDefaultValue: function getDefaultValue() {
    var todos = this.state.todos;

    return Object.keys(todos).reduce(function (configs, date) {
      configs[date] = {
        height: spring(0),
        opacity: spring(1),
        data: todos[date]
      };
      return configs;
    }, {});
  },
  getEndValue: function getEndValue() {
    var _state2 = this.state,
        todos = _state2.todos,
        value = _state2.value;

    return Object.keys(todos).filter(function (date) {
      var todo = todos[date];
      return todo.text.toUpperCase().indexOf(value.toUpperCase()) >= 0;
    }).reduce(function (configs, date) {
      configs[date] = {
        height: spring(60, presets.wobbly),
        opacity: spring(1, presets.wobbly),
        data: todos[date]
      };
      return configs;
    }, {});
  },
  willEnter: function willEnter(date) {
    return {
      height: spring(0),
      opacity: spring(2),
      data: this.state.todos[date]
    };
  },
  willLeave: function willLeave(date, keyThatJustLeft) {
    return {
      height: spring(0), //mounting process
      opacity: spring(10),
      data: keyThatJustLeft.data
    };
  },
  render: function render() {
    var _this = this;

    var _state3 = this.state,
        todos = _state3.todos,
        value = _state3.value;

    return React.createElement(
      'section',
      { className: 'todoapp' },
      React.createElement(
        'header',
        { className: 'header' },
        React.createElement(
          'h1',
          null,
          'todos'
        ),
        React.createElement(
          'form',
          { onSubmit: this.handleSubmit },
          React.createElement('input', {
            autoFocus: true,
            className: 'new-todo',
            placeholder: 'What needs to be done?',
            value: value,
            onChange: this.handleChange
          })
        )
      ),
      React.createElement(
        'section',
        { className: 'main' },
        React.createElement('input', { className: 'toggle-all', type: 'checkbox', onChange: this.handleToggleAll }),
        React.createElement(
          TransitionMotion,
          { defaultStyles: this.getDefaultValue(), styles: this.getEndValue(), willLeave: this.willLeave,
            willEnter: this.willEnter },
          function (configs) {
            return React.createElement(
              'ul',
              { className: 'todo-list' },
              Object.keys(configs).map(function (date) {
                var config = configs[date];

                var text = config.data.text,
                    style = _objectWithoutProperties(config, ['data']);

                return React.createElement(
                  'li',
                  { key: date, style: style },
                  React.createElement(
                    'div',
                    { className: 'view' },
                    React.createElement(
                      'label',
                      null,
                      text
                    ),
                    React.createElement('button', {
                      className: 'destroy',
                      onClick: _this.handleDestroy.bind(null, date)
                    })
                  )
                );
              })
            );
          }
        )
      ),
      React.createElement(
        'footer',
        { className: 'footer' },
        React.createElement(
          'span',
          { className: 'todo-count' },
          React.createElement(
            'strong',
            null,
            Object.keys(todos).filter(function (key) {
              return !todos[key].isDone;
            }).length
          ),
          ' item left'
        )
      )
    );
  }
});

React.render(React.createElement(Demo, null), document.querySelector('#content'));