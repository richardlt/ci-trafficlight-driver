var winston = require('winston');

var Driver = require('./classes/driver.class.js');

winston.level = 'debug';

module.exports = {

  init: function(delay) {
    winston.info('[CiTrafficlightDriver][init] Init trafficlight driver');
    return new Driver(delay);
  }

};
