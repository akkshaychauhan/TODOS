var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HotAir = function HotAir() {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "svg",
      { className: "hot-air", width: "50", viewBox: "0 0 84 126", fill: "none" },
      React.createElement("path", {
        d: "M75.1224 32.5435C75.1224 53.4471 58.3042 88.0945 37.5602 88.0945C16.8162 88.0945 -1.35462e-07 53.4471 -1.35462e-07 32.5435C-1.35462e-07 11.6379 16.8162 1.85674e-07 37.5602 1.85674e-07C58.3042 1.85674e-07 75.1224 11.6379 75.1224 32.5435Z",
        transform: "translate(8.87762 6.95734)",
        fill: "#E56A77"
      }),
      React.createElement("path", {
        d: "M34.3288 11.3081C34.3288 16.2847 30.3259 19.8805 25.388 19.8805H13.5196C8.5817 19.8805 4.5769 16.2847 4.5769 11.3081L-8.1277e-07 7.27537e-07H38.9076L34.3288 11.3081Z",
        transform: "translate(26.6032 106.12)",
        fill: "#EDC951"
      }),
      React.createElement("path", {
        d: "M40.5194 94.0565C18.1518 94.0565 -1.35462e-07 58.6383 -1.35462e-07 35.5235C-1.35462e-07 14.2761 16.2835 0 40.5194 0C64.7553 0 81.0408 14.2761 81.0408 35.5235C81.0408 58.6383 62.8871 94.0565 40.5194 94.0565ZM40.5194 5.96396C23.2949 5.96396 5.91841 15.1046 5.91841 35.5235C5.91841 55.3285 22.0895 88.0925 40.5194 88.0925C58.9493 88.0925 75.1224 55.3285 75.1224 35.5235C75.1224 15.1046 57.742 5.96396 40.5194 5.96396Z",
        fill: "black"
      }),
      React.createElement("path", {
        d: "M28.3465 25.8465H16.4781C10.0211 25.8465 4.91744 21.0944 4.59193 14.9159L0.218222 4.10841C-0.152665 3.18859 -0.0461315 2.14361 0.502308 1.31914C1.05075 0.494678 1.97204 -3.57706e-06 2.95845 -3.57706e-06H41.8661C42.8525 -3.57706e-06 43.7738 0.494678 44.3222 1.31914C44.8707 2.14361 44.9772 3.18859 44.6043 4.10841L40.2326 14.9159C39.9071 21.0944 34.8034 25.8465 28.3465 25.8465ZM7.36174 5.96396L10.2756 13.1636C10.4196 13.5212 10.4946 13.9046 10.4946 14.2901C10.4946 17.4786 13.0671 19.8805 16.4781 19.8805H28.3465C31.7574 19.8805 34.33 17.4786 34.33 14.2901C34.33 13.9046 34.4049 13.5212 34.5489 13.1636L37.4628 5.96396H7.36174Z",
        transform: "translate(17.7264 98.1669)",
        fill: "black"
      }),
      React.createElement("path", {
        d: "M30.5785 5.96395H2.9592C1.32572 5.96395 -8.72975e-07 4.62892 -8.72975e-07 2.98198C-8.72975e-07 1.33305 1.32572 -1.45507e-06 2.9592 -1.45507e-06H30.5785C32.2119 -1.45507e-06 33.5377 1.33305 33.5377 2.98198C33.5377 4.62892 32.2119 5.96395 30.5785 5.96395Z",
        transform: "translate(22.4249 110.097)",
        fill: "black"
      }),
      React.createElement("path", {
        d: "M2.96042 47.9719C1.86355 47.9719 0.810072 47.3521 0.297143 46.2912C-0.415039 44.8091 0.196527 43.0251 1.66627 42.3059C13.144 36.6897 22.3846 16.2012 22.3846 2.98198C22.3846 1.33305 23.7104 5.45653e-07 25.3439 5.45653e-07C26.9773 5.45653e-07 28.3031 1.33305 28.3031 2.98198C28.3031 18.5216 18.0169 40.9351 4.25261 47.6699C3.83635 47.8746 3.39444 47.9719 2.96042 47.9719Z",
        transform: "translate(37.0086 44.3264)",
        fill: "black"
      }),
      React.createElement("path", {
        d: "M25.3426 47.9719C24.9086 47.9719 24.4667 47.8746 24.0524 47.6699C10.2862 40.9351 -4.51539e-07 18.5216 -4.51539e-07 2.98198C-4.51539e-07 1.33305 1.32572 5.45653e-07 2.9592 5.45653e-07C4.59269 5.45653e-07 5.91841 1.33305 5.91841 2.98198C5.91841 16.2012 15.161 36.6897 26.6368 42.3059C28.1065 43.0251 28.7201 44.8091 28.0059 46.2912C27.495 47.3521 26.4395 47.9719 25.3426 47.9719Z",
        transform: "translate(16.4098 44.3264)",
        fill: "black"
      })
    )
  );
};

