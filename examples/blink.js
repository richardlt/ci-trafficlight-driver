var CiTrafficlightDriver = require("./../src/ci-trafficlight-driver.js");

var driver = CiTrafficlightDriver.init(50);

var time = 500;

var sequence = function() {
  driver.setColor("red");
  setTimeout(function() {
    driver.setColor("orange");
    setTimeout(function() {
      driver.setColor("green");
      setTimeout(function() {
        driver.setColor("orange");
        setTimeout(function() {
          sequence();
        }, time);
      }, time);
    }, time);
  }, time);
}

sequence();

driver.setBlink(true);
