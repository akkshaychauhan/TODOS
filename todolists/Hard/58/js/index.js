var _hyperapp = hyperapp,
    h = _hyperapp.h,
    app = _hyperapp.app;
/** @jsx h */

var FilterInfo = { All: 0, Todo: 1, Done: 2 };

var TodoItem = function TodoItem(_ref) {
  var id = _ref.id,
      value = _ref.value,
      done = _ref.done,
      toggle = _ref.toggle;
  return h(
    "li",
    {
      "class": done && "done",
      onclick: function onclick(e) {
        return toggle({ done: done, id: id });
      }
    },
    value
  );
};

var state = {
  todos: [],
  filter: FilterInfo.All,
  input: "",
  placeholder: "Do that thing..."
};

var view = function view(state, actions) {
  return h(
    "div",
    null,
    h(
      "h1",
      null,
      "Todo"
    ),
    h(
      "p",
      null,
      Object.keys(FilterInfo).filter(function (key) {
        return FilterInfo[key] !== state.filter;
      }).map(function (key) {
        return h(
          "span",
          null,
          h(
            "a",
            {
              href: "#",
              onclick: function onclick() {
                return actions.filter({
                  value: FilterInfo[key]
                });
              }
            },
            key
          ),
          " "
        );
      })
    ),
    h(
      "div",
      { "class": "flex" },
      h("input", {
        type: "text",
        onkeyup: function onkeyup(e) {
          return e.keyCode === 13 ? actions.add() : "";
        },
        oninput: function oninput(e) {
          return actions.input({ value: e.target.value });
        },
        value: state.input,
        placeholder: state.placeholder
      }),
      h(
        "button",
        { onclick: actions.add },
        "\uFF0B"
      )
    ),
    h(
      "p",
      null,
      h(
        "ul",
        null,
        state.todos.filter(function (t) {
          return state.filter === FilterInfo.Done ? t.done : state.filter === FilterInfo.Todo ? !t.done : state.filter === FilterInfo.All;
        }).map(function (t) {
          return h(TodoItem, {
            id: t.id,
            value: t.value,
            done: t.done,
            toggle: actions.toggle
          });
        })
      )
    )
  );
};

var actions = {
  add: function add() {
    return function (state) {
      return {
        input: "",
        todos: state.todos.concat({
          done: false,
          value: state.input,
          id: state.todos.length + 1
        })
      };
    };
  },
  toggle: function toggle(_ref2) {
    var id = _ref2.id,
        done = _ref2.done;
    return function (state) {
      return {
        todos: state.todos.map(function (t) {
          return id === t.id ? Object.assign({}, t, { done: !done }) : t;
        })
      };
    };
  },
  input: function input(_ref3) {
    var value = _ref3.value;
    return { input: value };
  },
  filter: function filter(_ref4) {
    var value = _ref4.value;
    return { filter: value };
  }
};

app(state, actions, view, document.body);