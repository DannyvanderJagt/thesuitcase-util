'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _time = require('./time');

var _time2 = _interopRequireDefault(_time);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Expire = {
  seconds: function seconds() {
    var amount = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];

    return Date.now() + _time2.default.seconds(amount);
  },
  minutes: function minutes() {
    var amount = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];

    return Date.now() + _time2.default.minutes(amount);
  },
  hours: function hours() {
    var amount = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];

    return Date.now() + _time2.default.hours(amount);
  },
  days: function days() {
    var amount = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];

    return Date.now() + _time2.default.days(amount);
  },
  weeks: function weeks() {
    var amount = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];

    return this.days(7);
  },
  months: function months() {
    var amount = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];

    var date = new Date();
    date.setMonth(date.getMonth() + amount);
    return date.getTime();
  }
};

exports.default = Expire;