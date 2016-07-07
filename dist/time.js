"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var Time = {
  seconds: function seconds() {
    var amount = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];

    return amount * 1000;
  },
  minutes: function minutes() {
    var amount = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];

    return amount * 60000;
  },
  hours: function hours() {
    var amount = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];

    return amount * 3600000;
  },
  days: function days() {
    var amount = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];

    return amount * 86400000;
  },
  weeks: function weeks() {
    var amount = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];

    return this.days(7);
  },
  months: function months() {
    var amount = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];

    var date = new Date();
    date.setMonth(date.getMonth() + amount);
    return date.getTime() - Date.now();
  }
};

exports.default = Time;