var Button = function (_React$Component) {
  _inherits(Button, _React$Component);

  function Button() {
    _classCallCheck(this, Button);

    return _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).apply(this, arguments));
  }

  _createClass(Button, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          onClick = _props.onClick,
          className = _props.className,
          children = _props.children;


      return React.createElement(
        "button",
        { className: className, onClick: onClick, type: "button" },
        children
      );
    }
  }]);

  return Button;
}(React.Component);

var Sky = function (_React$Component2) {
  _inherits(Sky, _React$Component2);

  function Sky(props) {
    _classCallCheck(this, Sky);

    var _this2 = _possibleConstructorReturn(this, (Sky.__proto__ || Object.getPrototypeOf(Sky)).call(this, props));

    _this2.Cloud = function () {
      // var random = Math.random();
      var top = Math.floor(Math.random() * 65 - 15) + "%";
      var dim = Math.floor((Math.random() + 0.3) * 80) + "px";
      var index = Math.round(Math.random() * 2);
      var velocity = Math.floor(Math.random() * 5 * 10) + "s";
      console.log(top, dim, index, velocity);
      var cloudStyle = {
        top: top,
        height: dim,
        zIndex: index,
        animationDuration: velocity,
        animationTimingFunction: "linear",
        animationName: "cloud",
        animationDelay: "0",
        position: "absolute",
        padding: "0",
        margin: "0",
        left: "-100px",
        visibility: "hidden"
      };

      _this2.setState({ data: [].concat(_toConsumableArray(_this2.state.data), [cloudStyle]) });
    };

    _this2.state = {
      data: []
    };
    return _this2;
  }

  _createClass(Sky, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this3 = this;

      this.Cloud();
      setInterval(function () {
        return _this3.Cloud();
      }, 5000); //cloud density
    }
  }, {
    key: "render",
    value: function render() {
      // console.log(this.state.data);
      return this.state.data.map(function (e, i) {
        return React.createElement(
          "div",
          { style: e, key: i },
          React.createElement(
            "svg",
            { height: e.height, viewBox: "0 0 196 126", fill: "none" },
            React.createElement(
              "g",
              { id: "cloud" },
              React.createElement("ellipse", {
                id: "Ellipse 2",
                cx: "44.5",
                cy: "56",
                rx: "44.5",
                ry: "56",
                transform: "translate(78 7)",
                fill: "white"
              }),
              React.createElement("circle", {
                id: "Ellipse 2.1",
                cx: "42",
                cy: "42",
                r: "42",
                transform: "translate(40 35)",
                fill: "white"
              }),
              React.createElement("ellipse", {
                id: "Ellipse 2.2",
                cx: "33",
                cy: "31.5",
                rx: "33",
                ry: "31.5",
                transform: "translate(122 58)",
                fill: "white"
              }),
              React.createElement("ellipse", {
                id: "Ellipse 2.3",
                cx: "33",
                cy: "31.5",
                rx: "33",
                ry: "31.5",
                transform: "translate(7 56)",
                fill: "white"
              }),
              React.createElement(
                "g",
                { id: "cloud_2" },
                React.createElement(
                  "g",
                  { id: "Group" },
                  React.createElement("path", {
                    id: "Vector",
                    d: "M122.5 12.6C142.621 12.6 159.011 29.31 159.25 49.9326C159.154 50.6957 159.082 51.4584 159.059 52.2459L158.748 61.499L167.265 64.5506C177.123 68.0817 183.75 77.5932 183.75 88.2C183.75 102.104 172.768 113.4 159.25 113.4H36.75C23.244 113.4 12.25 102.104 12.25 88.2C12.25 74.4432 23.0407 63.2213 36.3672 63C36.9414 63.0862 37.5397 63.1599 38.1377 63.1969L47.445 63.8245L50.5075 54.7805C53.9528 44.617 63.1882 37.8 73.5 37.8C74.6963 37.8 76.0124 37.9477 77.7829 38.2678L86.3602 39.855L90.6309 32.0414C97.1865 20.0568 109.389 12.6 122.5 12.6ZM122.5 0C104.149 0 88.3458 10.5084 79.9481 25.8647C77.8545 25.4831 75.713 25.2 73.5 25.2C57.4456 25.2 43.9396 35.8561 38.9393 50.6217C38.2097 50.5725 37.5038 50.4 36.75 50.4C16.4609 50.4 0 67.3312 0 88.2C0 109.069 16.4609 126 36.75 126H159.25C179.539 126 196 109.069 196 88.2C196 71.6869 185.64 57.7828 171.285 52.6393C171.309 51.8766 171.5 51.1631 171.5 50.4C171.5 22.567 149.56 0 122.5 0Z",
                    fill: "#292929"
                  })
                )
              )
            )
          )
        );
      });
    }
  }]);

  return Sky;
}(React.Component);

