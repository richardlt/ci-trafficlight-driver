var CiTrafficlightDriver = require("./../src/ci-trafficlight-driver.js");

var driver = CiTrafficlightDriver.init(500);

driver.setColor("red");

driver.setBlink(true);
