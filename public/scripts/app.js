'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VisibilityTogle = function (_React$Component) {
  _inherits(VisibilityTogle, _React$Component);

  function VisibilityTogle(props) {
    _classCallCheck(this, VisibilityTogle);

    var _this = _possibleConstructorReturn(this, (VisibilityTogle.__proto__ || Object.getPrototypeOf(VisibilityTogle)).call(this, props));

    _this.handleToggleVisibility = _this.handleToggleVisibility.bind(_this);

    _this.state = {
      visibillity: false,
      buttonText: 'Show Details',
      parText: ''
    };

    return _this;
  }

  _createClass(VisibilityTogle, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'h1',
          null,
          'Visibitity Toggle'
        ),
        React.createElement(
          'button',
          { onClick: this.handleToggleVisibility },
          this.state.buttonText
        ),
        React.createElement(
          'p',
          null,
          this.state.parText
        )
      );
    }
  }, {
    key: 'handleToggleVisibility',
    value: function handleToggleVisibility() {
      var _this2 = this;

      this.setState(function () {
        if (_this2.state.visibillity === false) {
          return {
            visibillity: true,
            buttonText: 'HIDE Details',
            parText: 'Details revealed'
          };
        } else {
          return {
            visibillity: false,
            buttonText: 'Show Details',
            parText: ''
          };
        }
      });
    }
  }]);

  return VisibilityTogle;
}(React.Component);

ReactDOM.render(React.createElement(VisibilityTogle, null), document.getElementById('app'));