var init = [{
  value: "Don't"
  // style: {}
}, {
  value: "forget"
  // style: {}
}, {
  value: "to like (:"
  // style: {}
}];

var ToDo = function (_React$Component3) {
  _inherits(ToDo, _React$Component3);

  function ToDo(props) {
    _classCallCheck(this, ToDo);

    var _this4 = _possibleConstructorReturn(this, (ToDo.__proto__ || Object.getPrototypeOf(ToDo)).call(this, props));

    _this4.state = {
      init: init,
      adder: false,
      value: ""
    };

    _this4.handleText = _this4.handleText.bind(_this4);
    _this4.remove = _this4.remove.bind(_this4);
    _this4.add = _this4.add.bind(_this4);
    return _this4;
  }

  _createClass(ToDo, [{
    key: "handleText",
    value: function handleText(text) {
      this.setState({
        todo: {
          value: text.target.value,
          time: this.state.time
        },
        value: text.target.value
      });
    }
  }, {
    key: "remove",
    value: function remove(el) {
      var _this5 = this;

      el.style = {
        animationName: "disappear",
        animationDuration: ".6s",
        animationTimingFunction: "cubic-bezier(.53,-0.17,.91,-0.2)"
      };
      this.setState(this.state);
      var update = this.state.init.filter(function (e) {
        console.log(e !== el);
        return e !== el;
      });
      setTimeout(function () {
        _this5.setState({ init: update });
      }, 600);
    }
  }, {
    key: "add",
    value: function add(e) {
      e.preventDefault();
      e.stopPropagation();

      var todo = [this.state.todo];
      todo.push.apply(todo, _toConsumableArray(this.state.init));
      console.log(todo);
      this.setState({
        init: todo,
        adder: false,
        value: "",
        time: ""
      });
    }
  }, {
    key: "showAdder",
    value: function showAdder() {
      this.setState({ adder: true });
    }
  }, {
    key: "render",
    value: function render() {
      var _this6 = this;

      return React.createElement(
        "div",
        null,
        React.createElement(
          "div",
          { className: "todo" },
          this.state.init.map(function (e, i) {
            return React.createElement(
              "div",
              { style: e.style, className: "task", key: i },
              React.createElement(
                "div",
                { className: "content" },
                React.createElement(
                  "div",
                  { className: "left" },
                  e.value
                )
              ),
              React.createElement(
                "button",
                { onClick: function onClick() {
                    return _this6.remove(e);
                  }, className: "right" },
                "\xD7"
              )
            );
          })
        ),
        React.createElement(
          "div",
          { className: "addControls" },
          React.createElement(
            "form",
            {
              className: this.state.adder ? "appear form" : "form",
              onKeyDown: function onKeyDown(e) {
                return e.keyCode == 13 ? _this6.add(e) : console.log("please press enter");
              }
            },
            React.createElement("input", {
              onChange: this.handleText,
              className: "input shadow",
              type: "text",
              value: this.state.value,
              placeholder: "Type your task..."
            }),
            React.createElement(
              "button",
              { onClick: function onClick(e) {
                  return _this6.add(e);
                }, type: "button" },
              "add"
            )
          ),
          React.createElement(
            "button",
            {
              onClick: function onClick() {
                return _this6.showAdder();
              },
              className: "plusButton shadow"
            },
            React.createElement(
              "svg",
              { className: "plusIcon", width: "38", height: "38", viewBox: "0 0 38 38", fill: "none" },
              React.createElement(
                "g",
                { id: "+" },
                React.createElement("path", { id: "Stroke 112", d: "M0 0H32.6733", transform: "translate(2.97028 18.3466)", stroke: "white", "stroke-width": "4", "stroke-linecap": "round", "stroke-linejoin": "round" }),
                React.createElement("path", { id: "Stroke 113", d: "M0 0V32.6733", transform: "translate(18.6534 2.66339)", stroke: "white", "stroke-width": "4", "stroke-linecap": "round", "stroke-linejoin": "round" })
              )
            )
          )
        )
      );
    }
  }]);

  return ToDo;
}(React.Component);

