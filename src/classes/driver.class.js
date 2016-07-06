var winston = require('winston');

var ColorConstant = require('../constants/color.constant.js');

module.exports = function Driver(delay) {

  var _delay = delay ? delay : 1000;

  var _color = null;

  var _interval = null;
  var _on = true;

  var _blink = function() {
    _sendColor(_on ? _color : null);
    _on = !_on;
  };

  var _sendColor = function(color) {
    // TODO call node hid device
  };

  this.setColor = function(color) {
    if (color === ColorConstant.GREEN || color === ColorConstant.ORANGE || color === ColorConstant.RED) {
      _color = color;
      if (!_interval) {
        _sendColor(_color);
      }
    } else {
      winston.error('[Driver][setColor] You should give a valid color');
    }
    return this;
  };

  this.setBlink = function(state) {
    if (state) {
      if (!_interval) {
        _interval = setInterval(_blink(), _delay);
        _blink();
      }
    } else {
      clearInterval(_interval);
      _interval = null;
      _on = true;
    }
  };

  this.clean = function() {
    clearInterval(_interval);
    _interval = null;
    _color = null;
    _on = true;
    _sendColor(null);
  };

}
