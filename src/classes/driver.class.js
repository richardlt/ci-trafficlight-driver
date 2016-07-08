var winston = require('winston'),
  HID = require('node-hid');

var ColorConstant = require('../constants/color.constant.js');

module.exports = function Driver(delay) {

  var _delay = delay ? delay : 1000;

  var _color = null;

  var _interval = null;
  var _on = true;

  var _devices = [];
  var _device = null;

  HID.devices().forEach(function(device) {
    if (device.vendorId === 3408 && device.productId === 8) {
      _devices.push(device);
    }
  });

  if (_devices.length > 0) {
    _device = new HID.HID(_devices[0].path);
  }

  var _blink = function() {
    _sendColor(_on ? _color : null);
    _on = !_on;
  };

  var _sendColor = function(color) {
    if (_device) {
      // clean leds
      _device.write([0x00, 0x00, 0x10, 0x0]);
      _device.write([0x00, 0x00, 0x11, 0x0]);
      _device.write([0x00, 0x00, 0x12, 0x0]);
      // set led
      value = 0x0;
      switch (color) {
        case ColorConstant.RED:
          value = 0x10;
          break;
        case ColorConstant.ORANGE:
          value = 0x11;
          break;
        case ColorConstant.GREEN:
          value = 0x12;
          break;
      }
      _device.write([0x00, 0x00, value, 0x1]);
    }
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
        _interval = setInterval(_blink, _delay);
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