var Card = function (_React$Component4) {
  _inherits(Card, _React$Component4);

  function Card(props) {
    _classCallCheck(this, Card);

    var _this7 = _possibleConstructorReturn(this, (Card.__proto__ || Object.getPrototypeOf(Card)).call(this, props));

    _this7.state = {
      data: true
    };
    _this7.switchToTasks = _this7.switchToTasks.bind(_this7);
    return _this7;
  }

  _createClass(Card, [{
    key: "switchToTasks",
    value: function switchToTasks() {
      this.setState({ data: false });
    }
  }, {
    key: "render",
    value: function render() {
      var _this8 = this;

      var data = this.state.data;

      return React.createElement(
        "div",
        { className: "card shadow gradient" },
        React.createElement(
          "div",
          { className: data ? "" : "none" },
          React.createElement(HotAir, null),
          React.createElement(
            "div",
            { className: "start" },
            React.createElement(
              "div",
              { className: "text" },
              React.createElement(
                "h1",
                null,
                "Your day\u2019s still empty..."
              ),
              React.createElement(
                "p",
                null,
                "Put in some tasks and make your day!"
              )
            ),
            React.createElement(
              Button,
              {
                className: "add shadow",
                onClick: function onClick() {
                  _this8.switchToTasks();
                }
              },
              "Add"
            )
          )
        ),
        React.createElement(
          "div",
          { className: !data ? "appear" : "none" },
          React.createElement(ToDo, null)
        )
      );
    }
  }]);

  return Card;
}(React.Component);

var App = function (_React$Component5) {
  _inherits(App, _React$Component5);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "App" },
        React.createElement(Sky, null),
        React.createElement(
          "div",
          { className: "container" },
          React.createElement(Card, null),
          React.createElement(
            "div",
            { className: "followMe" },
            React.createElement(
              "a",
              { className: "icon", href: "https://github.com/lucagez/react-cloudy-todo-list", target: "_blank" },
              React.createElement("i", { className: "fab fa-github fa-3x" })
            ),
            React.createElement(
              "a",
              { className: "icon", href: "https://codepen.io/lucagez", target: "_blank" },
              React.createElement("i", { className: "fab fa-codepen fa-3x" })
            )
          )
        )
      );
    }
  }]);

  return App;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.querySelector("#root"));