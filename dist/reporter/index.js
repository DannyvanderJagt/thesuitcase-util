'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _colors = require('./colors');

var _colors2 = _interopRequireDefault(_colors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Reporter = (function () {
  function Reporter(name, color) {
    _classCallCheck(this, Reporter);

    this.name = name;
    this.color = _colors2.default[color] || _colors2.default.gray;
  }

  _createClass(Reporter, [{
    key: 'log',
    value: function log(msg) {
      this.write(msg);
    }
  }, {
    key: 'success',
    value: function success(msg) {
      this.write(_colors2.default.green(msg));
    }
  }, {
    key: 'error',
    value: function error(msg) {
      this.write(_colors2.default.red(msg));
    }
  }, {
    key: 'statusChange',
    value: function statusChange(previous, current) {
      this.write(_colors2.default.blue('' + current));
    }
  }, {
    key: 'newLine',
    value: function newLine() {
      console.log('');
    }
  }, {
    key: 'clearScreen',
    value: function clearScreen() {
      console.log('\x1B[2J');
    }
  }, {
    key: 'write',
    value: function write(msg) {
      var line = [_colors2.default.base('[' + (0, _moment2.default)().format('h:mm:ss') + ']'), this.name ? this.color('[' + this.name + ']') : '', msg].join(' ');

      console.log(line);
    }
  }, {
    key: 'namespace',
    value: function namespace(name, color) {
      return new Reporter(name, color);
    }
  }]);

  return Reporter;
})();

// Clear the screen.

var report = new Reporter();
report.clearScreen();

exports.default = report;